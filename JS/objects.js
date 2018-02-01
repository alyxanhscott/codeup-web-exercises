(function() {
    "use strict";

    // ------------------------>>
    //LECTURE NOTES, RYAN
    // ------------------------>>

    // What is an object?
    //     bundle of state and behavior
    // a single expression that holds other expressions in key=>value pairs
    // a big ol' bag of variables/functions that is itself a single variable (compound)
    //
    // Why do we use objects?
    //     to have (related) state + behavior together in one variable
    //
    // How to we make an object?
    // var classRoom = {
    //     numberOfStudents: function() {
    //         returns this.studentNames.length;
    //     },
    //     studentNames: [],
    //     cohortName: "Teddy",
    //     currentTopic: "JS Arrays",
    //     changeTopic: function(newTopic) {
    //         this.currentTopic = newTopic;
    //     },
    //     location: "600 Navarro St. San Antonio, TX 78205",
    //     languagesCoveredSoFar: ["HTML", "CSS"],
    //     addLanguage: function(language) {
    //         this.languagesCoveredSoFar.push(language);
    //     }
    //     addStudent: function(name) {
    //         this.studentNames.push(name);
    //     }
    // };
    //
    // classRoom.addStudent("Bob");
    // classRoom.addLanguage("JavaScript");
    // classRoom.changeTopic("JS objects");

    // ------------------------>>
    //LECTURE NOTES END
    // ------------------------>>


    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Allie",
        lastName: "Scott",
        sayHello: "Hello from "
    };
        // person.firstName = "Allie";
        // person.lastName = "Scott";
        // person.sayHello = "Hello from ";

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello + person.firstName);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function determine() {
        shoppers.forEach(function(e, i) {
            if (isDiscounted(e.amount)) {
                var newTotal = (e.amount - discountAmount(e.amount));
                console.log("Name: " + e.name + ", Amount prior to discount: " + e.amount + ", Discounted Amount " +
                    discountAmount(e.amount) + ", New Total: " + newTotal);
            } else {
                console.log('NO DISCOUNT FOR YOU, ' + e.name + '. YOU ARE THE WORST, ' + e.name + '.');
            }
        })
    }

    function isDiscounted(num) {
        return (num >= 200);
    }

    function discountAmount(num) {
        return (num * .12);
    }
    determine();

    /** TODO:
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
    var books = [
        {
            title: 'The pain of existence. Lul.',
            bookNumber: '# 1',
            author: {
                firstName: "Allie",
                lastName: "Scott"
            }
        },
        {
            title: 'Egg',
            bookNumber: '# 2',
            author: {
                firstName: "Dr.",
                lastName: "Eggman"
            }
        },
        {
            title: 'De Wey.',
            bookNumber: '# 3',
            author: {
                firstName: "Ugandan",
                lastName: "Knuckles"
            }

        },
        {
            title: 'The Book of Nothing.',
            bookNumber: '# 4',
            author: {
                firstName: "No",
                lastName: "No name for you."
            }
        },
        {
            title: 'The Day I Stubbed my Toe: a Haiku',
            bookNumber: '# 5',
            author: {
                firstName: "Everyone,",
                lastName: "Everyone Ever"
            }
        }
    ];

    books.forEach(function(e, i) {
        console.log(e.bookNumber + " Title: " + e.title + " Author: " + e.author.firstName + " " + e.author.lastName);
    });


    /**
     * TODO:
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

    function createBook(title, author) {

    }

})();