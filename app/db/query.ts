import pool from './pool';

export default {
    /**
     * Execute the given query
     *
     * @param {object} query
     *
     * @returns {object} object
     */
    execute(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            pool.query(query)
                .then((res) => {
                    resolve(res.rows);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
};