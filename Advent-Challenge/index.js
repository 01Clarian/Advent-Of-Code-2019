// ADVENT OF CODE 2019 DECEMBER 1ST 
const fs = require('fs');
const massArray = fs.readFileSync('santa.txt').toString().split("\n");

// Map, Convert to Int, and run conversion
let moduleArray = massArray.map(i =>
	parseInt(Math.floor(i / 3) - 2))

// Reducer to add Final Fuel Count Part I
const fuelSum =	moduleArray.reduce((a, b) => a + b, 0)
	console.log('response part 1: ', fuelSum)

// Set up While loop Count
let recalcFuelSum = 0;
massArray.map(i => {
	let newModuleArray = parseInt(Math.floor(i) / 3) - 2;
// Conditionally convert mass count until zero and store to recalc
	while(newModuleArray > 0) {
		recalcFuelSum += newModuleArray;
		newModuleArray = Math.floor(newModuleArray / 3) - 2;
	}
})
//LOG OUT Final Fuel Count Part II
console.log('response part 2: ', recalcFuelSum)
