"use strict";

$(document).keyup(function(event){
	console.log(event.keyCode);
});


function contraCheat(){
let cheatKeys = { 37: "left", 38: "up", 39: "right", 40: "down", 65: "a", 66: "b", 13: "enter"};
let cheatCode = ["up","up","down","down","left","right","left","right","b","a","enter"] //this combination of keys will activate cheat//
let cheatPosition = 0;
$(document).keydown(function(e){
	let key = cheatKeys[e.keyCode];
	let requiredKey = cheatCode[cheatPosition];
	if(cheatPosition === cheatCode.length-1){
		$(".header").text("Konami Cheat Code success 30 Lives!!!!").css({  // changes the title and color of font//
			"color": "yellow"
		});
		$(".body").css({
		"background-image": 'url("img/contra.gif")',//changes the image from a white background to the gif//
		});
	}else if(key === requiredKey){
		cheatPosition = ++cheatPosition;// sets position at 0 to iterate through array//
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
			// $(bodies).ready(function () {
			// 	let audioElement = document.createElement('audio');
			// 	audioElement.setAttribute('src','sounds/laugh.mp3'); // this code is not functioning properly need to fix.
			// 	audioElement.setAttribute("play", "autoplay");
			// });
		} else if (key === requiredKey) {
			cheatPos2 = ++cheatPos2;
		} else {
			cheatPos2 = 0;
		}
	});
}
superMarioGif();



