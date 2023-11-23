/* -------------------------------------------------------------------------- */
/*                    INTRODUCTION TO MIDDLEWARE IN EXPRESS JS                   */
/* -------------------------------------------------------------------------- */

const express = require("express")

const app = express()

app.use((req, res, next) => {

    console.log("Here is our first middleWare")
    next()
})

app.use((req, res, next) => {
    console.log("Here is our second middleware ")

    if (req.url === "/product") {
        res.send({ key1: value })
    }
    else {
        res.send("<h1>Hello from Express Js  ")

    }

})


app.listen(8000)

