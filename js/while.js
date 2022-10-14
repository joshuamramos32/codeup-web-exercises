// let i = 1;
//
// while (i < 65536) {
// 	let number = i * 2;
// 	console.log(number);
// 	i*=2;
// }

// let allCones = Math.floor(Math.random() * 50) + 50;
// Math.floor(Math.random() * 5) + 1;
//
// let customerCones = 5
// do {
// 	console.log('while loop iteration #' + allCones);
// 	i++;
// } while (allCones <= 5)
//ice cream cones to sell between 50 and 100
//customer cones ordered between 1 and 5


// let allCones = Math.floor(Math.random() * 50) + 50;
// let conesToSell = allCones %5 !== 0 && allCones > 1 && allcones < 50){
//
// for (let i =5; i <=50; i+=5)
// if if(conesToSell % 5 !== 0 && conesToSell > 1 && conesToSell < 5)
//
let allCones;
while (true){
	 allCones = Math.floor(Math.random() * 50) + 50;
	 if(allCones % 5 !== 0 && allCones >1 && allCones <50){
		 break;
	 }
}