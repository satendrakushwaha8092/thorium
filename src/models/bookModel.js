/*const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id: String,
    author_name: String,
    age:Number,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)*/

//mychanges

const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author:{
        type:objectId,
        ref:"newAuthor",
    },
    price:Number,
    ratings:Number,
    publisher:{type:objectId,ref:"newPublisher"}
}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema)