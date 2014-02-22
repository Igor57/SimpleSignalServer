window.onload = function() {

var keyMap =
{
'А':'AltKeyCode:1:2:8',
'Б':'AltKeyCode:1:2:9',
'В':'AltKeyCode:1:3:0',
'Г':'AltKeyCode:1:3:1',
'Д':'AltKeyCode:1:3:2',
'Е':'AltKeyCode:1:3:3',
'Ё':'AltKeyCode:2:4:0',
'Ж':'AltKeyCode:1:3:4',
'З':'AltKeyCode:1:3:5',
'И':'AltKeyCode:1:3:6',
'Й':'AltKeyCode:1:3:7',
'К':'AltKeyCode:1:3:8',
'Л':'AltKeyCode:1:3:9',
'М':'AltKeyCode:1:4:0',
'Н':'AltKeyCode:1:4:1',
'О':'AltKeyCode:1:4:2',
'П':'AltKeyCode:1:4:3',
'Р':'AltKeyCode:1:4:4',
'С':'AltKeyCode:1:4:5',
'Т':'AltKeyCode:1:4:6',
'У':'AltKeyCode:1:4:7',
'Ф':'AltKeyCode:1:4:8',
'Х':'AltKeyCode:1:4:9',
'Ц':'AltKeyCode:1:5:0',
'Ч':'AltKeyCode:1:5:1',
'Ш':'AltKeyCode:1:5:2',
'Щ':'AltKeyCode:1:5:3',
'Ъ':'AltKeyCode:1:5:4',
'Ы':'AltKeyCode:1:5:5',
'Ь':'AltKeyCode:1:5:6',
'Э':'AltKeyCode:1:5:7',
'Ю':'AltKeyCode:1:5:8',
'Я':'AltKeyCode:1:5:9',

'а':'AltKeyCode:1:6:0',
'б':'AltKeyCode:1:6:1',
'в':'AltKeyCode:1:6:2',
'г':'AltKeyCode:1:6:3',
'д':'AltKeyCode:1:6:4',
'е':'AltKeyCode:1:6:5',
'ё':'AltKeyCode:2:4:1',
'ж':'AltKeyCode:1:6:6',
'з':'AltKeyCode:1:6:7',
'и':'AltKeyCode:1:6:8',
'й':'AltKeyCode:1:6:9',
'к':'AltKeyCode:1:7:0',
'л':'AltKeyCode:1:7:1',
'м':'AltKeyCode:1:7:2',
'н':'AltKeyCode:1:7:3',
'о':'AltKeyCode:1:7:4',
'п':'AltKeyCode:1:7:5',
'р':'AltKeyCode:2:2:4',
'с':'AltKeyCode:2:2:5',
'т':'AltKeyCode:2:2:6',
'у':'AltKeyCode:2:2:7',
'ф':'AltKeyCode:2:2:8',
'х':'AltKeyCode:2:2:9',
'ц':'AltKeyCode:2:3:0',
'ч':'AltKeyCode:2:3:1',
'ш':'AltKeyCode:2:3:2',
'щ':'AltKeyCode:2:3:3',
'ъ':'AltKeyCode:2:3:4',
'ы':'AltKeyCode:2:3:5',
'ь':'AltKeyCode:2:3:6',
'э':'AltKeyCode:2:3:7',
'ю':'AltKeyCode:2:3:8',
'я':'AltKeyCode:2:3:9',

'A':'AltKeyCode:6:5',
'B':'AltKeyCode:6:6',
'C':'AltKeyCode:6:7',
'D':'AltKeyCode:6:8',
'E':'AltKeyCode:6:9',
'F':'AltKeyCode:7:0',
'G':'AltKeyCode:7:1',
'H':'AltKeyCode:7:2',
'I':'AltKeyCode:7:3',
'J':'AltKeyCode:7:4',
'K':'AltKeyCode:7:5',
'L':'AltKeyCode:7:6',
'M':'AltKeyCode:7:7',
'N':'AltKeyCode:7:8',
'O':'AltKeyCode:7:9',
'P':'AltKeyCode:8:0',
'Q':'AltKeyCode:8:1',
'R':'AltKeyCode:8:2',
'S':'AltKeyCode:8:3',
'T':'AltKeyCode:8:4',
'U':'AltKeyCode:8:5',
'V':'AltKeyCode:8:6',
'W':'AltKeyCode:8:7',
'X':'AltKeyCode:8:8',
'Y':'AltKeyCode:8:9',
'Z':'AltKeyCode:9:0',

'a':'AltKeyCode:9:7',
'b':'AltKeyCode:9:8',
'c':'AltKeyCode:9:9',
'd':'AltKeyCode:1:0:0',
'e':'AltKeyCode:1:0:1',
'f':'AltKeyCode:1:0:2',
'g':'AltKeyCode:1:0:3',
'h':'AltKeyCode:1:0:4',
'i':'AltKeyCode:1:0:5',
'j':'AltKeyCode:1:0:6',
'k':'AltKeyCode:1:0:7',
'l':'AltKeyCode:1:0:8',
'm':'AltKeyCode:1:0:9',
'n':'AltKeyCode:1:1:0',
'o':'AltKeyCode:1:1:1',
'p':'AltKeyCode:1:1:2',
'q':'AltKeyCode:1:1:3',
'r':'AltKeyCode:1:1:4',
's':'AltKeyCode:1:1:5',
't':'AltKeyCode:1:1:6',
'u':'AltKeyCode:1:1:7',
'v':'AltKeyCode:1:1:8',
'w':'AltKeyCode:1:1:9',
'x':'AltKeyCode:1:2:0',
'y':'AltKeyCode:1:2:1',
'z':'AltKeyCode:1:2:2'

};


	// Создаем соединение с сервером; websockets почему-то в Хроме не работают, используем xhr (проверить!!!!!!!!!!!!)
	if (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) {
		socket = io.connect('http://localhost:8080', {'transports': ['xhr-polling']});
	} else {
		socket = io.connect('http://localhost:8080');
	}
	socket.on('connect', function () {
	
	
	
	     var x = window.event.PageX;
		 var y = window.event.PageY;
		 var delay =100;
		 
		 var id = setInterval(mousePost, delay)
		 
		 function mousePost() {
			 if ((x!=window.event.PageX)||(y != window.event.PageY)){
				socket.send(escape('mouseMove'+':'+e.pageX+':'+e.pageY));
			  }
		}

	/*
		document.onmousemove = function(e) {
		  socket.send(escape('mouseMove'+':'+e.pageX+':'+e.pageY));
		}
		*/
		document.onmousedown = function(e) {
		  socket.send(escape('onMouseDown'+':'+e.button));
		}
		
		document.onmouseup = function(e) {
		  socket.send(escape('onMouseUp'+':'+e.button));
		}
		
	

		document.onkeypress = function(e) {
		var simvol=getChar(e);
			if (simvol in keyMap)
			{
			var command = keyMap[simvol];
			}
			else
			{
			var command = 'Unknown symbol';
			}
			socket.send(escape(command));
		//alert('pressed keyCode\"'+e.which+'\"+keySymbol\"'+simvol+'\"')
		}
		
		document.onkeydown = function(e) {
			if (e.which<65)
			{
			socket.send(escape('KeyCode:'+e.which));
			}
		}
		
		
				// event.type должен быть keypress
		function getChar(event) {
		  if (event.which == null) {  // IE
			if (event.keyCode < 32) return 'specSymb'; // спец. символ
			return String.fromCharCode(event.keyCode) 
		  } 

		  if (event.which!=0 && event.charCode!=0) { // все кроме IE
			if (event.which < 32) return 'specSymb'; // спец. символ
			return String.fromCharCode(event.which); // остальные
		  } 

		  return 'specSymb'; // спец. символ
		}


		
				function displaywheel(e){
				var evt=window.event || e //equalize event object
				var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
				var direction='none';
				if (delta<0){direction='Down';}else{direction='Up';}
				socket.send(escape('onWheel'+':'+direction));
				}
			 
				var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x 
				if (document.attachEvent) //if IE (and Opera depending on user setting)
				document.attachEvent("on"+mousewheelevt, displaywheel)
				else if (document.addEventListener) //WC3 browsers
				document.addEventListener(mousewheelevt, displaywheel, false)
		
		document.oncontextmenu = function(e) {
		return false;
		}
		
	});

};

