"use strict";


alert("Hello");
let message = "How are you?";
alert(message);

function greeting (name){
    return "Howdy there, " + name + ".";
}

let name = prompt ("What is your name?");
console.log(greeting("Cody"))
console.log(greeting(name))
console.log(greeting());

function sum(a,b){
    let total = a + b;
    console.log(total);
    return total
}

console.log(sum(4,3));
console.log(total);
