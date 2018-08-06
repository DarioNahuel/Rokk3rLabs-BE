const mongoose = require('mongoose');

const Schema = mongoose.Schema

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
});

BrandSchema.index({name: 'text'})

module.exports = mongoose.model('Brand', BrandSchema)