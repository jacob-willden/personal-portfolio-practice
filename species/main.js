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

    let myFigure = document.createElement('figure');
    let myImg = document.createElement('img');
    let myCaption = document.createElement('figcaption');

    myImg.src = `https://starwars-visualguide.com/assets/img/species/${i + 1}.jpg`;
    myCaption.textContent = foundCreature.name;

    myFigure.appendChild(myImg);
    myFigure.appendChild(myCaption);
    document.querySelector('.species-list').appendChild(myFigure);
}