import query from '../db/query.js';

/**
 * Get all merchants
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getAll = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.merchant');
        if (!rows[0]) {
            return res.status(404).send('There are no Merchants');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

/**
 * Get merchant by id
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getMerchant = async (req, res) => {
    try {
        const rows  = await query.execute('SELECT * FROM public.merchant  WHERE id =' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('Merchant does not exist!');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

export {
    getAll,
    getMerchant,
}