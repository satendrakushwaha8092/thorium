const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema( {
    name:String,
    author:String,
    category:String,
    year:Number,
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //users
