import {species} from '../data/species.js';

function getIdFromUrl(url) {
    let end = url.lastIndexOf('/');
    let start = end - 2;
    if(url.charAt(start) === '/') {
        start++;
    }
    const foundId = url.slice(start, end);
    return parseInt(foundId);
}

for(let i = 0; i < species.length; i++) {
    const foundCreature = species.find(creature => getIdFromUrl(creature.url) === (i + 1));
    const myElement = document.createElement('p');
    myElement.textContent = foundCreature.name;
    document.querySelector('body').appendChild(myElement);
}