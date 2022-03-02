const mongoose = require("mongoose")

// cria o schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

// cria o model
const User = mongoose.model("User", UserSchema)

module.exports = User