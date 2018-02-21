const fetch = require('node-fetch');
const apiKeys = require("./api_keys.js").apiKeys;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
});

console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = (millisec) => new Promise((resolve, reject) => setTimeout(resolve, millisec));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// Create a function that accepts a github username, and returns a promise that resolves with the
//     date of the last commit that user made. Reference the github api documentation to achieve this.


function gitCommit(username) {
    let req = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': apiKeys.GITHUB}});
    req.then(response => {
        response.json().then( data => {
            let pushEvent = data.filter((n) => n.type == "PushEvent")[0];
            console.log(pushEvent.created_at);
        });
    });
    req.catch( response => console.log(response));
}

gitCommit("alyxanhscott");