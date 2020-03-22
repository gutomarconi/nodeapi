import query from "../db/query.js";

/**
 * Get all transactions limited by 1000 records
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getAll = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.transactions LIMIT 1000');
        if (!rows[0]) {
            return res.status(404).send('There are no Transactions');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

/**
 * Get transaction by the given id
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getTransaction = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.transactions WHERE id=' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('Transaction does not exist!');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

/**
 * Get transactions by the user
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getByUser = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.transactions WHERE user_id = ' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('There are no transactions for the given user');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

/**
 * Get transaction by merchant
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getByMerchant = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.transactions WHERE merchant_id = ' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('There are no transactions for the given merchant');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

export {
    getByUser,
    getByMerchant,
    getAll,
    getTransaction
}