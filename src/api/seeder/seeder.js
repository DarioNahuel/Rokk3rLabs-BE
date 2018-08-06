const mongoose = require('mongoose');
const promise = require('bluebird');

const Brand = require('../models/brand.model');
const ClothingType = require('../models/clothing-type.model');

const BrandList = require('./data/brand.list');
const ClothingTypeList = require('./data/clothing-type.list');

const env = require('../../config/vars');

mongoose.Promise = promise

async function populateDatabase () {
  try {
    // Refresh table
    await Brand.remove({})
    await ClothingType.remove({})
    // Populate table
    await Brand.create(BrandList)
    await ClothingType.create(ClothingTypeList)

    mongoose.connection.close()
    console.log('The seeder were runned successfully.')
    process.exit()
  } catch (err) {
    console.log('Error:', err)
  }
}

mongoose.connect(env.mongo.uri, {
  useMongoClient: true 
})

const mongo = mongoose.connection

mongo
  .on('error', () => {
    throw 'There was a problem with the mongo connection.';
  })
  .once('open', populateDatabase)
