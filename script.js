document.addEventListener("DOMContentLoaded", loadHistory);

function appendToDisplay(value) {
	document.getElementById("display").value += value;
}

function clearDisplay() {
	document.getElementById("display").value = "";
}

function deleteLast() {
	const display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}

function calculateResult() {
	const display = document.getElementById("display");
	try {
		const result = eval(display.value);
		display.value = result;
		addToHistory(`${display.value} = ${result}`);
	} catch (e) {
		alert("Invalid calculation");
	}
}

function addToHistory(calculation) {
	let history = JSON.parse(localStorage.getItem("history")) || [];
	history.push(calculation);
	if (history.length > 10) {
		history.shift();
	}
	localStorage.setItem("history", JSON.stringify(history));
	loadHistory();
}

function loadHistory() {
	const historyList = document.getElementById("historyList");
	historyList.innerHTML = "";
	const history = JSON.parse(localStorage.getItem("history")) || [];
	history.forEach((calc) => {
		const li = document.createElement("li");
		li.textContent = calc;
		historyList.appendChild(li);
	});
}

function clearHistory() {
	localStorage.removeItem("history");
	loadHistory();
}
