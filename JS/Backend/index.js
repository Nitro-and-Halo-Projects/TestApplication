const express = require('express')();
const PORT = 8080;
console.log("running");
express.listen(
    PORT,
    () => console.log(`Its alive on: http://localhost:${PORT}`)
)

express.get('/test', (req, res) => {
    res.status(200).send({
        message: "Working!"
    })
})