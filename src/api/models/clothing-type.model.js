const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ClothingTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
})

ClothingTypeSchema.index({name: 'text'})

module.exports = mongoose.model('ClothingType', ClothingTypeSchema)