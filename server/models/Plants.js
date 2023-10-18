const { Schema, model } = require('mongoose');


const plantSchema = new Schema({
  name: { type: String},
  description: { type: String }
});

const Plants = model('Plants', plantSchema);

module.exports = Plants;