module.exports = {

	"normal": {

		_meta: {
			"tab": { key: "\t", text: "Tab", width: 60, classes: "control"},
			"shiftl": { keySet: "shifted", text: "Mayús", width: 100, classes: "control"},
			"shiftr": { keySet: "shifted", text: "Mayús", width: 100, classes: "control"},
			"caps": { keySet: "capsed", text: "Mayús lock", width: 80, classes: "control"},
			"space": { key: " ", text: "Espacio", width: 180},
			"enter": { key: "\r\n", text: "Enter", width: 80, classes: "control"},
			"backspace": { func: "backspace", classes: "control backspace", width: 65},
			"accept": { func: "accept", text: "Cerrar", classes: "control featured"},
			"next": { func: "next", text: "Siguiente", classes: "control featured"}
		},

		default: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} q w e r t y u i o p [ ] \\",
			"{caps} a s d f g h j k l ; ' {enter}",
			"{shiftl} z x c v b n m , . / {shiftr}",
			"{next} {space} {accept}"
		],
		shifted: [
			"~ ! @ # $ % ^ & * ( ) _ + {backspace}",
			"{tab} Q W E R T Y U I O P { } |",
			"{caps} A S D F G H J K L : \" {enter}",
			"{shiftl} Z X C V B N M < > ? {shiftr}",
			"{next} {space} {accept}"
		],
		
		capsed: [
			"` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
			"{tab} Q W E R T Y U I O P [ ] \\",
			"{caps} A S D F G H J K L ; ' {enter}",
			"{shiftl} Z X C V B N M , . / {shiftr}", 
			"{next} {space} {accept}"
		]		
	},

	"compact": {

		_meta: {
			"default": { keySet: "default", text: "abc", classes: "control"},
			"alpha": { keySet: "default", text: "Abc", classes: "control"},
			"shift": { keySet: "shifted", text: "ABC", classes: "control"},
			"numbers": { keySet: "numbers", text: "123", classes: "control"},
			"space": { key: " ", text: "Espacio", width: 200},
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Cerrar", classes: "control featured"},
			"next": { func: "next", text: "Siguiente", classes: "featured"},
			"zero": { key: "0", width: 130}
		},

		default: [
			"@ 1 2 3 4 5 6 7 8 9 0 {backspace}",
			"q w e r t y u i o p",
			" a s d f g h j k l ",
			"{shift} z x c v b n m",
			"{numbers} , {space} . {accept}"
		],

		shifted: [
			"@ 1 2 3 4 5 6 7 8 9 0 {backspace}",
			"Q W E R T Y U I O P",
			" A S D F G H J K L ",
			"{default} Z X C V B N M ",
			"{numbers} _ {space} {accept}"
		],

		numbers: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"  {alpha} . {zero} {backspace} {next} {accept}"
		]
	},

	"numeric": {

		_meta: {
			"backspace": { func: "backspace", classes: "control"},
			"accept": { func: "accept", text: "Close", classes: "control featured"},
			"next": { func: "next", text: "Next", classes: "control featured"},
			"zero": { key: "0", width: 130}
		},

		default: [
			"1 2 3",
			"4 5 6",
			"7 8 9",
			"_ - . {zero} {backspace} {next} {accept}"
		]
	}

};