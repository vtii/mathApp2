// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//   ____                           _         _
//  / ___|   ___    _   _   _ __   | |_    __| |   ___   __      __  _ __
// | |      / _ \  | | | | | '_ \  | __|  / _` |  / _ \  \ \ /\ / / | '_ \
// | |___  | (_) | | |_| | | | | | | |_  | (_| | | (_) |  \ V  V /  | | | |
//  \____|  \___/   \__,_| |_| |_|  \__|  \__,_|  \___/    \_/\_/   |_| |_|
// (countdown exercises)




let timerState = {
	left: null,
	intervalHandle: null,
};

let onTimeout0 = () => {
	console.log("time is up! calling validatePage_3");
	console.log(gameData);
	validatePage_3();
};

let onTick0 = () => {
	timerState.left -= 1;

	setProgressbarWidth(timerState)

	// console.log("timerState.left: ", timerState.left);

	document.getElementById("countdown0").innerHTML = timerState.left;

	if (timerState.left <= 0) {
		clearInterval(timerState.intervalHandle);
		onTimeout0();
	}
};




// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ____                                                     _
// |  _ \   _ __    ___     __ _   _ __    ___   ___   ___  | |__     __ _   _ __
// | |_) | | '__|  / _ \   / _` | | '__|  / _ \ / __| / __| | '_ \   / _` | | '__|
// |  __/  | |    | (_) | | (_| | | |    |  __/ \__ \ \__ \ | |_) | | (_| | | |
// |_|     |_|     \___/   \__, | |_|     \___| |___/ |___/ |_.__/   \__,_| |_|
//  						|___/


function scale(input, IN_MIN, IN_MAX, OUT_MIN, OUT_MAX) {
	let percent = (input - IN_MIN) / (IN_MAX - IN_MIN);
	return percent * (OUT_MAX - OUT_MIN) + OUT_MIN;
};

function scaleTimer(currentTimerValue, maxTimerValue) {
	return scale(currentTimerValue, 0, maxTimerValue, 0, 100);
};

function setProgressbarWidth(timerState) {

	let percent = scaleTimer(timerState.left, gameData.timer);
	// console.log("percent is:", percent);

	let progressbarELEMENT = document.querySelector(".progress-bar");
	progressbarELEMENT.style.width = percent + "%";

	if (timerState.left <= 10) {
		progressbarELEMENT.classList.replace("bg-warning", "bg-danger");
	} else if (timerState.left <= 20) {
		progressbarELEMENT.classList.replace("bg-success", "bg-warning");
	} else {
		progressbarELEMENT.classList.replace("bg-danger", "bg-success");
		progressbarELEMENT.classList.replace("bg-warning", "bg-success");
	}
};
