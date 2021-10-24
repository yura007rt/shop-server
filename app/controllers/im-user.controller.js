const crypto = require('crypto');
const jwt = require('jsonwebtoken'); // аутентификация по JWT для hhtp
const userModel = require('../models/user.model');
const profilesModel = require('../models/profiles.model');
const mongoose = require('mongoose');
const {errorValidate} = require("../utils/response.utils");
const {checkErrorDB} = require("../utils/response.utils");
const {errorUnknown} = require("../utils/response.utils");
const {errorAuthorization} = require("../utils/response.utils");
const {checkEmptyBody} = require("../utils/response.utils");
const user = require('./im-user.controller');
const User = mongoose.model("USERS_LIST", userModel.userSchema);
const ProfilesList = mongoose.model("PROFILES_LIST", profilesModel.profileSchema);
const jwtSecret = "w89ENwwX-Mes5ziUz-kLnNlgj8-OeUbPcPt"; // ключ для подписи JWT
const timeLiveToken = 3600 * 8;

exports.createUser = (req, res) => {
    checkEmptyBody(req, res);
    try {
        user.checkToken(req.headers.authorization).then(checkResult => {
            if (checkResult) {
                const salt = crypto.randomBytes(128).toString('base64'),
                    passwordHash = crypto.pbkdf2Sync(req.body.password, salt, 1, 128, 'sha1'),
                    newObjUser = {...req.body, passwordHash, salt},
                    newUser = new User(newObjUser);
                newUser.save(function (err, result) {
                    checkErrorDB(res, err);
                    const newProfiles = new ProfilesList({
                        nameStore: '',
                        email: '',
                        phone: '',
                        address: '',
                        deliveryArea: '',
                        description: '',
                        storeId: result._id
                    });
                    newProfiles.save((err, result) => {
                        checkErrorDB(res, err);
                    })
                    res.status(200).send();
                });
            } else {
                errorAuthorization(res)
            }
        })
    } catch (err) {
        errorUnknown(res)
    }
};

exports.userLogin = (req, res) => {
    checkEmptyBody(req, res);
    const {user, password} = req.body;
    User.findOne({user}, (err, user) => {
        checkErrorDB(res, err);
        if (!user || !checkPassword(password, user)) {
            return errorValidate(res, 'Нет такого пользователя или пароль неверен.');
        }
        const response = createToken(user);
        const newUser = {
            ...user._doc,
            activeToken: [response.token, ...user._doc.activeToken].slice(0, 3)
        }
        User.findByIdAndUpdate(user._id, newUser, {}, (err, user) => {
            checkErrorDB(res, err);
            return res.status(200).send(response);
        })
    });
};

exports.userLogout = (req, res) => {
    checkEmptyBody(req, res);
    const {token} = req.body;
    user.checkToken(token).then(checkResult => {
        if (checkResult) {
            const payload = jwt.decode(token);
            User.findById(payload.id, (err, user) => {
                checkErrorDB(res, err);
                const newActiveToken = findAndDeleteActiveToken(token, user._doc.activeToken);
                User.findByIdAndUpdate(user._id, {
                    ...user._doc,
                    activeToken: newActiveToken
                }, (err, user) => {
                    checkErrorDB(res, err);
                    return res.status(200).send();
                })
            });
        } else {
            errorAuthorization(res)
        }
    })

};

const findAndDeleteActiveToken = (token, activeToken) => {
    const activeTokenIndex = activeToken.indexOf(token);
    return activeToken.splice(activeTokenIndex, activeTokenIndex);
}

exports.checkUserLogin = (req, res) => {
    checkEmptyBody(req, res);
    const token = req.headers.authorization;
    user.checkToken(token).then(checkResult => {
        if (checkResult) {
            const payload = jwt.decode(token);
            User.findById(payload.id, (err, user) => {
                checkErrorDB(res, err);
                if (!user) {
                    return errorValidate(res, 'Пожалуйста авторизируйтесь');
                }
                return res.status(200).send({
                    displayName: user.displayName,
                    role: user.role,
                    id: user._id,
                    token: token
                });
            });
        } else {
            errorAuthorization(res)
        }
    })
};

createToken = (user) => {
    const payload = {
        id: user.id,
        timeLogin: new Date(3600 * 24)
    };
    const token = jwt.sign(payload, jwtSecret); //здесь создается JWT
    return {
        displayName: user.displayName,
        role: user.role,
        id: user.id,
        token: String(token)
    };
};

exports.checkToken = async (token) => {
    const payload = jwt.decode(token);
    if (!payload) return false;
    if (payload.timeLogin > new Date(3600 * 24) + timeLiveToken) return false;
    return await User.findById(payload.id).then((user) => {
            return !!user._id && user.activeToken.includes(token);
        }
    );
};

exports.getUserIdToken = (token) => {
    const payload = jwt.decode(token);
    return payload.id;
}

checkPassword = (passReq, user) => {
    if (!passReq) return false;
    if (!user.passwordHash) return false;
    return crypto.pbkdf2Sync(passReq, user.salt, 1, 128, 'sha1') == user.passwordHash;
};
