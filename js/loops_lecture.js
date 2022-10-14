// for (var i = 0, j = 9; i < 10 ; i++, j--) {
// 	console.log('for loop iteration #' + i + ', j = ' + j);
// }
// break example
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
// 	console.log('Loop counter is: ' + i);
//
// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break;
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }
// continue loop  example
// for (var i = 1; i < 100; i++) {
// // (i % 2 !== 0) checks for evens
// 	//(i % 2 === 0) checks for odds
// 	if (i % 2 === 0) {
// 		// number isn't even
// 		// odd numbers aren't as cool
// 		// skip the rest of the loop and continue with the next iteration
// 		continue;
// 	}
//
// 	console.log('Here is a lovely even number: ' + i);
// }