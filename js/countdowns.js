// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//countdown exercises 1/3

let timerState0 = {
	left: null,
	intervalHandle: null,
};

let onTimeout0 = () => {
	console.log("time is up! next page is: exercises 2/3");

	setIndexForExerciseInput(0);
	setIndexForExerciseInput(1);
	setIndexForExerciseInput(2);

	console.log(gameData);

	// next screen
	document.getElementById("app").innerHTML = page_4;
	//  get and set 3 exercises for next screen
	setExercises1();

	timerState1.intervalHandle = setInterval(onTick1, 1000);
};

let onTick0 = () => {
	timerState0.left -= 1;

	setProgressbarWidth(timerState0)

	// console.log("timerState0.left: ", timerState0.left);

	document.getElementById("countdown0").innerHTML = timerState0.left;

	if (timerState0.left <= 0) {
		clearInterval(timerState0.intervalHandle);
		onTimeout0();
	}
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//countdown exercises 2/3

let timerState1 = {
	left: null,
	intervalHandle: null,
};

let onTimeout1 = () => {
	console.log("time is up! next page is: exercises 3/3");

	setIndexForExerciseInput(3);
	setIndexForExerciseInput(4);
	setIndexForExerciseInput(5);

	console.log(gameData);

	// next screen
	document.getElementById("app").innerHTML = page_5;
	// get and set 3 exercises for next screen
	setExercises2();

	timerState2.intervalHandle = setInterval(onTick2, 1000);
};

let onTick1 = () => {
	timerState1.left -= 1;

	setProgressbarWidth(timerState1)

	// console.log("timerState1.left: ", timerState1.left);

	document.getElementById("countdown1").innerHTML = timerState1.left;

	if (timerState1.left <= 0) {
		clearInterval(timerState1.intervalHandle);
		onTimeout1();
	}
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//countdown exercises 3/3

let timerState2 = {
	left: null,
	intervalHandle: null,
};

let onTimeout2 = () => {
	console.log("time is up! next page is: result");

	setIndexForExerciseInput(6);
	setIndexForExerciseInput(7);
	setIndexForExerciseInput(8);

	console.log(gameData);

	// next screen
	document.getElementById("app").innerHTML = page_6;

	// get and set all exercises for result screen

	checkRight()
	checkExerciseResult()
	setResultInput();
	setExercises0();
	setExercises1();
	setExercises2();
	pointsCounter()
	setResultscreenText();
};

let onTick2 = () => {
	timerState2.left -= 1;

	setProgressbarWidth(timerState2)

	// console.log("timerState2.left: ", timerState2.left);

	document.getElementById("countdown2").innerHTML = timerState2.left;

	if (timerState2.left <= 0) {
		clearInterval(timerState2.intervalHandle);
		onTimeout2();
	}
};


// progressbar

function scale(input, IN_MIN, IN_MAX, OUT_MIN, OUT_MAX) {
	let percent = (input - IN_MIN) / (IN_MAX - IN_MIN);
	return percent *  (OUT_MAX - OUT_MIN) + OUT_MIN;
}

function scaleTimer(currentTimerValue, maxTimerValue) {
	return scale(currentTimerValue, 0, maxTimerValue, 0, 100);
}

function setProgressbarWidth(timerState) {

	let percent = scaleTimer(timerState.left, gameData.timer);
	// console.log("percent is:", percent);

	let progressbarELEMENT = document.querySelector(".progress-bar");
	progressbarELEMENT.style.width = percent + "%";

	if (timerState.left <= 10) {
		progressbarELEMENT.classList.replace("bg-warning", "bg-danger");
	} else if (timerState.left <= 20) {
		progressbarELEMENT.classList.replace("bg-success", "bg-warning");
	}
}
