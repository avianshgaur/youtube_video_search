const mongoose = require("mongoose");


const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    publishedAt: Date,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number
      },
      medium: {
        url: String,
        width: Number,
        height: Number
      },
      high: {
        url: String,
        width: Number,
        height: Number
      }
    }
  });


  module.exports =  mongoose.model('videos', videoSchema, 'videos');