/* This program will hold our server */

// const http = require('http'); // Allows us to make requests against server
// const server = http.createServer(function (request, response) {
//     // Not doing anything with request right now,
//     // so once get any request, will send back this reponse
    
//     response.writeHead(404, { 'Content-Type': 'text/plain' });  // Content-Type: Format data will be in
//     response.end('Error :((((((');  // Actual content server returns
// })

// // Port 8000
// // 127.0.0.1 (IP address of computer)
// server.listen(8000, '127.0.0.1', function() {
//     console.log("The server has started!");
// });

// MUST use require() for importing package code, NOT import from
const express = require('express');
const helper = require('./helper');
const pokemon = require('./pokemon');

const app = express();  // Object that can handle requests
app.use(express.json());  // Makes JSON readable
app.use(express.urlencoded({ extended: true }));

app.get("/", function(request, response) {
    response.send("I am preventing the next get definition from responding!");
})

// get(arg1, arg2)
//  - arg1: string that represents location against which
//    you'll formulate response
//  - callback function: (req, res) => {...}
//      - req: request
//      - res: response

// https://localhost:8000 + '/'
app.get("/", function(request, response) {
    // response.send('Hello web dev, again!!!!');
    // response.send(helper());
    response.send("This is the response from the GET method");
})

app.post("/", function(request, response) {
    response.send("This is a response from the POST method");
})

app.listen(8000, function () {
    console.log("Starting server now...");
});

/*
    Can separate routes, and put them into separate modules
        - Traditionally start APIs with /api
*/
app.use('/api/pokemon', pokemon);