import { response } from 'express';

const createUser = (req, res = response) => {
    const { email, name, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Create user /new'
    });
};

const loginUser = (req, res = response) => {
    const { email, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Login user /'
    });
};

const renewToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
};

export {
    createUser,
    loginUser,
    renewToken,
};
