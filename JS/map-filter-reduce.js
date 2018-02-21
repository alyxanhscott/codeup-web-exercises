const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


const language = users.filter(n => n.languages.length > 2);
console.log(language);


const email = users.map( (n) => n.email);
console.log(email);

const reduced = users.reduce( (n, {id, name, email, languages}) => n[id] = {name, email, languages}, {} );
console.log(reduced);


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

const fruitFirst = fruits.map( (n) => n[0]);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

const userobj = customers.map( ({name, age}) => {
    return {
        name,
        age,
    }
});

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

const civilServ = customers.filter( ({occupation}) => occupation == "Teacher" || occupation == "Poliice Officers");

// PROBLEM 4 - determine the average age of customers

const avAge = customers.reduce( (n, {age}) => n + age ) / 3;


//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()

