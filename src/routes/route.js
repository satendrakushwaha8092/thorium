// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;



//my changes

const express = require('express');
 const router = express.Router();

 const authorController= require("../controllers/authorController")
 const publisherController= require("../controllers/publisherController")
 const booksController= require("../controllers/bookController")
 //const bookController= require("../controllers/bookController")

 router.get("/test-me", function (req, res) {
     res.send("My first ever api!")
})

router.post("/createsauthor", authorController.createAuthor  )
router.post("/createspublisher", publisherController.createPublisher )
router.post("/createbooks", booksController.createBook )
router.get("/getbooks", booksController.getBooks )
module.exports = router;