const { Schema, model } = require('mongoose');


const landmarkSchema = new Schema({
  name: { type: String},
  description: { type: String }
});

const Landmarks = model('Landmarks', landmarkSchema);

module.exports = Landmarks;