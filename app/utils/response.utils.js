const TYPE_ERROR = {
    UNAUTHORIZED: 'unauthorized',
    EMPTY_BODY: 'empty',
    VALIDATE: 'invalid',
    DATABASE: 'db_error',
    NOT_FOUND: 'not_found'

};

const DESCRIPTION_ERROR = {
    UNAUTHORIZED: 'Ошибка авторизации. Войдите в систему.',
    EMPTY_BODY: 'Ошибка запроса. Пустое тело запроса.',
    DATABASE: 'Ошибка базы данных. Попробуйте перезагрузить страницу.',
    UNKNOWN: 'Неизвестная ошибка',
    NOT_FOUND: 'Не найдено'
};

//401 Unauthorized
//403 Another Errors
exports.errorAuthorization = (res) => {
    res.status(401).send({
        typeError: TYPE_ERROR.UNAUTHORIZED,
        detail: DESCRIPTION_ERROR.UNAUTHORIZED
    });
};

exports.errorEmptyBody = (res) => {
    res.status(403).send({
        typeError: TYPE_ERROR.EMPTY_BODY,
        detail: DESCRIPTION_ERROR.EMPTY_BODY
    });
};

exports.errorValidate = (res, textError) => {
    res.status(403).send({
        typeError: TYPE_ERROR.VALIDATE,
        detail: textError
    });
};

exports.errorDB = (res, textError) => {
    res.status(403).send({
        typeError: TYPE_ERROR.DATABASE,
        detail: DESCRIPTION_ERROR.DATABASE
    });
};

exports.errorUnknown = (res) => {
    res.status(403).send({
        typeError: TYPE_ERROR.VALIDATE,
        detail: DESCRIPTION_ERROR.UNKNOWN
    });
}

exports.notFound = (res) => {
    res.status(404).send({
        typeError: TYPE_ERROR.NOT_FOUND,
        detail: DESCRIPTION_ERROR.NOT_FOUND
    });
}

exports.checkEmptyBody = (req, res) => {
    if (!req && !req.body) {
        errorEmptyBody(res);
    }
}

exports.checkErrorDB = (res, err) => {
    if (err) {
        errorDB(res);
    }
}



