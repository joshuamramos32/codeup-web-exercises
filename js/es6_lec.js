"use strict";

(() => {
	let message = "Tim";
	if (message === "Tim"){
		var noLookie = "you should only see this once";
		console.log(noLookie);
	}



	const arrOfNum = [1,2,3];
	for(let num of arrOfNum) {
		if(num % 2 === 0){
			continue;
		}
		document.querySelector("#insert-here").innerHTML += `<li>${num.toFixed(2)} is an odd number</li>`;
	}
	//`${}`template name//
	// =>// is function expression//replace keyword 'function'
	//exponentiation operator (2**2)
	function addTwo(num) {
		return num + 2;
	}
	const addThree = num => num + 3;
	console.log(addThree(5));

	const introInstructor = (name ="Joshua") => `Say hello to your instructor : ${name}`;

	console.log(introInstructor("James"));
	console.log(introInstructor());


})();