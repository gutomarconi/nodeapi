import express from 'express';

import { getAll, getMerchant } from '../controllers/merchantController';

const router = express.Router();

router.get('/merchant/', getAll);
router.get('/merchant/:id', getMerchant);

export default router;