let number = prompt("Please enter a number?")
function showMultiplicationTable(){
	for( let i = 1; i <=10; i++){
		console.log(i + "x" + number + "=" +(number * i) )

}

}
showMultiplicationTable();

for (let i = 1; i <= 10; i++) {
let random=Math.floor(Math.random() * 200)+20;
	if (random % 2 === 0){
		console.log(random +"is even");
	}else{
		console.log(random + "is odd");
	}



}


// let num = "";
//
// for (let i = 1; i < 10; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		char += i;
// 	}
// 	char += "\n";
// }
// console.log(char);
let num = "";
for(let i=1; i<=10; i++) {
	num = num + i
	console.log(num);
}

for(let i =100; i > 0; i -=5) {
	console.log(i);
}