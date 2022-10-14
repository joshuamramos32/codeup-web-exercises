let oddNumber = prompt("Please enter an odd number between 1 and 50? ");
let numberToSkip = oddNumber
for ( let i =50; i > 0; i -=3){
		console.log(i - numberToSkip);
	if(i !== oddNumber){ continue;}
		break;
	}


//let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";