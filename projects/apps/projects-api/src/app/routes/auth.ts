import { Router } from 'express';
import { check } from 'express-validator';
import {
    createUser,
    loginUser,
    renewToken,
} from '../controllers/auth';
import { validateFields } from '../middlewares/validate-fields';
import { validateJWT } from '../middlewares/validate-jwt';

const router = Router();

// Create new user
router.post(
    '/new',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required.').isEmail(),
        check('password', 'The password is required.').isLength({ min: 6 }),
        validateFields
    ],
    createUser
);

// Login user
router.post(
    '/',
    [
        check('email', 'The email is required.').isEmail(),
        check('password', 'The password is required.').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

// Validate and revalidate token
router.get('/renew', validateJWT, renewToken);

export { router };