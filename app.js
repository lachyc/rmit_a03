const https = require('https')
const http = require('http');
var fs = require('fs');
var config = require('./config');

/*
const files = ['photo1.jpg'];

const base64files = files.map(file => fs.readFileSync(file, 'base64'));

const data = JSON.stringify({
    api_key: config.API_KEY,
    images: base64files,
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: ["common_names",
        "url",
        "name_authority",
        "wiki_description",
        "taxonomy",
        "synonyms"]
});

const options = {
    hostname: 'api.plant.id',
    port: 443,
    path: '/v2/identify',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}


const req = https.request(options, res => {
    res.on('data', d => {
        process.stdout.write(d)
    });
});

req.on('error', error => {
    console.error('Error: ', error)
});

req.write(data)

req.end()
*/

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(80); //the server object listens on port 8080