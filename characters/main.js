import {people} from '../data/people.js';

function getIdFromUrl(url) {
    const foundId = url.charAt(url.length - 2);
    return parseInt(foundId);
}

for(let i = 0; i < people.length; i++) {
    const foundPerson = people.find(person => getIdFromUrl(person.url) === (i + 1));
    const myElement = document.createElement('p');
    myElement.textContent = foundPerson.name;
    document.querySelector('body').appendChild(myElement);
}