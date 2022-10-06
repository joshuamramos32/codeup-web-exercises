"use strict";

console.log('Hello from external JavaScript');
alert('Welcome to my website');
let userInput = prompt('What is your favorite color?');
alert ('Awesome! My favorite color is also ' + userInput);


// movie rental
let theLittleMermaid =3;
prompt('How many days did you have The Little Mermaid?');
let brotherBear =5 ;
prompt ('How many days did you have Brother Bear?');
let hercules =1 ;
const price = 3
let total = theLittleMermaid + brotherBear + hercules;
let cost = total * price;
alert (cost);

// contractor pay
let amazon = 380 * 4;
prompt( 'How many hours did you work at Amazon this week?')
let google = 400 * 6;
prompt ('How many hours did you work at Google this week?')
let facebook = 350 * 10;
prompt (' How many hours did you work at Facebook this week?')
let pay = amazon + google + facebook;
alert ( 'your total pay is ' + pay);



let studentEnrollment = confirm("Are you currently a student?");
let schedule = confirm("Can you take this class?");
let availability = confirm( "Is There room in the class?")
alert ("You can enroll in the class!" +(studentEnrollment && schedule && availability))

//product offer
let member =confirm("Are you a premium member?");
let offer = confirm("is the offer still valid?");
let cart = confirm ("Do you have more than 2 items in your cart?");
alert ("Proceed to purchase "+ (member || cart && offer));











