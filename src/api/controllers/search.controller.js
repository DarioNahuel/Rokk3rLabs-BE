const { search } = require('../services/search.service');

/**
 * Search.
 * 
 * @public
 */
exports.search = async (req, res, next) => {
    search(req.query.search)
        .then(req => res.json({output: req}))
        .catch(err => next(err))
};
