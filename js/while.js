// let i = 1;
//
// while (i < 65536) {
// 	let number = i * 2;
// 	console.log(number);
// 	i*=2;
// }

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;


do{
let conesToBuy = Math.floor(Math.random() * 5) + 1;
if((allCones - conesToBuy) < 0){
	console.log("cannot sell you " + conesToBuy + "cones i have"+ allCones + "to sell");
}else{
	console.log("number of cones left to buy" + allCones);
	allCones -= conesToBuy;
}
allCones -= conesToBuy;
	console.log("number of cones" + allCones);

}while(allCones >0);


// This expression will generate a random number between 1 and 5
// let allCones;
// while (true){
// 	 allCones = Math.floor(Math.random() * 50) + 50;
// 	 if(allCones % 5 !== 0 && allCones >1 && allCones <50){
// 		 break;
// 	 }
// }