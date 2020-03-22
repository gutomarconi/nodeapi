import express from 'express';

import { getAll, getTransaction, getByUser, getByMerchant } from '../controllers/transactionController';

const router = express.Router();

router.get('/transactions/', getAll);
router.get('/transactions/:id', getTransaction);
router.get('/transactions/user/:id', getByUser);
router.get('/transactions/merchant/:id', getByMerchant);

export default router;