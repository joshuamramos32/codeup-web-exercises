// //New object instance
// let car = new Object();
// console.log(typeof car);
//
// //object literal notation
// let car= {};
// console.log(typeof car);

//
var car = {};
car.make = "Toyota";
car.model = "Camry";
car.gear1 = 1;
car.doorOpen = false
// create a honk method on the car object
car.honk = function () {
	alert("Honk! Honk!");
};
car.shiftGears= function(){

}
car.openAllDoors = function(){
	car.doorOpen= true;
}
car.logMakeModel = function () {
	console.log("Car make/model is: " + car.make + " " + this.model);
};
// honk the horn
car.honk();
car.openAllDoors();
car.logMakeModel();