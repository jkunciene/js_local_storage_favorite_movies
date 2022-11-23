// duota duomenu struktura js modulyje data.js
// sukurti funkcionaluma, kuris:
//patikrina, ar local storage dar nera favorite_movies
//jei nera sukuria masyva favorite_movies
//gauti pagal ID filmo title is data.js failo
//irasyti i local storage favorite_movies pasirinkto filmo ID ir Title
// sukurti funkcija, kuri gali:
//gauti reiksmes is local storage i konsole apie user'io filmus itrauktus i favoritu sarasa
// sukurti funkcija, kuri gali:
//istrinti nurodyta filma pagal ID is local storage favorite_movies masyvo

import data from './data.js'

// gauti pagal ID filmo title is data.js failo
const getMovieFromFile = (movieId) => {
    const favorite_movie = data.find(movie => movie.id == movieId);
    return favorite_movie
}
console.log(getMovieFromFile(436270));
console.log(getMovieFromFile(829280));

//irasyti i local storage favorite_movies pasirinkto filmo ID ir Title
const setFavoritMovie = () => {
    // sukurti funkcionaluma, kuris:
    //patikrina, ar local storage dar nera favorite_movies
    //jei nera sukuria masyva favorite_movies
    const items = (() => {
        const fieldValue = localStorage.getItem('favorite_movies');

        return fieldValue === null
            ? []
            : JSON.parse(fieldValue);

    })();

    const my_favorite_movie = getMovieFromFile(616037);

    const new_movie = {
        movieId: my_favorite_movie.id,
        movieTitle: my_favorite_movie.title,

    }
    items.push(new_movie);

    localStorage.setItem('favorite_movies', JSON.stringify(items));
}
setFavoritMovie();
//localStorage.clear();

const getDataFromLocalStorage = (id) => {
    let data = JSON.parse(localStorage.getItem('favorite_movies'));
    return data.find(movie => movie.movieId === id);
}
console.log(getDataFromLocalStorage(829280));


const deleteDataFromLocalStorage = (id) => {
    let data = JSON.parse(localStorage.getItem('favorite_movies'));
    const index = data.findIndex(movie => movie.movieId === id);

    if (index > -1) {
        data.splice(index, 1);
    }
    localStorage.setItem('favorite_movies', JSON.stringify(data));
}
//deleteDataFromLocalStorage(436270);