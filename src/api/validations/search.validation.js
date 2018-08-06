const Joi = require('joi');

const search = {
  query: {
    search: Joi.string().required()
  },
};

module.exports = {search};