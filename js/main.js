// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
// define gameObject
let gameData;
// initial state
initializeGameState();

function initializeGameState(playerName = null) {
	gameData = {
		playerName: playerName,
		level: null,
		exercises: [],
		timer: null,
		rank: load(),

		currentExercisePage: 0,

		exerciseConfig: {
			pages: null,
			exercisesPerPage: null,
		},
	};
};
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #


// get and set [name] and [timer] for info-screen
function setINFO() {
	document.getElementById("name_value").innerHTML = gameData.playerName;
	document.getElementById("timer_value").innerHTML = gameData.timer;
};


// generate a [random number] for one digit
function randomNumber_oneDigit(max) {
	return Math.round(Math.random() * max);
};


// generate a [random number] for two digits
function randomNumber_twoDigits() {
	return Math.floor(Math.random() * 90) + 10;
};


// generate a [random operator]
function randomOperator() {
	let pick = randomNumber_oneDigit(1);
	switch (pick) {
		case 0: return " - ";
		case 1: return " + ";
	};
};


// create one exercise
function exerciseGenerator() {
	switch (gameData.level) {
		case 0: return {
			a: randomNumber_oneDigit(9),
			operator: randomOperator(),
			b: randomNumber_oneDigit(9),
		};
		case 1: return {
			a: randomNumber_twoDigits(),
			operator: randomOperator(),
			b: randomNumber_oneDigit(9),
		};
		case 2: return {
			a: randomNumber_twoDigits(),
			operator: randomOperator(),
			b: randomNumber_twoDigits(),
		};
	};
};


// [index] for exercises [0-8]
function setIndexForExercise(index, page) {
	const exercisesPerPage = gameData.exerciseConfig.exercisesPerPage; // 3
	let realExerciseIndex = index + (page * exercisesPerPage);

	document.getElementById(`ex${index}`).innerHTML = gameData.exercises[realExerciseIndex].a + gameData.exercises[realExerciseIndex].operator + gameData.exercises[realExerciseIndex].b + " = ";
};

function setExercises(page) {
	const exercisesPerPage = gameData.exerciseConfig.exercisesPerPage;

	for (let i = 0; i < exercisesPerPage; i++) {
		setIndexForExercise(i, page);
	};
};

function setResultExercises() {
	for (let i = 0; i < gameData.exercises.length; i++) {
		setIndexForExercise(i, 0);
	}
};



// [index] for result [input]
function setIndexForExerciseInputResult(index) {
	const input = gameData.exercises[index].input;

	if (isNaN(input)) {
		document.getElementById(`res${index}`).innerHTML = "Keine Antwort.";
	} else {
		document.getElementById(`res${index}`).innerHTML = gameData.exercises[index].input;
	};
};


// set result [input]
function setResultInput() {
	for (let i = 0; i < gameData.exercises.length; i++) {
		setIndexForExerciseInputResult(i);
	};
};


// result for exercise
function exerciseResult(index) {
	let a = gameData.exercises[index].a;
	let b = gameData.exercises[index].b;
	let op = gameData.exercises[index].operator;
	if (op == " + ") {
		return gameData.exercises[index].result = a + b;
	} else if (op == " - ") {
		return gameData.exercises[index].result = a - b;
	};
};


// calculate all results
function allResults() {
	for (let i = 0; i < gameData.exercises.length; i++) {
		exerciseResult(i);
	};
};


// compare [input] and [calculated result] and set the icon
function checkExerciseResult() {
	const iconDivList = document.querySelectorAll("div.icon");

	for(let i = 0; i < gameData.exercises.length; i++) {
		let game = gameData.exercises[i];
		let iconDiv = iconDivList[i];

		if (game.input == game.result) {
			iconDiv.innerHTML = '<button type="button" class="btn btn-outline-success rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-check"></i></button>';
		} else {
			iconDiv.innerHTML = '<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>';
		};
	};
};


// tell how many answers are right
function checkRight() {

	let numberOfAllExercises = gameData.exercises.length;
	let right = 0;
	let wrong = 0;

	for (let i = 0; i < gameData.exercises.length; i++) {
		let game = gameData.exercises[i];
		if (game.input == game.result) {
			right++;
		} else {
			wrong++;
		};
	};
	gameData.numberOfExercises = numberOfAllExercises;
	gameData.rigthAnswers_thisGame = right;
	gameData.wrongAnswers_thisGame = wrong;
};


// set [text] in the resultscreen
function setResultscreenText() {
	document.getElementById("name_value").innerHTML = gameData.playerName;
	document.getElementById("right_value").innerHTML = gameData.rigthAnswers_thisGame;
	document.getElementById("number_of_exercises").innerHTML = gameData.numberOfExercises;
	document.getElementById("pointsAdd").innerHTML = gameData.points;
};


// count points
function pointsCounter() {
	let points = 0;

	if (gameData.rigthAnswers_thisGame !== 0) {
		points = points + (gameData.rigthAnswers_thisGame * 2);
	};
	if (gameData.wrongAnswers_thisGame !== 0) {
		points = points - gameData.wrongAnswers_thisGame;
	};
	if (points < 0) {
		points = 0;
	};
	gameData.points = points;
};
