const jwt = require("jsonwebtoken")


const userModel = require("../models/userModel");
const authenticate = function (req, res, next) {
  let token = req.headers['x-auth-token'];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  //check the token in request header
  //validate this token

  next()
}

//complete

const authorise = async function (req, res, next) {
  let token = req.headers['x-auth-token'];
  let decodedToken = jwt.verify(token, 'functionup-thorium')

  if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })
  // comapre the logged in user's id and the id in request
  next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise;