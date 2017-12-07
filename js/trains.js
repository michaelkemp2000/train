// var totalTrains = 12;
// var trainsOperational = 0;
// var dayOfTheWeek = "Sunday";
// console.log("There are " + trainsOperational + " running trains.");


// var count = 1;
// while (count <= trainsOperational) {
// 	console.log("Train #" + count + " is running.");
// 	count++;
// }

// for (var stoppedTrains = trainsOperational + 1; stoppedTrains <= totalTrains; stoppedTrains++){
// 	console.log("Train #" + stoppedTrains + " is not operational.");
// }

// var value1 = 11;
// var value2 = 9;
// if ( value1 < value2 ){
// 	console.log(value1 + " is less than " + value2);

// } else {
// 	console.log(value1 + " is greater than or equal to " + value2);

// }

// if (trainsOperational > 0) {
// 	if (trainsOperational == totalTrains) {
// 		alert("All trains are running");
// 	} else {
// 		for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++){
// 			if (trainNumber <= trainsOperational && trainNumber != 3) {
// 				console.log("Train #" + trainNumber + " is running.");
// 			} else if (trainNumber == 10 || trainNumber == 12) {
// 				console.log("Train #" + trainNumber + " begins at noon.");
// 			} else if (trainNumber == 3 && dayOfTheWeek == "Sunday") {
// 				console.log("Train #" + trainNumber + " is running.");
// 			} else {
// 				console.log("Train #" + trainNumber + " is not operational.");
// 			}
// 		}
// 	}
// } else {
// 	confirm("No trains are running");
// }

// var gotName = false;

// while(gotName == false) {
	
// 	var userName = prompt("Yo passenger! What\'s your name? ");

// 	if ( confirm("Do you what to board the train " + userName +"? ")) {
// 		alert(userName + " boarded the train!");
// 		gotName = true;
// 	}

// 	function sumOfCubes(a, b) {
// 		return a*a*a + b*b*b;
// 	}

// 	var result = sumOfCubes(4, 9);
// 	alert(result);

// 	function countE () {
// 		var phrase = prompt("Which phrase would you like to examine?");
// 		if ( typeof(phrase) != "string" ) {
// 			alert("That\'s not a valid entry!");

// 		} else {
// 			var eCount = 0;
// 			for (var index = 0; index < phrase.length; index++) {
// 				if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {
// 					eCount++;
// 				}
// 			}
// 			alert("There are " + eCount + " E\'s in \"" + phrase + "\".");
// 			return true;
// 		}
// 	}
// 	countE();
// }


// var passengers1 = ["Gregg",
// 					"Aimee",
// 					"Thomas",
// 					"Oliverier",
// 					"Jon",
// 					"Ashley"];


// alert(passengers1[5]);

// passengers1[5] = "Eric";

// alert(passengers1[5]);

// alert(passengers1.length);

// passengers1.pop();
// alert(passengers1.length);
// passengers1.push("Adam Rensel");
// alert(passengers1.length);
// alert(passengers1[5]);

// var passengers2 = ["Mike",
// 					"Matt",
// 					"Molly",
// 					"Bryan",
// 					"Dan",
// 					"poppy"];

// var twoArray = [passengers1, passengers2];

// alert(twoArray[1][2]);

// for (var i = 0; i < passengers1.length; i++) {
// 	alert("The value of cell " + i + " is " + passengers1[i]);
// }

// passengerList = ["tex mex", "monty python"];
// var done = false;

// function addPassenger(name, list) {
// 	if (list.length == 0) {
// 		list.push(name);
// 		return list;
// 	} else {
// 		for (var i = 0; i < list.length; i++) {
// 			if(list[i] == undefined) {
// 				list[i] = name;
// 				return list;
// 			} else if (i == list.length - 1) {
// 				list.push(name);
// 				return list;
// 			}
			
// 		}
// 	}
// }

// function deletePassenger(name, list) {
// 	if (list.length == 0) {
// 		alert("List is empty");
// 	} else {
// 		for (var i = 0; i < list.length; i++) {
// 			if(list[i] == name) {
// 				list[i] = undefined;
// 				return list;
// 			} else if (i == list.length - 1) {
// 				alert("Passenger not found");
// 			}
			
// 		}
// 	}
// 	return list;
// }

// function modifyPassenger() {
// 	modname = prompt("Please enter the name of the passenger you wish to modify");
// 	newname = prompt("please enter the new name");
// 	passengerList = deletePassenger(modname, passengerList);
// 	passengerList = addPassenger(newname, passengerList);
// 	printPassenger(passengerList);
// }

// function printPassenger(list) {
// 	for (var i = 0; i < list.length; i++) {
// 		alert("The value of cell " + i + " is " + list[i]);
// 	}
// }

// add = confirm("do you want to add a passenger to the list?")
// if (add) {
// 	while(done != true) {
// 		passengerName = prompt("Please enter new passenger name");
// 		passengerList = addPassenger(passengerName, passengerList);
// 		done = confirm("Are you done adding to the passenger list?");
// 	}
// 	printPassenger(passengerList);
// } else {
// 	while(done != true) {
// 		passengerName = prompt("Please enter the passenger name you want to delete");
// 		passengerList = deletePassenger(passengerName, passengerList);
// 		done = confirm("Are you done deleting from the passenger list?");
// 	}
// 	printPassenger(passengerList);
// }

// mod = confirm("do you want to modify a passenger on the list?");
// if (mod) {
// 	modifyPassenger();
// }


var diff = function (a, b) {
	return a*a - B*B;
};
diff( 9, 5);
alert(diff);





