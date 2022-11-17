
//Document on ready function.
	$(function() {
		//alert( 'The DOM has finished loading!' );
		//alert($("intro-heading").html());
		let listItems =$(".list-item");
		let paragraphs=$("p");
		$("#intro-heading").css("color", "orangered");
		console.log(document.getElementsByClassName("list-item"));
		console.log($(listItems));
		$(listItems).css("color", "blue");
		paragraphs.html("A bunch of nothing.");
	});

