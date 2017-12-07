// var greeting;

// newCustomer = false;

// if( newCustomer ){
// 	greeting = function () {
// 		alert("Thanks for visiting he Badlands!\n" +
// 			"We hope your stay is ... better than most.");
// 	};
// } else {
// 	greeting = function () {
// 		alert("Welcome to the Badlands!\n" +
// 				"Guess they aren't so bad huh?");
// 	};
// }
// closeTerminal(greeting);
// function closeTerminal( message ){

// 	message();
// }

// var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

// var results = numbers.map(function(arrayCell) { return arrayCell * 2; } );

// alert(results);

// var fruits = ["Apple", "Orange", "Pineapple"];
// var fruitJuice = fruits.map( function (fruit) { return "\n" + fruit + " Juice";} );
// alert(fruitJuice);

// var parkRides = [ ["Birch Bumpers", 40], ["Pine Plunge", 55],
// 					["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];

// var fastPassQueue = [ "Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge" ];
// var firstFastPass = fastPassQueue.shift();
// alert(firstFastPass);
// fastPassQueue.length();


// function buildTicket ( allRides, passRides, pick ) {

// 	if (passRides[0] == pick) {
// 		var pass = passRides.shift();
// 		return function() {alert("Quick! you've got a Fass Pass to " + pass + "!");
// 		};
// 	} else {
// 		for (var i = 0; i < allRides.length; i++) {
// 			if(allRides[i][0] == pick) {
// 				return function() { alert("A ticket is orinting for " + pick + "!\n" +
// 								"Your wait time is about " + allRides[i][1] + " minutes.");
// 				};
// 			}
// 		}
// 	}
// }

// var wantsRide = "Cedar Coaster";
// buildTicket( parkRides, fastPassQueue, wantsRide )();

// var puzzlers = [
//   function(a) { return 8 * a - 10; },
//   function(a) { return (a - 3) * (a - 3) * (a - 3); },
//   function(a) { return a * a + 4; },
//   function(a) { return a % 5; }
// ];
// var start = 2;

// var applyAndEmpty = function(input, queue) {
//   var length = queue.length;
//   for (var i = 0; i < length; i++) {
//     input = queue.shift()(input);
//   }
//   return input;
// };

// alert(applyAndEmpty(start, puzzlers));

// var puzzlers = [
//   function(a) { return 8 * a - 10; },
//   function(a) { return (a - 3) * (a - 3) * (a - 3); },
//   function(a) { return a * a + 4; },
//   function(a) { return a % 5; }
// ];

// alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

// function testClosure() {
// 	var x = 4;
// 	function closeX() {
// 		return x;
// 	}
// 	return closeX;
// }

// alert(testClosure()());
// var checkLocalX = testClosure();
// alert(checkLocalX());

// function buildCoveTicketMaker(transport) {
// 	var passengerNumber = 0;
// 	return function(name) {
// 		passengerNumber++;
// 		alert("Here is your transportation ticket via the " + transport + ".\n" +
// 				"Welcome to the Cold Closures Cove, " + name + "!\n" +
// 				"You are passenger #" + passengerNumber + ".");
// 	}
// }

// var getSubmarineTicket = buildCoveTicketMaker("Submarine");
// var getBattleshipTicket = buildCoveTicketMaker("Battleship");
// var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
// getSubmarineTicket("Mario");
// getSubmarineTicket("Toad");

// getBattleshipTicket("Luigi");

// getGiantSeagullTicket("Bowser");

// function warningMaker(obstacle) {
//   var count = 0;
//   var zones = [];
//   return function(number, location) {
//     count++;
//     var list = "";
//     zones.push(location);
    
//     for (var i = 0; i < zones.length; i++) {
//       list += zones[i] +"\n";
//     }
    
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!\n" +
//           "This is alert #" + count +
//           " today for " + obstacle + " danger.\n" +
//           "Current danger zones are:\n" +
//           list);
         
//   };
// }

// var icebergWarning = warningMaker("iceberg");
// icebergWarning(3, "Blizard Beach");


// function warningMaker(obstacle) {
//   var count = 0;
//   var zones = [];
//   return function(number, location) {
//     count++;
//     var list = "";
//     // push an array with location and number
//     zones.push([location, number]);
//     for (var i = 0; i < zones.length; i++) {
//       // replace location and number with appropriate code
//       list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
//     }
//     alert("Beware! There have been " + obstacle +
//           " sightings in the Cove today!\n" +
//           number + " have been spotted at the " +
//           location + "!\n" +
//           "This is alert #" + count +
//           " today for " + obstacle + " danger.\n" +
//           "Current danger zones are:\n" +
//           list);
//   };
// }

function assignTorpedo( name, passengerArray ){
	// var torpedoAssignment; - this is to fix Closure assignment problem
	for (var i = 0; i < passengerArray.length; i++ ) {
		if (passengerArray[i] == name) {
			// torpedoAssignment = function() { - this is to fix Closure assignment problem
			return function() {
				alert("Ahoy, " + name + "!\n" +
						"Man your post at Torpedo #" + (i+1) + "!");
			};
		}
	}
	// return torpedoAssignment; - this is to fix Closure assignment problem
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda"];

var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();

function makeTorpedoAssigner(passengerArray) {
	return function(name) {
		for (var i = 0; i < passengerArray.length; i++ ) {
			if (passengerArray[i] == name) {
				alert("Ahoy, " + name + "!\n" +
						"Man your post at Torpedo #" + (i+1) + "!");
			
			}
		}
	};
}

var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Luke");



