var static = require('node-static');
var fs = require('fs');
var options = {
    key: fs.readFileSync("server.key"), // путь к ключу
    cert: fs.readFileSync("server.crt") // путь к сертификату
};
var https = require('https');
//var file = new(static.Server)();
var file = new static.Server('./Pages');
var app = https.createServer(options,function (req, res) {
	file.serve(req, res);
}).listen(1234);

var io = require('socket.io').listen(app);


var io2 = require('socket.io').listen(8080); 

io2.set('log level', 1);
// Навешиваем обработчик на подключение нового клиента
io2.sockets.on('connection', function (socket) {

	// Навешиваем обработчик на входящее сообщение
	socket.on('message', function (msg) {
		// Отсылаем сообщение остальным участникам чата
		socket.broadcast.json.send({'event': 'messageReceived', 'text': msg})
	});
	});
	

io.sockets.on('connection', function (socket) {
	function log() {
		var array = [">>> "];
		for(var i = 0; i < arguments.length; i++) {
			array.push(arguments[i]);
		}
		socket.emit('log', array);
	}

	socket.on('message', function (message) {
		log('Got message: ', message);
		socket.broadcast.emit('message', message); // should be room only
	});

});