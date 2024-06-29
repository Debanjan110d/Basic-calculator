const sum = (a, b) => {
	return a + b;
};
const minus = (a, b) => {
	return a - b;
};
const gun = (a, b) => {
	return a * b;
};
const vag = (a, b) => {
	return a / b;
};
let string = "";
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		console.log(e.target);
		let buttonText = e.target.innerText;
		string = string + buttonText;
		document.querySelector("input").value = string;
	});
});

// if (buttonText == "C") {
//     string = "";
//     document.getElementById("input").value = string;
// } else if (buttonText == "=") {
//     document.getElementById("input
//     ").value = eval(string);
// }
