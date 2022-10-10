const name = "Felix";
const num1 = 2;
const num2 = 3;

function multiply() {
	return num1*num2;
}

function getScores() {
	const num1 = 20;
	const num2 = 30;

	function add() {
		return `${name} scores ${num1 + num2}`;
	}
	return add();
}
getScores();

