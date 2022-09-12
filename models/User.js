const { Schema, model } = require('mongoose');

const User = new Schema({
  name: {
    require: true,
    type: String
  },
  age: {
    require: true,
    type: Number
  },
  phone: {
    type: String
  }
})

module.exports = model('User', User)
