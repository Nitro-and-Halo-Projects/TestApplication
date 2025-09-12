
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
app.use( express.json() );
const cors = require('cors');
const ipGrab = require('./ipScanning');
require('dotenv').config();
const privateKey = process.env.KEY;
const privateCert = process.env.CERT;
//const privateKeyBuffer = Buffer.from(privateKey, "base64");  *START| This code if uncommented allows you to force https*
//const privateCertBuffer = Buffer.from(privateCert, "base64");
//fs.writeFileSync('./key.pem', privateKeyBuffer);
//fs.writeFileSync('./cert.pem', privateCertBuffer);
/*const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};*/
//const httpsServer = https.createServer(options, app);        *END| End of https code
const PORT = process.env.PORT;
app.use(cors()); // <-- This is called a wildcard. It allows anyone from anywhere to use this API

// The commented code below allows you to restrict what sources can request services from the API

/*app.use(cors({ // Middleware allowing for API requests from authorized sources
    origin: ['*','http://127.0.0.1:5500/','http://127.0.0.1:5500/login.html','https://nitroandhaloprojectsbackendapi.dpdns.org/test', 'https://nitroandhaloprojectsbackendapi.dpdns.org/testpost'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));*/ 

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
        message: "API is up and running!"
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
