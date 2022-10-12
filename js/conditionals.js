"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(userColor){
    if (userColor === "green"){
        return " is the color of money!";
    }else if (userColor === " orange"){
        return " is a delicious fruit!";
    }else if (userColor === "red"){
        return " is the color of blood!";
    }else{
        return " is a weird color"
    }
}
//console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor = randomColor
//console.log(randomColor)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//let color =(randomColor);

/*switch(color){
    case "red":
        alert("red is a nice color!");
    break;
    case"green":
        alert("Green is the color of grass");
    break;
    case "yellow":
        alert("Do you also like daisy's?");
    break;
    default:
        alert(" is a random color.");
    break;
}

console.log(color)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */


//let userColor = prompt("What color do you like?")
//alert(analyzeColor(userColor))
//return

/** TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*function calculateTotal(luckyNumber){
    let disCount1 = (10);
    let disCount2 = (25);
    let disCount3 = (35);
    let disCount4 = (50);
    let disCount5 = ("free");

    if( luckyNumber === 1){
        return "That is a " + disCount1 + " percent discount!";
    }else if (luckyNumber === 2 ){
        return "you got " + disCount2 + " percent off";
    }else if (luckyNumber === 3){
        return " you order is " + disCount3 + " percent off";
    }else if (luckyNumber === 4){
        return ("you just received " + disCount4 + " percent of your total");
    }else if (luckyNumber === 5){
        return " your order is " +disCount5 + " today!!!";
    }else{
        return "sorry you did not receive a lucky number..."
    }

                        }


alert (calculateTotal(4));*/

function calculateTotal(luckyNumber, total){
    let discountedPrice;
    if(luckyNumber === 0){
        discountedPrice = total;
    }else if( luckyNumber === 1){
        discountedPrice = total-(total *.1);
    }else if(luckyNumber === 2){
        discountedPrice = total-(total * .25);
    }else if(luckyNumber === 3){
        discountedPrice = total -(total * .35);
    }else if (luckyNumber === 4){
        discountedPrice = total -(total * .5);
    }else if( luckyNumber === 5){
        discountedPrice = 0;
    }
    return discountedPrice;
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 let luckyNumber = Math.floor(Math.random() * 6);
 /*let userBill =prompt("What is your total Bill?");
 let userDiscount = userBill
 function calculateTotal(){
     prompt("Your number was, "+ luckyNumber + " !")
 }alert("your bill before the discount applied is " + userBill + " !")
     alert("Your total after ")*/

let userInput = prompt("what is your total bill?")
calculateTotal(luckyNumber, userInput);

alert("Your lucky number is " + luckyNumber + ". Your price before discount is " + userInput + ". price with discount is" + calculateTotal(luckyNumber, userInput) + ".")

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved

 */
/*let userGame = (confirm("Would you like to enter a number?"));
 function userNumber(){
    if (userGame === false){
         alert("that's a bummer!");
    }else{
        return alert("Lets play!")
    }
}
userNumber(prompt("What number do you want to enter?"))

function theNum(){
     if (userNumber %2===0){
         return alert("That number is even")
     }else{
         return alert("That number is odd")
     }
}*/

 /*if(confirm("Would you like to enter a number?")){
   let userNumber= parseInt(prompt("What number would you like to enter"));

   if(!isNaN(userNumber)) {

       if (userNumber % 2 === 0) {
           alert(userNumber +"That number is even!");
       } else {
           alert(userNumber +"That number is odd!");
       }

       alert("your number + 100 is " + (userNumber + 100));

       if (userNumber >= 0) {
           alert( "Your number is positive!");
       } else {
           alert("Your number is negative!")
       }

   }else{
         alert("That is not a number")
       }
}*/

/*function promptUserNumber(){

    if (confirm("Would you like to enter a number?")){
        let userNumber= parseInt(prompt("What number would you like to enter"));

        if(!isNaN(userNumber)) {
            alert(isEven(userNumber))
            alert(isPlus100(userNumber))
            alert(isPositive(userNumber))
        }else{
        alert("Please enter a number.");
        }
    }
}
function isEven(userNumber){
    if (userNumber % 2 === 0) {
        return userNumber +"That number is even!";
    } else {
        return userNumber +"That number is odd!";
    }
}

function isPlus100(userNumber){
    return "Your number + 100 is" + (userNumber + 100);

}

function isPositive(userNumber){
    if (userNumber > 0) {
        return " your number is positive"
    } else {
       return " your number is negative"
    }

}
promptUserNumber();*/