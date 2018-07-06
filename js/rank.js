// #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #  #
//  ____       _      _   _   _  __
// |  _ \     / \    | \ | | | |/ /
// | |_) |   / _ \   |  \| | | ' /
// |  _ <   / ___ \  | |\  | | . \
// |_| \_\ /_/   \_\ |_| \_| |_|\_\




// sort rank by highest - lowest points

function sortRank() {
	gameData.rank.sort(function(a,b) {
		return b.points - a.points;
	});
};


// appear in HTML

function appear() {

	for (let i = 0; i < gameData.rank.length; i++) {
		let player = gameData.rank[i];

		document.getElementById("playedGames").innerHTML += `
		<tr>
		<td id="p_name"> ` + player.name + `</td>
		<td id="p_points"> ` + player.points + ` </td>
		<td id="p_gamesPlayed"> ` + player.games_played + ` </td>
		<td id="p_numberOfRightAndAllGames"> ` + player.rightAnswers + "/" + player.numberOfAllExercises + ` </td>
		</tr>
		`
	};
	// console.log("stats will appear...");
};




// 3. loop over rank (create new or add to existing)

function rankLoop() {
	const thisGame = {
		PLAYER_name: gameData.playerName,
		PLAYER_points: gameData.points,
		PLAYER_gameDone: 1,
		PLAYER_rightAnswers: gameData.rigthAnswers_thisGame,
		PLAYER_numberOfExercises: gameData.numberOfExercises,
	};

	// console.log("starting rank loop");

	let foundGame = null;

	for (let i = 0; i < gameData.rank.length; i++) {
		let gameFromRank = gameData.rank[i];

		// console.log(`\t${i}: ${gameFromRank.name}: ${gameFromRank.points}`);

		if (gameFromRank.name === thisGame.PLAYER_name) {
			foundGame = gameFromRank;
			break;
		};
	};

	if (foundGame != null) {
		// game found -> add values to existing obj
		foundGame.points = foundGame.points + thisGame.PLAYER_points;
		foundGame.games_played = foundGame.games_played + thisGame.PLAYER_gameDone;
		foundGame.rightAnswers = foundGame.rightAnswers + thisGame.PLAYER_rightAnswers;
		foundGame.numberOfAllExercises = foundGame.numberOfAllExercises + thisGame.PLAYER_numberOfExercises;
	} else {
		// game not found -> new obj in rank
		gameData.rank.push({
				name: thisGame.PLAYER_name,
				points: thisGame.PLAYER_points,
				games_played: thisGame.PLAYER_gameDone,
				rightAnswers: thisGame.PLAYER_rightAnswers,
				numberOfAllExercises: thisGame.PLAYER_numberOfExercises,
		});
	};
	sortRank();
	// console.log("looping over rank = done");
};
