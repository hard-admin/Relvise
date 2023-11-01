'use scrict';
/* let numberOfFilms = prompt('Сколько фильмов вы уже смотрели?');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};
const a = prompt('Один из последних просмотреных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотреных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

 */

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	geners: [],
	privat: false
};



function rememberMtFilms() {
	for (i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотреных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');


		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('Done');
		}
		else {
			console.log('Error');
			i--;
		}
	}
}
rememberMtFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	}
	else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы класический зритель');
	}

	else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	}
	else {
		console.log('Произошла ошибка');

	}
}
detectPersonalLevel();


console.log(personalMovieDB);