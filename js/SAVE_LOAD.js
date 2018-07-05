// 5. save rank
const localStorageKey = "savedGameData001";

function save(rank) {
	const savedRank = JSON.stringify(rank);
	localStorage.setItem(localStorageKey, savedRank);

	console.log("saving...");
};




// 2. load rank

// rank = load();
// console.log("loading rankDATA...");


function load() {
	const savedRank = localStorage.getItem(localStorageKey) || "[]";
	if (savedRank) {
		return JSON.parse(savedRank);
	}
};

