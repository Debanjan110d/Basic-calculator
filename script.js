//lets Start

const display = document.getElementById("display");
function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
}
function calculate() {
	try {
		display.value = eval(display.value); // eval()  function is mostly used in situations or applications which need to evaluate mathematical expressions
	} catch (error) {
		display.value = "Syntax error";
	}
}
function deleteLast() {
	display.value = display.value.slice(0, -1);
}
