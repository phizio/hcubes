var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers.js");

// Route list
var handle = {
    "/": requestHandlers.start,
    "/start": requestHandlers.start,
    "/upload": requestHandlers.upload
};

server.start(router.route, handle);
