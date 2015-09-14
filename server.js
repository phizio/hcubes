var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Получен запрос: " + pathname);
        var content = route(handle, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

function mylog(msg) {
    var now = new Date();
    var formated_date = now.toLocaleString();
    console.log(formated_date + ': ' + msg);
}

exports.start = start;
exports.mylog = mylog;
