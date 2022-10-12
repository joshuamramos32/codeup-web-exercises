//condition running out of milk
// action go to the store
let Outofmilk = true;

/* this is the condition*/
if(Outofmilk === true){
    alert("You need milk.");
}
let possiblyFive = 55;

if (possiblyFive === 5){
    console.log("Wow it is five!")
}

function isItanumber(parameter){
    if (typeof parameter === "number"){//!isNan(parseFloat(parameter)) && tyoeof parameter !== "string" is an alt condition that would work
         return "it is a number!";
    }
}
console.log(isItanumber(7));
console.log(isItanumber("99"));
console.log(isItanumber(true));/* will produce true do to boolean having a 0, 1 property*/
console.log(isItanumber("banana"));

/*if (condition){
    I run when the condition evaluates to true;
} else {
    otherwise i run;
}*/

let hasCowMan = false;

if(hasCowMan){
    console.log("Going to milk cow.");
} else {
    console.log("Go to the store.");
}

function isItANumber(parameter){
    if (typeof parameter === "number"){//!isNan(parseFloat(parameter)) && tyoeof parameter !== "string" is an alt
        // condition that would work
        return "it is a number!";
    } else {
        return " oh that's not a number!";
    }
}
let hasCrunchwrap= true;
let hasBajaBlast = true;

if( hasCrunchwrap) {
    console.log("This is acceptable.");
} else if ( hasCrunchwrap && hasBajaBlast) {
    console.log("My order is complete");
} else {
    console.log('You dare to defy me!!!!?!')
}
// most true statement should go first in an if else statement.like below.

if(hasCrunchwrap && hasBajaBlast){
    console.log("My order is complete");
}else if (hasCrunchwrap){
    console.log("This is acceptable");
}else {
    console.log("Anarchy!")
}

function isThisThirtyFive (parameter){
    if (parameter > 35){
        return "oh" + parameter + " is greater than 35"
    } else if (parameter <35){
        return "oh" + parameter + "that is less than 35"
    }else if (parameter === 35){
        return ("that is 35")
    }else {
        return "oh," + parameter + "isnt even a number"
    }
}

console.log(isThisThirtyFive(34));
console.log();
console.log();

//ternary expression: An expression to set a value based on boolean evaluation.(could be described as a
// shorthand to if/else statements.)
//ternary operator is ?
// let message = (booleanValue) ? "Operation was true." : "Operation was false.";
let doWeHaveMilk= true;
let action =(doWeHaveMilk === true) ? "Making a bowl of lucky charms" : "Headed to Heb!";
console.log(action);

function isItanumber(parameter) {
    (typeof parameter === "number") ? "it is a number!" : " oh that's not a number!";
}

// switch statement : a statement with multiple conditions that will trigger based on the value of the variable.
let color = prompt ("What is your favorite color").toLowerCase();

switch(color) {
    case "green":
    case "purple":
        alert("what a coincidence that's my favorite color!");
        break;
    case"orange":
        alert("wow that's my sons favorite color");
        break;
    default:
        alert(color + "that is crazy");
        break;
}





