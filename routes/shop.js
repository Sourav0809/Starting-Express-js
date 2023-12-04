const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    console.log("IN THE HOME PAGE MIDDLEWARE ")
    res.send("<h1>Hello from Express Js</h1>")

})


module.exports = router