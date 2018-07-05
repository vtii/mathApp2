// first page (name_input)
const page_0 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12 firstpage">
				<div class="input-group input-group-lg">
					<div class="input-group-prepend">
						<span class="input-group-text" id="inputGroup-sizing-lg">Name</span>
					</div>
					<input id="nameInput" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
				</div>
			</div>

			<div class="col-12">
				<div class="d-flex justify-content-center">
					<div>
						<button onclick="validatePage_0();" type="button" class="btn btn-outline-primary nextbtn">Weiter</button>
					</div>
				</div>
			</div>

		</div>
	</div>
`);

// level select
const page_1 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12 lvlselect">
				<div class="d-flex justify-content-center">
					<div class="btn-group btn-group-toggle" id="lvlbtns" data-toggle="buttons">
						<label class="btn btn-outline-success" style="width:200px;">
							<input name="lvl" value="0" type="radio" > Einfach
						</label>
						<label class="btn btn-outline-warning" style="width:200px;">
							<input name="lvl" value="1" type="radio" > Normal
						</label>
						<label class="btn btn-outline-danger" style="width:200px;">
							<input name="lvl" value="2" type="radio" > Schwer
						</label>
					</div>
				</div>
			</div>

			<div class="col-12">
				<div class="d-flex justify-content-center">
					<div>
						<button onclick="validatePage_1();" type="button" class="btn btn-outline-primary nextbtn">Weiter</button>
					</div>
				</div>
			</div>

		</div>
	</div>
`);

// infoscreen
const page_2 = ejs.render(`
	<div class="container maincont border">
		<div class="row">
			<div class="col-12 text-howto">
				<p class="border text-center ptext-howto">

					<span style="font-size: 30px; font-weight: 100;">Hallo <span id="name_value" style="color: cadetblue"></span>!</span><br><br>

					Bei diesem Schwierigkeitsgrad hast du <span id="timer_value" style="font-size: 30px; font-weight: 100; color:cadetblue"></span> Sekunden Zeit für die Aufgabengruppen. <br><br>

					Falls du schneller bist, kannst du weiter klicken für die nächsten drei Aufgaben. <br><br>

					Der Timer wird <strong>für jede Aufgabengruppe neu gesetzt</strong>! Keine Panik :) <br><br>

					Falls du es in dieser Zeit nicht schaffen solltest geht es automatisch weiter. <br><br>

					Für jede richtige Antwort gibts <span style="font-size: 20px; color: green;">+2</span> punkte. <br><br>

					Für jede falsche Antwort (oder keine Antwort) gibts <span style="font-size: 20px; color: red;">-1</span> punkt. <br><br>

					<span style="font-size: 30px; font-weight: 100; color: cadetblue">Viel Erfolg!</span>
				</p>
			</div>

			<div class="col-12">
				<div class="d-flex justify-content-center">
					<div>
						<button onclick="validatePage_2();" type="button" class="btn btn-outline-primary startbtn">Start</button>
					</div>
				</div>
			</div>

		</div>
	</div>
`);

// exercise_group 1/3
const page_3 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12">
				<div class="border" style="padding-top:12px; margin-left:320px; margin-right: 320px;">
					<p class="text-center donetxt" style="font-size: 50px">
						<span id="countdown0">START!</span>

					</p>
				</div>
			</div>

			<div class="col-12 progresstimer">
				<div class="progress">
					<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 100%"></div>
				</div>
			</div>

			<div class="col-12">
				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex0" class="input-group-text"></span>
						</div>
						<input id="playerRes0" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex1" class="input-group-text"></span>
						</div>
						<input id="playerRes1" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex2" class="input-group-text"></span>
						</div>
						<input id="playerRes2" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>
			</div>

			<div class="col-12">
				<div class="d-flex justify-content-center">
					<div>
						<button onclick="validatePage_3()" type="button" id="next" class="btn btn-outline-primary nextbtn">Weiter</button>
					</div>
				</div>
			</div>

		</div>
	</div>
`);

// exercise_group 2/3
const page_4 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12">
				<div class="border" style="padding-top:12px; margin-left:320px; margin-right: 320px;">
					<p class="text-center donetxt" style="font-size: 50px">
						<span id="countdown1">Teil 2/3 GO!</span>
					</p>
				</div>
			</div>

			<div class="col-12 progresstimer">
				<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 100%"></div>
				</div>
			</div>


			<div class="col-12">
				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex3" class="input-group-text"></span>
						</div>
						<input id="playerRes3" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex4" class="input-group-text"></span>
						</div>
						<input id="playerRes4" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex5" class="input-group-text"></span>
						</div>
						<input id="playerRes5" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>
			</div>

				<div class="col-12">
					<div class="d-flex justify-content-center">
						<div>
							<button onclick="validatePage_4()" type="button" class="btn btn-outline-primary nextbtn">Weiter</button>
						</div>
					</div>
				</div>

		</div>
	</div>
`);

