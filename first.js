"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const movieName = prompt("Один из последних просмотренных фильмов");
const movieGrade = prompt("На сколько оцените его");

personalMovieDB["movies"][movieName] = movieGrade;

console.log(personalMovieDB);
