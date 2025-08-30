
const express = require('express');
const app = express();
app.use( express.json() );
const cors = require('cors');
const PORT = 8080;
app.use(cors({ // Middleware allowing for API requests from authorized sources
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
console.log("running");
app.listen(
    PORT,
    () => console.log(`Its alive on: http://localhost:${PORT}`)
)

app.get('/test', (req, res) => { // Simple GET request
    res.status(200).send({
        message: "Working!"
    })
})

app.post('/testpost', (req,res) => { // Basic body repeater
    const params = req.params;
    const body = req.body;
    res.status(200).send({
        working: "true",
        body: body,
        params: req.params
    })
    console.log(req.body);
})