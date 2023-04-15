// Express is used to make more complex requests easier
// Order of calls is important. Need to make app.use() calls
// before defining get/post/put/delete
const express = require('express');
const pokemon = require('./pokemon');
const users = require('./user');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
// const cors = require('cors');

mongoDBEndpoint = "mongodb+srv://stameshabello:m0N90dBnOsQ1@cluster0.lrhkhjc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBEndpoint);
const app = express();

// Modifies input data to make it easier to parse input
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// When adding a string and file, using express router
app.use('/api/pokemon/', pokemon);
app.use('/api/users/', users);


//"http://localhost:8000" + "/"
app.get("/", function(request, response) {
    // response.send('Hello web dev, again!!!');
    // response.send(helper.returnWords());
    response.send("I am preventing the next GET method from firign")
})

app.get("/", function(request, response) {
    // response.send('Hello web dev, again!!!');
    // response.send(helper.returnWords());
    response.send("This is the response from the GET method")
})

app.post("/", function(request, response) {
    response.send("This is a response from the POST methodd");
})

app.listen(8000, function() {
    console.log("Starting server now...")
})

// Http is a library included with NodeJs, in order to make simple
// HTTP requests and run a server
// const http = require('http');

// const server = http.createServer(function (request, response) {

//     response.writeHead(404, { 'Content-Type': 'text/plain' });
//     response.end('Hello web dev!');

// })

// Ports are necessary if you want to run multiple processes at once
// and want to run/call(?) things against them
// // 127.0.0.1 === localhost
// server.listen(8000, "127.0.0.1", function() {
//     console.log("The server has started!")
// })