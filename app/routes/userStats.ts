import express from 'express';

import { getUserStats } from '../services/userStats';

const router = express.Router();

router.get('/userstats/:id', getUserStats);

export default router;