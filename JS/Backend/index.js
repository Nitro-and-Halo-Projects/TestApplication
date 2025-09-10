
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
app.use( express.json() );
const cors = require('cors');
const ipGrab = require('./ipScanning');
require('dotenv').config();
const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};
const httpsServer = https.createServer(options, app);
const PORT = process.env.PORT;
app.use(cors({ // Middleware allowing for API requests from authorized sources
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:8080', 'http://127.0.0.1:8080', '*', 'https://nitroandhaloprojectsbackendapi.dpdns.org:8080'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
console.log("running");
app.listen(
    PORT,
    "0.0.0.0",
    messageConsole()
)

async function messageConsole() {
    let ipAddr = await ipGrab.grabIP();
    console.log(await `Api endpoint: ${ipAddr['ip']}` + `:${PORT}`);
}

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
