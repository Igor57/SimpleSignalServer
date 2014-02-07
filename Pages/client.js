
window.onload = function() {

	// Создаем соединение с сервером; websockets почему-то в Хроме не работают, используем xhr
	if (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) {
		socket2 = io.connect('http://192.168.1.35:8080', {'transports': ['xhr-polling']});
	} else {
		socket2 = io.connect('http://192.168.1.35:8080');
	}
	socket2.on('connect', function () {
		socket2.on('message', function (msg) {
			// Добавим информацию в апплет
			document.applets.JsToJava.updateField(msg.text);
		});
		
	});

};

