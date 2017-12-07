var booksArray = ["Great Expectations", "The Remainder of the Day", " Peter Pan"];
var myBox = {
			height: 6, width: 8, length: 10, volume: 480, 
			material: "cardboard",
			contents: booksArray,
			"# of stops": 2,
			"# of books": 0
			
			};

// alert(myBox.width);
// alert(myBox.material);
// alert(myBox.contents);
// alert(myBox["# of stops"]);

// myBox.width = 12;
// alert(myBox.width);

// myBox.contents.push("On The Road");
// alert(myBox.contents);

// myBox.destination1 = "Orlando";
// myBox["destination2"] = "Miami"

// alert(myBox["destination"]);
// alert(myBox["destination2"]);

// for(var i = 1; i <= myBox["# of stops"]; i++){
// 	alert(myBox["destination" + i] );
// }

delete myBox.contents;

function addBook(box, name, writer) {
	box["# of books"]++;
	box["book" + box["# of books"]] = {title: name, author: writer};
}

addBook(myBox, "Great Expectations", "Charles Dickens");

alert(myBox.book1.title);

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  for(var i = 1; i <= location.numRangers; i++) {
    list += location["ranger" +i].name +", man the ";
    list += location.weaponBulbs[location["ranger"+i].station-1][0] + "!\n";
  }
  alert(list);
}

dontPanic(lighthouseRock);