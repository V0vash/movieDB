/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "qq"
    ]
};

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item =>{
    item.remove();
});

const genre = document.querySelector('.promo__genre');

genre.innerHTML="ДРАМА";

const promoBg = document.querySelector('.promo__bg');

promoBg.style.background = "url('../img/bg.jpg')";

let films = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort();

console.log(films);

for(let i = 0; i <= movieDB.movies.length; i++){
    films[i].innerText = `${i+1}. ${movieDB.movies[i]}`;
}


// const movieList = document.querySelector('.promo__interactive-list');

// movieDB.movies.sort();
// movieList.innerHTML='';
// movieDB.movies.forEach((film,i)=>{
//     movieList.innerHTML += `
//     <li class="promo__interactive-item"> ${i+1}. ${movieDB.movies[i]}
//     <div class="delete"></div>
// </li>`;
// }
// )

