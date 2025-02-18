// Part 1

// 1
// This array contains the animals in our zoo
let animals = [];

// Add animals to our zoo
animals.push({
	id: 0,
	name: "Horton",
	species: "Elephant",
	count: 1,
	gender: "male",
	status: "closed",
});

animals.push({
	id: 1,
	name: "Stripes",
	species: "Tiger",
	count: 1,
	gender: "female",
	status: "open",
});

animals.push({
	id: 2,
	name: "Po",
	species: "Panda",
	count: 1,
	gender: "female",
	status: "open",
});

console.log("Animals: ", animals);

// 2
// Add another animal to our zoo.
animals.push({
	id: 3,
	name: "Steve",
	species: "Panda",
	count: 1,
	gender: "male",
	status: "closed",
});

// Remove the animal we just created.
animals.slice(3, 3);

// Get an array of animals that are open.
let openAnimals = animals.filter((animal) => animal.status === true);

// Close the tiger.
animals[1].status = "closed";

// Part 2
// 1
// Get statistics
let animalCount = 0;
let openCount = 0;
let closedCount = 0;

for (let i = 0; i < animals.length; i++) {
	animalCount += animals[i].count;

	if (animals[i].status === "open") {
		openCount += animals[i].count;
	} else {
		closedCount += animals[i].count;
	}
}

// 2
// Display the stats for the user to see
document.getElementById("stats").innerHTML =
	`${animalCount} total animals<br>` +
	`${openCount} open animals<br>` +
	`${closedCount} closed animals`;

// Called when the user presses the search button.
function nameSearch() {
	// Get the text to search for.
	let search = document.getElementById("nameSearch").value;

	console.log(`Searching for name: ${search}`);

	// Filter the animals.
	let foundAnimal = animals.find((animal) => animal.name === search);

	// display the results.
	document.getElementById("searchResults").innerHTML =
		foundAnimal === undefined
			? "No results found"
			: formatAnimal(foundAnimal);
}

// Called when either the filter open or closed button clicked.
function filterAnimals(status) {
	console.log(`Searching for ${status} animals`);

	// Find animals based on provided status.
	let foundAnimals = animals.filter((animal) => animal.status == status);

	// Display the results
	document.getElementById("searchResults").innerHTML =
		formatAnimals(foundAnimals);
}

// Formats an animal for displaying to the user.
function formatAnimal(animal) {
	return `${animal.name}: ${animal.gender} ${animal.species}`;
}

// Formats a list of animals to display to the user.
function formatAnimals(animalArr) {
	let str = "";

	// Loop through the animals and add each to the string.
	animalArr.forEach((animal) => {
		str += formatAnimal(animal) + "<br>";
	});

	return str;
}

// Part 3
// Display all the animals at their final state now.
console.table(animals);
