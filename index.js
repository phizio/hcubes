var http = require('http');
var mysql = require("mysql");

var cMysql  = mysql.createPool({
    user: "stat",
    password: "123123",
    database: "est-stat"
});

http.createServer(function (request, response) {
    // Добавляем обработчик события.

    cMysql.getConnection(function(err, connection){
        if (err){
            console.log("MYSQL: can't get connection from pool:",err)
        } else {
            // Запрос к базе данных.
            connection.query('SELECT * FROM lim_pages;', function (error, rows, fields) {
                response.writeHead(200, {'Content-Type': 'text/plain'}); //x-application/json
                response.write(JSON.stringify(rows));
                response.end();
            });
        }
    });

}).listen(8888);