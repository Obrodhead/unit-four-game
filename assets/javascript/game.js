$(document).ready(function() {

    var gametimer

// array specs

	// r/computer variable array:
    var rand = [];
    

	for (var r = 19; r < 120; r++) {
		rand.push(r);
    }
    

    // crystal numbers array:
    
    var crystals = [];
    

	for (var c = 1; c < 12; c++) {

		crystals.push(c);
	}

	// console.log(crystals);

    
    
    
    
    
    
    // ~~GLOBAL VARIABLES~~
// random computer # selections
    
var randomNumber; // given number to match
	var crystalNumbers = []; // random crystal values array:

	var c1;
	var c2;
	var c3;
	var c4;

 
 
 
 
 
    var totalScore = 0; // score of user

	var wins = 0;
	var losses = 0;

	// ~~~~FUNCTIONS ~~~~

	// pick random number
	function pickRandomNumber(randomnumberarray) {

		var x = randomnumberarray[Math.floor(Math.random() * randomnumberarray.length)];
		randomNumber = x;
		$("#randomNumber").html(randomNumber);

		console.log("randomNumber: " + randomNumber);

    
    
    
    } // end pickRandomNumber function

    
    
    
    
    //select random numbers for the crystals

	function pickRandomCrystals(crystalsarray) {

		for (var y = 0; y < 4; y++){

			var crystalnumber = crystalsarray[Math.floor(Math.random() * crystalsarray.length)];

			crystalNumbers.push(crystalnumber);
		}
    // check which numbers have been picked so far
		console.log("crystal numbers: " + crystalNumbers);

	} // close pickRandomCrystals function

    
    
    
    
    function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // end  crystalValues function

    
    
    
    
    function gameReset(x) {

        clearTimeout (gametimer)

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	

    
    // game specs
    
    pickRandomNumber(rand); // random number to match

    pickRandomCrystals(crystals); // array of random crystal values
    
	crystalValues(crystalNumbers);

    
    
    
    // crystal button functions

		$("#btn-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
        });
        


		$("#btn-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
        });
        


		$("#btn-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
        });
        


		$("#btn-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
        });
        


	$("button").on("click", function() {
		// if the user wins
		if (totalScore == randomNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			gametimer=setTimeout(function() {gameReset("YOU WIN!! CHICKEN DINNER!")}, 200);
		}

		else if (totalScore > randomNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("DUN DUN DUN.IT'S OVER. TRY AGAIN!")}, 200);
		}
	});

}); // FIN