`use strict`;

const ESCAPE = `Escape`;

const searchInput = document.querySelector(`.top__right-input`);
const searchButton = document.querySelector(`.top__right-button`);
const searchInputClassActive = `top__right-input--active`;

searchButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  if (searchInput.classList.contains(searchInputClassActive)) {
    searchInput.classList.remove(searchInputClassActive);
    searchInput.blur();
  } else {
    searchInput.classList.add(searchInputClassActive);
    searchInput.focus();
  }
});

const onKeyHideInput = function (evt) {
  if (evt.key === ESCAPE) {
    evt.preventDefault();
    searchInput.classList.remove(searchInputClassActive);
  }
};

document.addEventListener(`keydown`, onKeyHideInput);
