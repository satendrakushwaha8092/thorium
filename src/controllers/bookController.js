
const bookModel= require("../models/bookModel")

const createbook= async function(req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbooks= async function (req, res) {
    let allbooks= await bookModel.find()
    res.send({msg: allbooks})
}

module.exports.createbook= createbook
module.exports.getbooks= getbooks