// exercise_group 3/3
const page_5 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12">
				<div class="border" style="padding-top:12px; margin-left:320px; margin-right: 320px;">
					<p class="text-center donetxt" style="font-size: 50px">
						<span id="countdown2">Teil 3/3 LOS!</span>
					</p>
				</div>
			</div>

			<div class="col-12 progresstimer">
				<div class="progress">
				<div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 100%"></div>
				</div>
			</div>

			<div class="col-12">
				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex6" class="input-group-text"></span>
						</div>
						<input id="playerRes6" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex7" class="input-group-text"></span>
						</div>
						<input id="playerRes7" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg exercises">
						<div class="input-group-prepend">
							<span id="ex8" class="input-group-text"></span>
						</div>
						<input id="playerRes8" type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
					</div>
				</div>
			</div>

				<div class="col-12">
					<div class="d-flex justify-content-center">
						<div>
								<button onclick="validatePage_5()" type="button" class="btn btn-outline-primary nextbtn">Weiter</button>
						</div>
					</div>
				</div>

		</div>
	</div>
`);

// resultscreen
const page_6 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12">
				<div class="border" style="padding-top:12px; margin-bottom:12px; margin-left:320px; margin-right: 320px;">
					<p class="text-center donetxt" >Du hast es geschafft <span id="name_value" style="color: cadetblue"></span>! <br>Dein Resultat: </p>
				</div>


				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex0" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res0" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>



				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex1" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res1" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-success rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-check"></i></button>
						</div>
					</div>
				</div>



				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex2" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res2" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>


				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex3" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res3" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-success rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-check"></i></button>
						</div>
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex4" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res4" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex5" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res5" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex6" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res6" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">
							<button type="button" class="btn btn-outline-danger rounded-circle disabled" style="width: 50px; margin-left: 10px;"><i class="fas fa-times"></i></button>
						</div>
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex7" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res7" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">

						</div>
					</div>
				</div>

				<div>
					<div class="input-group input-group-lg results">
						<div class="input-group-prepend">
							<span id="ex8" class="input-group-text"></span>
						</div>
						<div class="input-group-prepend">
							<span id="res8" class="input-group-text" style="background: white;"></span>
						</div>
						<div class="input-group-prepend icon">

						</div>
					</div>
				</div>

				<div class="border" style="padding-top:12px; margin-top: 10px; margin-left:320px; margin-right: 320px;">
					<p class="text-center donetxt"><span id="right_value"></span>/<span id="number_of_exercises"></span> Richtig</p>
					<p class="text-center donetxt" style="color:coral">+ <span id="pointsAdd"></span> Punkte</p>
				</div>

			</div>

			<div class="col-12">
				<div class="d-flex justify-content-center">
					<div>
						<button onclick="validatePage_6()" type="button" class="btn btn-outline-primary nextbtn">Weiter</button>
					</div>
				</div>
			</div>

		</div>
	</div>
`);

// rankscreen
const page_7 = ejs.render(`
	<div class="container maincont border">
		<div class="row">

			<div class="col-12">
					<table class="table">
						<thead class="thead-dark">
							<tr>

							<th scope="col">Name</th>
							<th scope="col">Punkte</th>
							<th scope="col">Gespielte Spiele</th>
							<th scope="col">Richtig / von Aufgaben</th>

							</tr>
						</thead>
						<tbody id="playedGames">

						</tbody>
					</table>
			</div>

			<div class="col-12">
				<div class="d-flex bd-highlight mb-3">

					<div class="mr-auto p-2 bd-highlight">
						<div>
							<button onclick="backToResult();" type="button" class="btn btn-outline-primary nextbtn">Zurück</button>
						</div>
					</div>

					<div class="p-2 bd-highlight">
						<div>
							<button onclick="endAfterPage_7();" type="button" class="btn btn-outline-primary nextbtn">Fertig</button>
						</div>
					</div>

					<div class="p-2 bd-highlight">
						<div>
							<button onclick="validatePage_7();" type="button" class="btn btn-outline-primary nextbtn">Nochmal!</button>
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>
`);
