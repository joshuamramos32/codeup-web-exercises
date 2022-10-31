//Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

let potatoes ={
	name: "Potatoes",
	quantity: 2,
	price: "$7.89",
};

function getPrice(obj){
	return obj.price;
}
console.log(getPrice(potatoes));

// Write a function that when passed an array will return the longest string from the array.
// 	Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

//my code below= wrong
// const arr =["Green","Blue","Periwinkle"];
//
//
// function getLongestString() {
// 	return arr.length;
// }
//
//

// walk through code
// console.log(getLongestString(arr));
//
// const colors =["green", "blue","periwinkle"];
// function getLongestString(){
// 	let longestStr = "";
// 	for (let str of arr){
// 		if (str.length > longestStr.length){
// 			longestStr = str;
//
// 		}
// 	}
// 	return longestStr
// }
// console.log(getLongestString(colors))

// const hamsters = [
// 	{
// 		name: "Hamtaro",
// 		heightInMM: 86,
// 		fur: ['orange', 'white'],
// 		gender: "male",
// 		dateOfBirth: "August 6"
// 	} , {
// 		name: "Bijou",
// 		heightInMM: 75,
// 		fur: ['white'],
// 		gender: "female",
// 		dateOfBirth: "July 10"
// 	} , {
// 		name: "Oxnard",
// 		heightInMM: 100,
// 		fur: ['grey', 'white'],
// 		gender: "male",
// 		dateOfBirth: "May 3"
// 	} , {
// 		name: "Boss",
// 		heightInMM: 120,
// 		fur: ['brown', 'white'],
// 		gender: "male",
// 		dateOfBirth: "September 21"
// 	} , {
// 		name: "Snoozer",
// 		heightInMM: 85,
// 		fur: ['brown', 'white', "pink"],
// 		gender: "male",
// 		dateOfBirth: "January 14"
// 	}
// ];
//
// getTallestHamster(hamsters); // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
//
//
// Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.

function fizzbuzz(num){
if (num % 3 === 0 && num % 5 === 0){
	console.log ("fizz buzz");
	}else if (num % 3  === 0){
	console.log("fizz");
	}else if (num % 5 === 0){
	console.log("buzz");
}else{
	console.log(num) ;
}
fizzbuzz();

}
 function fizzbuzz(){
	for (let i = 1; i<= 100; i++){
		if(i % 5 === 0 && i % 3 === 0){
			console.log("fizzBuzz");
		}else if(i % 5 === 0){
			console.log("buzz");
		}else if(i % 3 === 0){
			console.log("fizz");
		}else{
			console.log(i)
		}
	}
 }
 fizzbuzz();