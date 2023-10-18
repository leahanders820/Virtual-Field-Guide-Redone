const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String }
});

const Users = model('Users', userSchema);

module.exports = Users;
