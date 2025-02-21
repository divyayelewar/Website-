const mongoose = require('mongoose');
  const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter Name"]
    },
    surname:{
        type:String,
        required:[true,"Enter Name"]
    },
    email:{
        type:String,
        required:[true,"Enter Email"]
    },
    password:{
        type:String,
        required:[true,"Enter Password"]
    },
    details:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"registers"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings" 
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews" 
    }],

  })

  const User = mongoose.model("users",userSchema);

  module.exports = User