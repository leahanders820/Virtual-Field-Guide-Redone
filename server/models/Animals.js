const { Schema, model } = require('mongoose');


const animalSchema = new Schema({
  name: { type: String},
  description: { type: String }
});

const Animals = model('Animals', animalSchema);

module.exports = Animals;