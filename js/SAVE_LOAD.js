// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ____                              ___       _                           _
// / ___|    __ _  __   __   ___     ( _ )     | |       ___     __ _    __| |
// \___ \   / _` | \ \ / /  / _ \    / _ \/\   | |      / _ \   / _` |  / _` |
//  ___) | | (_| |  \ V /  |  __/   | (_>  <   | |___  | (_) | | (_| | | (_| |
// |____/   \__,_|   \_/    \___|    \___/\/   |_____|  \___/   \__,_|  \__,_|


// save rank
const localStorageKey = "savedGameData001";

function save(rank) {
	const savedRank = JSON.stringify(rank);
	localStorage.setItem(localStorageKey, savedRank);

	// console.log("saving...");
};


// load rank -> in global gameData
// console.log("loading rankDATA...");
function load() {
	const savedRank = localStorage.getItem(localStorageKey) || "[]";
	if (savedRank) {
		return JSON.parse(savedRank);
	};
};
