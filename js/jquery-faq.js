$("a:link").css({
	"color": "blue",
})

$("h1").css({
	"font-family": "sans-serif",
})
$(".ques").css({
	"font-family": 'sans-serif',
	"font-weight": 'bold',
	"font-size": '30px',
	"text-decoration": "none",
	"list-style-type": "disc",
});

$('.invisible').css('visibility','hidden');
$('dd').slideToggle();


$('#dt-1').click(function() {
	$('#dd-1').slideToggle();
	$('.invisible').css({
		'visibility': 'unset',
		'background-color': 'pink'
	});

});

$('#dt-2').click(function() {
	$('#dd-2').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-3').click(function() {
	$('#dd-3').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-4').click(function() {
	$('#dd-4').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-5').click(function() {
	$('#dd-5').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-6').click(function() {
	$('#dd-6').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-7').click(function() {
	$('#dd-7').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-8').click(function() {
	$('#dd-8').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-9').click(function() {
	$('#dd-9').slideToggle();
	$('.invisible').css('visibility', 'unset');
});

$('#dt-10').click(function() {
	$('#dd-10').slideToggle();
	$('.invisible').css('visibility', 'unset');
});
$('.click-here').click(function() {
	$('.last-li').css('background-color',"yellow")// for the first h3 to change last li background -color
});
$('.click-here2').click(function() {
	$('.last-li2').css('background-color',"yellow")// for the last h3 to change the first li background-color
});
$('#national-parks-heading').click(function() { // bolds all li's when the  first h3 is clicked
	$('.lis').css('font-weight',"bold")
});
$('#state-parks').click(function() { // bolds all li's when the  first h3 is clicked
	$('.lis2').css('font-weight',"bold")
});
$('li').click(function(){
	$(this).parent().children().first().css('color','blue')
});