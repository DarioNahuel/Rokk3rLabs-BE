const express = require('express');
const validate = require('express-validation');

const searchhValidate = require('../../validations/search.validation');
const search = require('../../controllers/search.controller')

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} v1/search Format String.
     * @apiDescription Retrieve a string with a custom format depends on brand and clothing type.
     * @apiVersion 1.0.0
     * @apiName FormatString
     * @apiGroup Search
     *
     * @apiParam  {String}             [search]       Search Criteria.
     *
     * @apiSuccess {Object[]} format string.
     *
     * @apiError (Bad Request 400)  Bad Request  Validation error.
     */
    .get(validate(searchhValidate.search), search.search);

module.exports = router;