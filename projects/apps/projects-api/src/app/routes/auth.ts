import { Router } from 'express';
import {
    createUser,
    loginUser,
    renewToken,
} from '../controllers/auth';

const router = Router();

// Create new user
router.post('/new', createUser);

// Login user
router.post('/', loginUser);

// Validate and revalidate token
router.get('/renew', renewToken);

export { router };