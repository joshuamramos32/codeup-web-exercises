const hamsters = [
	{
		name: "Hamtaro",
		heightInMM: 86,
		fur: ['orange', 'white'],
		gender: "male",
		dateOfBirth: "August 6"
	} , {
		name: "Bijou",
		heightInMM: 75,
		fur: ['white'],
		gender: "female",
		dateOfBirth: "July 10"
	} , {
		name: "Oxnard",
		heightInMM: 100,
		fur: ['grey', 'white'],
		gender: "male",
		dateOfBirth: "May 3"
	} , {
		name: "Boss",
		heightInMM: 120,
		fur: ['brown', 'white'],
		gender: "male",
		dateOfBirth: "September 21"
	} , {
		name: "Snoozer",
		heightInMM: 85,
		fur: ['brown', 'white', "pink"],
		gender: "male",
		dateOfBirth: "January 14"
	}
];

const motorCycles = [
	{
		brand: "Harley",
		model: "Sportster",
		enginesize: 883,
		color: "flames",
		year: 1996
	},{
		brand : "Honda",
		model: "Shadow",
		enginesize: 750,
		color: "red",
		year: 1989
	},{
		brand: "Harley",
		model: "Dyna",
		enginesize: 1540,
		color: "blue",
		year: 2006

	},{
		brand:"Harley",
		model: "Softtail-Deluxe",
		enginesize: 1540,
		color: "black",
		year: 2009
	},{
		brand: "Harley",
		model: "LowriderST",
		enginesize: 1923,
		color: "gunship-grey",
		year: 2022

}
];


const numbers = [1,2,3,4,5];

//.map()- will change every element of the array, and return a new array of the same length
// const names = [];
// for (let hamster of hamster) {
// 	names.push(hamster.name);
// }

const names = hamsters.map((hamster) => hamster.name);
console.log(names);

const doubleNumbers = numbers.map( num => num * 2);
console.log(doubleNumbers);

//.filter() - will return a new array that is (potentially) shorter than the original array, but can not change the elements of the array.
const findEvenNumber = num => num % 2 === 0;



const evenNumbers = numbers.filter(findEvenNumber)//(num => num % 2 === 0); // return firthe inner function MUST BE a boolean value.
console.log(evenNumbers);

const evenDoublesNumbers = doubleNumbers.filter(num => num % 2 === 0);
console.log(evenDoublesNumbers);

const tallHamsters = hamsters.filter(hamster => hamster.heightInMM >= 100);
console.log(tallHamsters);

const tallHamstersNames = hamsters.filter(hamster => hamster.heightInMM >= 100).map(hamster =>hamster.name);
console.log(tallHamstersNames);

//.reduce() - changes an array into ... something. We decide what that something is. 2 arguments: 1st is a function expression with two parameters (accumilation, element at time of iteration "ATOI"), 2nd is the starting value of the accumilation/result.

let sumInTheBeforeTimes = 0;
for (let number of numbers ){
	sumInTheBeforeTimes += number;
};
console.log(sumInTheBeforeTimes);

const sum = numbers.reduce((accumulation, currentNumber) => {
	return accumulation + currentNumber;
}, 0);

console.log(sum); //reduce will always result in a single value/thing (like an array).

const tallestHamster = hamsters.reduce((tallHamster, hamster) => {
	if (hamster.heightInMM > tallHamster.heightInMM){
		tallHamster = hamster;
	}
	console.log(tallHamster);
	return tallHamster;
},{heightInMM: 0});
console.log(tallestHamster);

function countWords(sentence) {
	const words = sentence.split(' '); // transform a sentence into an array of words
	const wordCountObject = words.reduce((wordCounts, word) => {
		if (typeof wordCounts[word] === 'undefined') {
			// if the word is not yet present in our object, set it's value to 1
			wordCounts[word] = 1;
		} else {
			// otherwise increment the existing count
			wordCounts[word] += 1;
		}
		return wordCounts;
	}, {}); // start with an empty object
	return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));;
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}
console.log(countWords('Everbody get up its time to slam now we got a real jam going now welcome to the space jam'));


const engineS = motorCycles.map((size) => size.enginesize);
console.log(engineS);

const types = motorCycles.map((type) => type.brand);
console.log(types);

const mcModel = motorCycles.map((name) => name.model);
console.log(mcModel);

const everyOther = motorCycles.filter(motorcycle => motorcycle % 2 === 0);
console.log(everyOther);