(function() {
    "use strict";

    /**
     * TODO:1
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName: "Joshua",
    lastName: "Ramos",
        // sayHello: function(){
        // return "Hello from " + person.firstName +" "+ person.lastName + "."
        // }
    };
console.log(person.firstName);
console.log(person.lastName);

    /**
     * TODO:2
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //my code below
 person.sayHello = function(){
    return("Hello from " + person.firstName + " " +  person.lastName);
}

console.log(person.sayHello());
    /** TODO:3
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200.
     *
     * If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that
     * Cameron bought $180, Ryan $250 and George $320.
     *
     * Your program will have to
     * display a line with the name of the person,
     *
     * the amount before the
     * discount,
     * the discount ,
     * and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper.
     *
     * Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //walk through code. this is much better and simpler then mine.
shoppers.forEach(function(shopper){
    console.log("Shopper: " + shopper.name);
    console.log("amount before discount: $" + shopper.amount);
    if(shopper.amount > 200){
        console.log("Discount amount is 12%: " );
        shopper.amount = shopper.amount - (shopper.amount * .12)
    console.log("Amount after discount $" + shopper.amount);
    }
    console.log("Final total: $" + shopper.amount)
})
// my code below
    // function discountPrice(shoppers) {
    //     shoppers.forEach(function(shopper) {
    //         //console.log(shopper);
    //         if (shopper.amount > 200) {
    //             let discount = (shopper.amount * 0.12).toFixed(2);
    //             console.log(shopper.name + " you spent $" + shopper.amount + " today.You qualify for a 12% discount your new total is $" + (shopper.amount - discount) + ".")
    //         } else {
    //             console.log(shopper.name + " Your total today is: $" + shopper.amount);
    //         }
    //         console.log(shopper)
    //     });
    // }
    //
    // console.log(discountPrice(shoppers));




    /** TODO:4
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "In search of lost time",
        author: { firstName:"Marcel",
            lastName: "Proust" }
        },
        {title: "Ulysses" ,
        author: {firstName:"James",
        lastName: "Joyce"}
        },
        {title: "Moby Dick",
        author: {firstName: "Herman",
        lastName: "Melville"}
        },
        {title:"War and Peace",
        author:{firstName: "Leo",
        lastName: "Tolstoy"}
        },
        {title:"The adventures of Huckleberry Finn",
        author:{firstName:"Mark",
        lastName: "Twain"}
        }
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName)

    /**
     * TODO:5
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
function loopBook(array){
    for (let x = 0; x < array.length; x++){
        let book = array[x];
        console.log("Book # " + (x + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName +" " + book.author.lastName);
    }
    }
    loopBook(books);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, authorfirstName, authorlastName, array){

    }

})();
