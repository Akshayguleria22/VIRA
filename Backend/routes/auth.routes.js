import express from 'express';
import { getProfile, signIn, signOut } from '../controllers/auth.controller.js';
import { authorize, attachUser } from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.get('/profile', authorize, getProfile);

router.post('/sign-in', authorize,attachUser,signIn);

router.post('/sign-out', authorize, signOut);

export default router;
