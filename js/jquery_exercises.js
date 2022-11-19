"use strict";

$(function(){
	// jquery selectors
	// alert($("#my-paragraph").html());
	// alert($("#my-div").html());
	// $(".codeup").css("border", "1px solid red");
	// $("li").css("font-size"," 20px")
	// $("h1").css("background-color", "yellow")
	// $("li").css("background-color", "lightgreen")
	// $("p").css("background-color", "cyan")
	// $("h1, p, li").css("background-color", "yellow")


// jquery mouse exercise

	$('h1').click(function() {
		$(this).css('background-color',"pink")
	});

	$("p").dblclick(function(){
		$(this).css("font-size", "18px")
	})
	$("li").hover(function(){
		$(this).css("color","red");
	}, function (){
		$(this).css("color","black")
	})

	// $('#header2').dblclick(function() {
	// 	$(this).css('background-color',"limegreen")
	// });
	//
	// $('.the-ul').hover(function() {
	// 	$(this).css("background-color", "blue");
	// }, function() {
	// 	$(this).css('background-color'," red");
	// });
	//
	//
	//













})