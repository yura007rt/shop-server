const mongoose = require('mongoose');
const profilesModel = require('../models/profiles.model');
const ProfilesList = mongoose.model("PROFILES_LIST", profilesModel.profileSchema);
const user = require('./im-user.controller');
const {notFound} = require("../utils/response.utils");
const {errorUnknown} = require("../utils/response.utils");
const {checkErrorDB} = require("../utils/response.utils");
const {errorValidate} = require("../utils/response.utils");
const {checkEmptyBody} = require("../utils/response.utils");
const {errorAuthorization} = require("../utils/response.utils");
const multer = require("multer");

exports.changeProfileStore = (req, res) => {
    checkEmptyBody(req, res);
    user.checkToken(req.headers.authorization).then(checkResult => {
        if (checkResult) {
            const userId = user.getUserIdToken(req.headers.authorization);
            ProfilesList.updateOne({storeId: userId}, req.body.profile, function (err, result) {
                checkErrorDB(res, err);
                if (!result) {
                    errorUnknown(res)
                } else {
                    res.status(200).send({...req.body.profile, storeId: userId});
                }
            });
        } else {
            errorAuthorization(res)
        }
    }).catch(() => {
        errorAuthorization(res)
    });
};

exports.getProfileStore = (req, res) => {
    checkEmptyBody(req, res);
    const storeId = req.query.storeId;
    ProfilesList.findOne({storeId: storeId}, function (err, profile) {
        checkErrorDB(res, err);
        if (!profile) {
            notFound(res)
        } else {
            res.status(200).send({
                nameStore: profile.nameStore,
                email: profile.email,
                phone: profile.phone,
                address: profile.address,
                deliveryArea: profile.deliveryArea,
                description: profile.description,
                storeId: profile.storeId
            });
        }
    });
};

exports.getAllProfileStores = (req, res) => {
    checkEmptyBody(req, res);
    ProfilesList.find({}, function (err, profiles) {
        checkErrorDB(res, err);
        if (!profiles) {
            notFound(res)
        } else {
            res.status(200).send(profiles);
        }
    });
};

const handleError = (err, res) => {
    res
        .status(500)
        .contentType("text/plain")
        .end("Oops! Something went wrong!");
};

const upload = multer({
    dest: "/path/to/temporary/directory/to/store/uploaded/files"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

exports.loadAvatar = (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./avatarImg/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
        fs.rename(tempPath, targetPath, err => {
            if (err) return handleError(err, res);

            res
                .status(200)
                .contentType("text/plain")
                .end("File uploaded!");
        });
    } else {
        fs.unlink(tempPath, err => {
            if (err) return handleError(err, res);

            res
                .status(403)
                .contentType("text/plain")
                .end("Only .png files are allowed!");
        });
    }
}

// app.post(
//     "/upload",
//     upload.single("file" /* name attribute of <file> element in your form */),
//     (req, res) =>
// );


module.exports = require('./im-profile-store.controller');
