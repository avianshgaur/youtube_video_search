const mongoose = require("mongoose");
const config = require("./../config/default");
const connectMongo = async () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(config.mongo_uri);
}

module.exports  = connectMongo;