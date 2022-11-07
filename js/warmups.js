//Write a function that when passed an object will return the value of the object’s price property.
// Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

// let potatoes ={
// 	name: "Potatoes",
// 	quantity: 2,
// 	price: "$7.89",
// };
//
// function getPrice(obj){
// 	return obj.price;
// }
// console.log(getPrice(potatoes));

// Write a function that when passed an array will return the longest string from the array.
// 	Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”



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
//
// function fizzbuzz(num){
// if (num % 3 === 0 && num % 5 === 0){
// 	console.log ("fizz buzz");
// 	}else if (num % 3  === 0){
// 	console.log("fizz");
// 	}else if (num % 5 === 0){
// 	console.log("buzz");
// }else{
// 	console.log(num) ;
// }
// fizzbuzz();
//
// }
//  function fizzbuzz(){
// 	for (let i = 1; i<= 100; i++){
// 		if(i % 5 === 0 && i % 3 === 0){
// 			console.log("fizzBuzz");
// 		}else if(i % 5 === 0){
// 			console.log("buzz");
// 		}else if(i % 3 === 0){
// 			console.log("fizz");
// 		}else{
// 			console.log(i)
// 		}
// 	}
//  }
//  fizzbuzz();

// 	let potatoes = {
// 	name: "potatoes",
// 	quantity: 20,
// 	totalPrice: 47
// };
// function getPricePerItem(){
// // return  (potatoes.totalPrice)/(potatoes.quantity);
// let pricePer =(potatoes.totalPrice)/(potatoes.quantity)
// 	return pricePer.toString()
// }
//
// console.log((getPricePerItem(potatoes))); // returns "$2.35"

//  Write a function that takes in two string arguments:
// 	the first being the string assessed, and the second being a single letter.
// 	The function should return a count of the occurrences of the letter (second argument)
// within the string (first argument). This function should count both upper and lowercase instances of the letter.

// let firstArgument = ["b"];
// let secondArgument = ["baseball"];
// let thirdArgument =[];
//
// function argument() {
// 	for (let i = 0; i < firstArgument.length; i++) {
// 		for (let j = 0; j < secondArgument.length; j++) {
// 			if (firstArgument[i] <= secondArgument[j]) {
// 				thirdArgument.push(firstArgument[i]);
// 				console.log(thirdArgument);
//
// 			}
// 		}
// 	}
// }
//
// argument();
// Today's warmup: Write a function that takes in an array of objects and returns the average of the heightInMM properties from each object.

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
// function getAverageHeight(arr){
// 	return (hamsters.reduce((acc, {heightInMM}) => (acc + heightInMM), 0))/arr.length;
// }
//
// console.log(getAverageHeight(hamsters)); // should return 93.2;

//walk through example for hamsters
// function getAverageHeight(array){
// 	let totalHeight = 0;
// 	for (let element of array) {
// 		totalHeight += element.heightInMM;
// 	}
// 	return totalHeight / array.length;
// }
// console.log(getAverageHeight(hamsters));
// TODO: Assessment 2 prep
// TODO: WRITE A FUNCTION NAMED isPositive
// todo: that accepts a number
//todo: and return true or false

// function isPositive(x){
// 	if (x > 0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// short answer
// function isPositive(x){
// 	return x > 0;
// }



//TODO: write a function named isFortyTwo.
// TODO: that accepts a number.
//Todo: and return a boolean.
//todo: that indicates whther the number is equal to 42
//short answer
// function isFortyTwo(num){
// 	return num === 42;
// }

// function isFortyTwo(num){
// 	if(num === 42){
// 		return true;
// 	}else{
// 		return false
//
// 	}
// }
//
// console.log(isFortyTwo());

//TODO: Write a function named countEvens
//Todo: that accepts an array of numbers
//TODO:and return the number of even numbers in the array
// let numArr = [2,4,6,8];
// let numArr2 =[1,2,3,4];
//
// function countEvens(arr){
// 	let count = 0;
// 	// iterate through the array
// 	arr.forEach(function(number){
// 	if(number % 2 === 0){
// 		count ++
// 		}
// 	})
//
// 	// if arr[0] % 2 === 0
//
// 	// return that count
// 	return count;
// }

//todo write a function names AllLowercase
// todo that takes in a string
//todo and return true if all characters in the string sre lowercase
//todo otherwise return false

// function AllLowerCase(str){
// 	if (str === str.toLowerCase()){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// TODO: Write a function
//  that takes in a string and
//  returns an object with the following properties:
// 	1. `string` which is to be set the to the argument passed into the function.
// 	2. `numberOfWords` which is to be set to the number of words within the string.
// 	3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).
//
// function returnObject(str){
// 	let newObj ={};
// 	newObj.string = string;
// 	newObj.numberOfWords = countLetters(string, "");
// 	newObj.eCount = countLetters(string,"E");
// 	return newObj;
//
//
// }
//
// function countLetters(stringOne, letter) {
// 	let myString = stringOne.toLowerCase();
// 	let mySubString = letter.toLowerCase();
// 	let count = myString.split(mySubString).length - 1;
// 	console.log(count);
// 	return count;
// }

