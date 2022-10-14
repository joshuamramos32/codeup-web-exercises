let oddNumber;
while (true){
	oddNumber = prompt("Please enter an odd number between 1 and 50? ");
	if(oddNumber % 2 !== 0 && oddNumber > 1 && oddNumber < 50){
		break;
	}
}
let numberToSkip = parseInt(oddNumber)
for ( let i =1; i <=50; i+=2) {
	if (i === numberToSkip) {
		console.log("number to skip is " + i);
		continue;
	}
	console.log("Here is an odd number " + i)
}

