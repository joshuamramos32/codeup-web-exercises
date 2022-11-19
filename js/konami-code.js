"use strict";

$(document).keyup(function(event){
	console.log(event.keyCode);
});

let cheatKeys = { 37: "left", 38: "up", 39: "right", 40: "down", 65: "a", 66: "b", 13: "enter"};
let cheatCode = ["up","up","down","down","left","right","left","right","b","a","enter"]
let cheatPosition = 0;

$(document).keydown(function(e){
	let key = cheatKeys[e.keyCode];
	let requiredKey = cheatCode[cheatPosition];
	if(cheatPosition === cheatCode.length-1){
		alert("!");
	}else if(key === requiredKey){
		cheatPosition = ++cheatPosition;
		console.log(cheatPosition)
	}else{
		cheatPosition = 0;
	}
});
// $(document).keydown(function(e){
//  for (let i = 0; i < cheatCode.length; i++){
// 	if (cheatPosition === cheatCode.length){
// 		alert("!");
// 	}else{
// 		cheatPosition = ++cheatPosition;
// 	}
// }
// })
//



// let buttonsPressed = $("#up, #down, #left, #right, #buttonB, #buttonA, #enter").keyup(function(){
// 	if(cheatkeys.length === buttonsPressed );
// 		alert("You did it");
// })
