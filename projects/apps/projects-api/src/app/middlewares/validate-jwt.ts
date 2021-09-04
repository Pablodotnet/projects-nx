import { verify } from 'jsonwebtoken';
import { NextFunction, response } from "express";

const validateJWT = (req, res = response, next: NextFunction) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Error with token.'
        });
    }

    try {
        const { uid, name } = verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        req.name = name;
        console.log(uid, name);
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token.'
        });
    }
    next();
}

export {
    validateJWT
}