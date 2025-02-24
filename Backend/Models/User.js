const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter Name"]
  },
  surname: {
    type: String,
    required: [true, "Enter Surname"]
  },
  email: {
    type: String,
    required: [true, "Enter Email"]
  },
  password: {
    type: String,
    required: [true, "Enter Password"]
  },
  details: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "register",
      required: false // This field will hold references to user registration data
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ratings"
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "reviews"
  }]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
