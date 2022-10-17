(function(){
    "use strict";

    /**
     * TODO:Done
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

        let names= ["Joshua","Nina","Amelia","Carter"];
        console.log(names.length);

    /**
     * TODO:Done
     * Create a log statement that will log the number of elements in the names
     * array.
     */


    for(let i = names.length - 1; i > -1; i--) {
        console.log("One of your names listed is : " + names[i]);
    }
    /**
     * TODO:Done
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    names[0] = "' My name is 'Joshua";
    names[1] = "'My wife's name is'Nina";
    names[2] = "'My oldest daughter is named' Amelia";
    names[3] ="'My oldest sons name is' Carter ";
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:Done
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let i = names.length - 1; i > -1; i--) {
        console.log("One of the names you listed is: " + names[i]);
    }
    /**
     * TODO:Done
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name){
        console.log("One of the names you listed is: " + name);
    });

    /**
     * TODO:Done
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let first = [1,2,3,4,5];
let second =[1,2,3,4,5];
let last = [1,2,3,4,5];
    function one() {
        console.log(first[0]);
    }
one();
    function two(){
        console.log(second[1]);
    }
    two();
    function three(){
        console.log(last[4]);
    }
    three();
})();

