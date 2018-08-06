const Brand = require('../models/brand.model');
const ClothingType = require('../models/clothing-type.model');

async function transformInputByBrandAndClothingType(input, brand, clothingType) {
  brand.forEach((brand) => {
    input = input.replace(brand.name, `<b>${brand.name}</b>`)
  });

  clothingType.forEach((clothingType) => {
    input = input.replace(clothingType.name, `<i>${clothingType.name}</i>`)
  });

  return input;
}

exports.search = async (input) => {
    input = input.toLowerCase();

    const brand = await Brand.find({$text: {$search: input}})
    const clothingType = await ClothingType.find({$text: {$search: input}})

    return transformInputByBrandAndClothingType(input, brand, clothingType);
};
