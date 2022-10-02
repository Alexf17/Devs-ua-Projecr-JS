import { searchGenresById } from './genresList';
import ApiFilmoteka from './filmotekaApi';
import { renderFoo } from './renderMarkup';
import img from '../images/filmWrap.jpg';
import pagination from './pagination';
const api = new ApiFilmoteka();
import { cleanerMarkup } from './cleanerMarkup';
import { preloaderRefresh, preloaderRefreshOFF } from './preloader';

import { refs } from './refs';

refs.paginationBox.addEventListener('click', handlerPagination);
let globalCurrentpage = 0;

// функция создания списка фильмов
export async function createMainMarkup(fetchData) {
  const results = await fetchData;
  refs.fetchDataValue = results;
  // получаем массив из елементов 'li' , переводим в строку с помощю join
  const filmCards = results
    .map(
      ({
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<li class="film__item">
        <a class="film__link" id="${id}">
  <div class="film__wrap">
      <img src=${
        poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : img
      } class="film-item__img" alt="${title}" width="300">
  </div>
  <div class="wrap__film>
  <div class="film__title-wrap">
  <h3 class="film__title">${title}</h3>
  </div>
  <div class="film__genres-and-date">
  <p class="film__genres">${
    searchGenresById(genre_ids) ? searchGenresById(genre_ids) : 'Unknown genre'
  }</p>
  <p class="film__release-date">${
    //проверяем через тернарник
    release_date ? new Date(release_date).getFullYear() : 'Nobody know'
  }</p>

   </div>
   </div>
   </a>
   </li>`
    )
    .join('');

  // возвращаем строку
  renderFoo(filmCards, refs.cardListEl);
  
  await pagination(api.pageNumber, api.totalPages);
  return filmCards;
}
// вызываем функцию render
createMainMarkup(api.fetchPopularsFilms());

async function handlerPagination(evt) {
  preloaderRefresh();
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  if (evt.target.textContent === '🡸') {
    api.setPageNumber((globalCurrentpage -= 1));

    const filesFromBackend = await api.fetchPopularsFilmsh();

    cleanerMarkup(cardListEl);
    createMainMarkup(filesFromBackend);

    pagination(api.pageNumber, api.totalPages);
    preloaderRefreshOFF();
    return;
  }
  if (evt.target.textContent === '🡺') {
    api.setPageNumber((globalCurrentpage += 1));
    console.log(api.pageNumber);

    api.getFIlm();
    console.log(api.filmName);
    const filesFromBackend = await api.fetchPopularsFilms();

    cleanerMarkup(cardListEl);
    createMainMarkup(filesFromBackend);

    pagination(api.pageNumber, api.totalPages);
    preloaderRefreshOFF();
    return;
  }
  if (evt.target.textContent === '...') {
    preloaderRefreshOFF();
    return;
  }
  const page = evt.target.textContent;

  api.setPageNumber(Number(page));
  const filesFromBackend = await api.fetchPopularsFilms();

  cleanerMarkup(cardListEl);
  createMainMarkup(filesFromBackend);

  pagination(api.pageNumber, api.totalPages);
  preloaderRefreshOFF();
}
