import { response } from 'express';
import Usuario from '../models/Usuario';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { generateJWT } from '../helpers/jwt';

const createUser = async(req, res = response) => {
    const { email, name, password } = req.body;

    try {
        // Verify email
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exists.'
            });
        }

        // Create user with model
        const dbUser = new Usuario(req.body);

        // Hash password
        const salt = genSaltSync();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dbUser as any).password = hashSync(password, salt);

        // Generate the JWT
        const token = await generateJWT(dbUser.id, name);

        // Create user of db
        await dbUser.save();

        // Generate the success response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            msg: 'User created successfully',
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Please talk to admin.'
        });
    }
};

const loginUser = async(req, res = response) => {
    const { email, password } = req.body;

    try {
        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or password incorrect.'
            })
        }

        // Confirm password matches
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const validPassword = compareSync(password, (dbUser as any).password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password does not match.'
            })
        }

        // Generate JWT
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const token = await generateJWT(dbUser.id, (dbUser as any).name);
        return res.json({
            ok: true,
            uid: dbUser.id,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name: (dbUser as any).name,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Talk to administrator.'
        });
    }
};

const renewToken = async(req, res = response) => {
    const { uid, name } = req;
    const token = await generateJWT(uid, name);

    return res.json({
        ok: true,
        uid,
        name,
        msg: 'Renew success',
        token,
    });
};

export {
    createUser,
    loginUser,
    renewToken,
};
