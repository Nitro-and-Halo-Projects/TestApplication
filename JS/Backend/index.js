const express = require('express')();
const cors = require('cors');
const PORT = 8080;
express.use(cors({
    origin: "http://localhost:5500"
}));
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

express.post('/testpost', (req,res) => {
    const params = req.params;
    const body = req.body;
    res.status(200).send({
        body: body
    })
})