// // TODO: Write a function that takes in a grocery item object
// //  todo: and returns a string representing the
// // todo: price per item for that object.
// //should return 4.
// let potatoes ={
// 	name: "potatoes",
// 	quantity: 5,
// 	totalPrice: 20,
// }
// function groceryItem(obj){
// 	return potatoes.totalPrice / potatoes.quantity;
//
//
// }
// console.log(groceryItem());
//TODO: Write a function that takes in an array of grocery item objects
// and returns the object with the
// highest weightInGrams  property
// const cart = [
// 	{
// 		name: "Kingsford Charcoal",
// 		weightInGrams: 4535
// 	}, {
// 		name: "Krazy Glue",
// 		weightInGrams: 5
// 	}, {
// 		name: "NVIDIA RTX 4090",
// 		weightInGrams: 2186
// 	}
// ];
//





// # Now That's What I Call LAO Review, vol. 2
// ## Questions
// 1. Write a function that takes in an array of letters, and returns the array sorted in reverse alphabetical order.
// 	```
// ex.
// sortLetters(["a", "b", "c"]); // returns ["c", "b", "a"]
// sortLetters(["K", "E", "Y"]); // returns ["Y", "K", "E"]
// ```
// let alphaA = ["d","z","a"];
//
//
// function sortLetters(){
// 	let alphA2 = alphaA.sort();
// 	return alphA2.reverse();
// }
//
// console.log(sortLetters());;

// 2. Write a function that takes in a number and returns an object with the following properties.
// 1.  `value` which is to be set to the number passed into the function.
// 2. `doubled` which is to be set to the number passed into the function multiplied by 2.
// 3. `sign` which is to be set to a string, either `"positive"`, `"negative"`, or `"zero"`, corresponding to the value of the number passed into the function being either positive, negative, or 0.
// 	```

function getobJ(value,doubled,sign) {
	return {
		value: 4,
		doubled: 8,
		sign: "positive",
	};
}

console.log(getobJ());
// // ex.
// reviewNumber(16); // returns {value: 16, doubled: 32, sign: "positive"}
// reviewNumber(-4); // returns {value: -4, doubled: -8, sign: "negative"}
// reviewNumber(0); // returns {value: 0, doubled: 0, sign: "zero"}
// ```
// 3. Write a function that takes in a string and returns an array where each element is each word that is in the string passed into the function.
// ```
let myString = "Lets go Astros";
function arrayOfWords(str){
	return str.split(' ');

}

console.log(arrayOfWords(myString));
// ex.
// arrayOfWords("Lovely Day For Coding") // returns ["Lovely", "Day", "For", "Coding"]
// arrayOfWords("One-eyed One-horned Flying Purple People Eater") // returns ["One-eyed", "One-horned", "Flying", "Purple", "People", "Eater"]
// arrayOfWords("Toad") // returns ["Toad"]
// ```
// todo 4. Write a function that takes in a string and number and returns an object with the following properties
// todo 1. `title` which is to be set to the string passed into the function.
// todo 2. `price` which is to be set to the number passed into the function.
// todo 3. `count` which is to be set to 0.
// 	```
// createItem("Pokemon TCG Booster Pack", 10.99) // returns {title: "Pokemon TCG Booster Pack", price: 10.99, count: 0}
// createItem("Water Bottles (24 Pack)", 27.98) // returns {title: "Water Bottles (24 Pack)", price: 27.98, count: 0}
let packAge = {
	title: "Pokemon TCG Booster Pack",
	price: 10.99,
	count: 0,
}
function createItem() {
	return packAge
}

console.log(createItem());
// 5. Write a function that takes in an array of objects and returns the object from the array with the most colors in the color property.
// 	```
// ex.
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
// ​
// getMostColorful(hamsters) // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"}
function getMostColorful(obj) {
	let mostColorful ={fur:[]};
	obj.forEach(function(el){
		if (el.fur !== mostColorful.fur){
			mostColorful = el;
	}
	});
	return mostColorful
}

console.log(getMostColorful(hamsters));

function getTallestHamster(arr) {
	let tallest = {heightInMM: 0};
	arr.forEach(function(el){
		if (el.heightInMM > tallest.heightInMM) {
			tallest = el;
		}
	});
	// for(let i = 0; i < arr.length; i++) {
	//     if (arr[i].heightInMM > tallest.heightInMM) {
	//         tallest = arr[i];
	//     }
	// }
	// for (let el of arr) {
	//     if (el.heightInMM > tallest.heightInMM) {
	//         tallest = el;
	//     }
	// }
	return tallest;
}

console.log(getTallestHamster(hamsters));