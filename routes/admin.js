const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

// /admin/add-product => GET 
// Create an Express app
const app = express();

router.get('/add-product', (req, res, next) => {
    console.log("IN THE ADD PRODUCT MIDDLEWARE")
    res.sendFile(path.join(rootDir, "views", 'add-product.html'))
})



router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect("/")

})




module.exports = router