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
//  _____   _         _
// |  ___| (_)  ___  | |_     _ __     __ _    __ _    ___
// | |_    | | / __| | __|   | '_ \   / _` |  / _` |  / _ \
// |  _|   | | \__ \ | |_    | |_) | | (_| | | (_| | |  __/
// |_|     |_| |___/  \__|   | .__/   \__,_|  \__, |  \___|
//  						 |_|              |___/
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
	timerState0.left = levelTimer + 1;
	timerState1.left = levelTimer + 1;
	timerState2.left = levelTimer + 1;


	// push 9 exercises into gameData
	for (let i = 0; i < 9; i++) {
		gameData.exercises.push(exerciseGenerator());
	}
	setINFO();
	exerciseGenerator();
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
	// get and set 3 exercises for next screen
	setExercises0();

	// countdown for exercises 1/3
	timerState0.intervalHandle = setInterval(onTick0, 1000);

};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _____                               _                        _      __  _____
// | ____| __  __   ___   _ __    ___  (_)  ___    ___   ___    / |    / / |___ /
// |  _|   \ \/ /  / _ \ | '__|  / __| | | / __|  / _ \ / __|   | |   / /    |_ \
// | |___   >  <  |  __/ | |    | (__  | | \__ \ |  __/ \__ \   | |  / /    ___) |
// |_____| /_/\_\  \___| |_|     \___| |_| |___/  \___| |___/   |_| /_/    |____/
// (exercise_group 1/3)

function setIndexForExerciseInput(index) {
	let r = document.getElementById(`playerRes${index}`);
	gameData.exercises[index].input = parseInt(r.value, 10);
};

function validatePage_3() {

	setIndexForExerciseInput(0);
	setIndexForExerciseInput(1);
	setIndexForExerciseInput(2);

	console.log("gameData 1/3", gameData);

	// next screen
	document.getElementById("app").innerHTML = page_4;
	//  get and set 3 exercises for next screen
	setExercises1();

	clearInterval(timerState0.intervalHandle);
	timerState1.intervalHandle = setInterval(onTick1, 1000);
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _____                               _                        ____       __  _____
// | ____| __  __   ___   _ __    ___  (_)  ___    ___   ___    |___ \     / / |___ /
// |  _|   \ \/ /  / _ \ | '__|  / __| | | / __|  / _ \ / __|     __) |   / /    |_ \
// | |___   >  <  |  __/ | |    | (__  | | \__ \ |  __/ \__ \    / __/   / /    ___) |
// |_____| /_/\_\  \___| |_|     \___| |_| |___/  \___| |___/   |_____| /_/    |____/
// (exercise_group 2/3)

function validatePage_4() {

	setIndexForExerciseInput(3);
	setIndexForExerciseInput(4);
	setIndexForExerciseInput(5);

	console.log("gameData 2/3", gameData);

	// next screen
	document.getElementById("app").innerHTML = page_5;
	// get and set 3 exercises for next screen
	setExercises2();

	clearInterval(timerState1.intervalHandle);
	timerState2.intervalHandle = setInterval(onTick2, 1000);
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  _____                               _                        _____      __  _____
// | ____| __  __   ___   _ __    ___  (_)  ___    ___   ___    |___ /     / / |___ /
// |  _|   \ \/ /  / _ \ | '__|  / __| | | / __|  / _ \ / __|     |_ \    / /    |_ \
// | |___   >  <  |  __/ | |    | (__  | | \__ \ |  __/ \__ \    ___) |  / /    ___) |
// |_____| /_/\_\  \___| |_|     \___| |_| |___/  \___| |___/   |____/  /_/    |____/
// (exercise_group 3/3)

function validatePage_5() {

	setIndexForExerciseInput(6);
	setIndexForExerciseInput(7);
	setIndexForExerciseInput(8);

	console.log("gameData 3/3", gameData);

	// next screen
	document.getElementById("app").innerHTML = page_6;

	// get and set all exercises for result screen
	checkRight();
	checkExerciseResult();
	setResultInput();
	setExercises0();
	setExercises1();
	setExercises2();
	pointsCounter();
	setResultscreenText();
	clearInterval(timerState2.intervalHandle);
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
	document.getElementById("app").innerHTML = page_7;

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

function validatePage_7() {

	// back to levelselect screen (play again)
	initializeGameState(gameData.playerName);
	document.getElementById("app").innerHTML = page_1;
};

// end game
function endAfterPage_7() {

	// end game (back to name-inputscreen)
	location.reload();
};

// black to results
function backToResult() {

	//back to resultscreen
	document.getElementById("app").innerHTML = page_6;

	checkRight()
	checkExerciseResult()
	setResultInput();
	setExercises0();
	setExercises1();
	setExercises2();
	pointsCounter()
	setResultscreenText();
};
