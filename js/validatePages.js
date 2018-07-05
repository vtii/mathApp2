// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//
//
//
//	Math challenge simulator
//
//
//
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _____   _                _       ____
// |  ___| (_)  _ __   ___  | |_    / ___|    ___   _ __    ___    ___   _ __
// | |_    | | | '__| / __| | __|   \___ \   / __| | '__|  / _ \  / _ \ | '_ \
// |  _|   | | | |    \__ \ | |_     ___) | | (__  | |    |  __/ |  __/ | | | |
// |_|     |_| |_|    |___/  \__|   |____/   \___| |_|     \___|  \___| |_| |_|
// (nameinput)

document.getElementById("app").innerHTML = page_0;

function validatePage_0() {

	let nameInput = document.getElementById("nameInput");
	if (!nameInput.value) {
		alert("Input for Name is empty. Please enter your name, thanks.");
	} else {
		// fill name into game data obj
		gameData.playerName = nameInput.value;
		document.getElementById("app").innerHTML = page_1;
	};
	console.log("name of the player is:", nameInput.value);
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _                             _     ____           _                 _
// | |       ___  __   __   ___  | |   / ___|    ___  | |   ___    ___  | |_   ___    ___   _ __    ___    ___   _ __
// | |      / _ \ \ \ / /  / _ \ | |   \___ \   / _ \ | |  / _ \  / __| | __| / __|  / __| | '__|  / _ \  / _ \ | '_ \
// | |___  |  __/  \ V /  |  __/ | |    ___) | |  __/ | | |  __/ | (__  | |_  \__ \ | (__  | |    |  __/ |  __/ | | | |
// |_____|  \___|   \_/    \___| |_|   |____/   \___| |_|  \___|  \___|  \__| |___/  \___| |_|     \___|  \___| |_| |_|
// (three levels => timer for each level)

function validatePage_1() {

	// create exercises and set timelimit for levels
	// 0 = Easy, 1 = Normal, 2 = Hard
	// 0 = 60sec, 1 = 45sec, 2 = 30sec

	let lvlRadio = document.getElementsByName("lvl");
	let lvl_value = null; //level 0, 1, 2
	let levelTimer = null; //timelimit 60, 45, 30

	for (i = 0; i < lvlRadio.length; i++) {

		if (lvlRadio[i].checked) {
			lvl_value = lvlRadio[i].value;
			document.getElementById("app").innerHTML = page_2;
			gameData.level = parseInt(lvl_value, 10);
			console.log("you picked level:", gameData.level);
		}
	};

	if (lvl_value == null) {
		alert("Level not selected, pick a level. Thanks!");
		return;
	};

	if (lvl_value == 0) {
		levelTimer = 60;
		console.log("difficulty is set to: easy");
	} else if (lvl_value == 1) {
		levelTimer = 45;
		console.log("difficulty is set to: normal");
	} else if (lvl_value == 2) {
		levelTimer = 30;
		console.log("difficulty is set to: hard");
	}
	console.log("timer is set to:", levelTimer);
	gameData.timer = levelTimer;

	// set the counter for exercises
	timerState.left = levelTimer + 1;

	const exerciseCount = gameData.exerciseConfig.pages * gameData.exerciseConfig.exercisesPerPage;

	// push $exerciseCount exercises into gameData
	for (let i = 0; i < exerciseCount; i++) {
		gameData.exercises.push(exerciseGenerator());
	}
	setINFO();
	// exerciseGenerator();
	allResults();
	console.log("gameData", gameData);
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ___            __
// |_ _|  _ __    / _|   ___    ___    ___   _ __    ___    ___   _ __
//  | |  | '_ \  | |_   / _ \  / __|  / __| | '__|  / _ \  / _ \ | '_ \
//  | |  | | | | |  _| | (_) | \__ \ | (__  | |    |  __/ |  __/ | | | |
// |___| |_| |_| |_|    \___/  |___/  \___| |_|     \___|  \___| |_| |_|
// (infotext)

function validatePage_2() {

	// next screen
	document.getElementById("app").innerHTML = page_3;

	let exerciseInputBoxesELEMENT = document.getElementById("exerciseInputBoxes")

	for(let i = 0; i < gameData.exerciseConfig.exercisesPerPage; i++) {
		let exerciseInputBoxELEMENT = document.createElement("div");
		exerciseInputBoxELEMENT.innerHTML = exerciseInputBoxGenerator(i);
		exerciseInputBoxesELEMENT.appendChild(exerciseInputBoxELEMENT);
	};
	// get and set [?] exercises for first screen
	setExercises(gameData.currentExercisePage);
	// countdown for exercises
	timerState.intervalHandle = setInterval(onTick0, 1000);

};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _____                               _
// | ____| __  __   ___   _ __    ___  (_)  ___    ___   ___
// |  _|   \ \/ /  / _ \ | '__|  / __| | | / __|  / _ \ / __|
// | |___   >  <  |  __/ | |    | (__  | | \__ \ |  __/ \__ \
// |_____| /_/\_\  \___| |_|     \___| |_| |___/  \___| |___/
// (exercise_groups)

function setIndexForExerciseInput(index, page) {

	const exercisesPerPage = gameData.exerciseConfig.exercisesPerPage;
	let realExerciseIndex = index + (page * exercisesPerPage)

	let r = document.getElementById(`playerRes${index}`);
	gameData.exercises[realExerciseIndex].input = parseInt(r.value, 10);
	r.value = "";
};

function validatePage_3() {

	const page = gameData.currentExercisePage;

	for (let i = 0; i < gameData.exerciseConfig.exercisesPerPage; i++) {
		setIndexForExerciseInput(i, page);
	}

	clearInterval(timerState.intervalHandle);

	gameData.currentExercisePage++;

	if (gameData.currentExercisePage < gameData.exerciseConfig.pages) {
		// show next exercise page
		setExercises(gameData.currentExercisePage);
		timerState.left = gameData.timer + 1;
		timerState.intervalHandle = setInterval(onTick0, 1000);
	} else {
		backToResult()
	}
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ____                         _   _
// |  _ \    ___   ___   _   _  | | | |_   ___    ___   _ __    ___    ___   _ __
// | |_) |  / _ \ / __| | | | | | | | __| / __|  / __| | '__|  / _ \  / _ \ | '_ \
// |  _ <  |  __/ \__ \ | |_| | | | | |_  \__ \ | (__  | |    |  __/ |  __/ | | | |
// |_| \_\  \___| |___/  \__,_| |_|  \__| |___/  \___| |_|     \___|  \___| |_| |_|
// (all exercises, points)

function validatePage_6() {

	// next screen
	document.getElementById("app").innerHTML = page_5;
	rankLoop();
	appear();
	save(gameData.rank);
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ____                    _
// |  _ \    __ _   _ __   | | __  ___    ___   _ __    ___    ___   _ __
// | |_) |  / _` | | '_ \  | |/ / / __|  / __| | '__|  / _ \  / _ \ | '_ \
// |  _ <  | (_| | | | | | |   <  \__ \ | (__  | |    |  __/ |  __/ | | | |
// |_| \_\  \__,_| |_| |_| |_|\_\ |___/  \___| |_|     \___|  \___| |_| |_|
// (back to results, play again, end)

function validatePage_5() {

	// back to levelselect screen (play again)
	initializeGameState(gameData.playerName);
	document.getElementById("app").innerHTML = page_1;
};

// end game
function endAfterPage_5() {

	// end game (back to name-inputscreen)
	location.reload();
};

// black to results
function backToResult() {

	//back to resultscreen
		// show resultscreen
		document.getElementById("app").innerHTML = page_4;

		// exerciseResultBox für jede exercise generieren
		let resultBoxesELEMENT = document.getElementById("resultBoxes");
		let resultEndBoxELEMENT = document.getElementById("resultEndBox");
		for (let i = 0; i < gameData.exercises.length; i++ ) {
			let exerciseResultBox = document.createElement("div");
			exerciseResultBox.innerHTML = exerciseResultBoxGenerator(i);
			resultBoxesELEMENT.insertBefore(exerciseResultBox, resultEndBoxELEMENT);
		}

		// get and set all exercises for result screen
		checkRight();
		checkExerciseResult();
		setResultInput();
		setResultExercises();
		pointsCounter();
		setResultscreenText();
};
