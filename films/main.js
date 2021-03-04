import {films} from '../data/films.js';

function getIdFromUrl(url) {
    const foundId = url.charAt(url.length - 2);
    return parseInt(foundId);
}

for(let i = 0; i < films.length; i++) {
    const foundFilm = films.find(film => getIdFromUrl(film.url) === (i + 1));
    console.log(foundFilm);
}