"use strict";

$(document).keyup(function(event){
	console.log(event.keyCode);
});

// $(".header").css({
//  "color": "yellow"
// })
function contraCheat(){
let cheatKeys = { 37: "left", 38: "up", 39: "right", 40: "down", 65: "a", 66: "b", 13: "enter"};
let cheatCode = ["up","up","down","down","left","right","left","right","b","a","enter"]
let cheatPosition = 0;
$(document).keydown(function(e){
	let key = cheatKeys[e.keyCode];
	let requiredKey = cheatCode[cheatPosition];
	if(cheatPosition === cheatCode.length-1){
		$(".header").text("Konami Cheat Code success 30 Lives!!!!").css({
			"color": "yellow"
		});
		$(".body").css({
		"background-image": 'url("img/contra.gif")',
		});
	}else if(key === requiredKey){
		cheatPosition = ++cheatPosition;
	}else{
		cheatPosition = 0;
	}
});
}
let bodies = $(".body");
contraCheat();

function superMarioGif() {
	let cheatkeys2 = {37: "left", 39: "right", 13: "enter"};
	let cheat2 = ["left", "left", "right", "right", "enter"];
	let cheatPos2 = 0;

	$(document).keydown(function (e) {
		let key = cheatkeys2[e.keyCode];
		let requiredKey = cheat2[cheatPos2];
		if (cheatPos2 === cheat2.length - 1) {
			$(bodies).css({
				"background-image": 'url("img/bowsermario.gif")',
			});
			$(bodies).text("Mario vs. Bowser").css({
				"color":"#FF5F1F",
				"font-size": "40px",
			});
		} else if (key === requiredKey) {
			cheatPos2 = ++cheatPos2;
		} else {
			cheatPos2 = 0;
		}
	});
}
superMarioGif();



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
