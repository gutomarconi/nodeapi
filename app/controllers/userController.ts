import query from '../db/query.js';

/**
 * Get all users
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getAll = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.user');
        if (!rows[0]) {
            return res.status(404).send('There are no users');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

/**
 * Get user by id
 *
 * @param req
 * @param res
 * @returns {Promise<*|void>}
 */
const getUser = async (req, res) => {
    try {
        const rows = await query.execute('SELECT * FROM public.user WHERE id = ' + req.params.id);
        if (!rows[0]) {
            return res.status(404).send('The user was not found!');
        }
        return res.status(200).send(rows);
    } catch (error) {
        return res.status(500).send('Request Failed');
    }
};

export {
    getAll,
    getUser,
}