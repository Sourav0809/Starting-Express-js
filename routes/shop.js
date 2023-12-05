const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../util/path')
router.get('/', (req, res, next) => {
    console.log("IN THE HOME PAGE MIDDLEWARE ")
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))


})



router.get('/contact', (req, res, next) => {
    console.log("in the about page ")
    res.sendFile(path.join(rootDir, "views", 'contact.html'))
})


module.exports = router