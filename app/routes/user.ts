import express from 'express';

import { getAll, getUser } from '../controllers/userController';

const router = express.Router();

router.get('/users', getAll);
router.get('/users/:id', getUser);

export default router;