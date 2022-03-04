const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await publisherModel.create(author)
    res.send({data: authorCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createPublisher= createPublisher
//module.exports.getAuthorsData= getAuthorsData