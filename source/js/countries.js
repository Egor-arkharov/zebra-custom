'use strict';

const CLASS_HIDDEN = `visually-hidden`;
const CLASS_ACTIVE = `countries__button--active`;

const countries = document.querySelector(`.countries`);
const countriesButtons = countries.querySelectorAll(`.countries__button`);
const countriesTexts = countries.querySelectorAll(`.countries__text`);

const clearClass = function () {
  countriesButtons.forEach(el => {
    el.classList.remove(CLASS_ACTIVE);
    el.blur();
  });
  countriesTexts.forEach(el => el.classList.add(CLASS_HIDDEN));
}

for (let i = 0; i < countriesButtons.length; i++) {
  countriesButtons[i].addEventListener(`click`, function (evt) {
    evt.preventDefault();
    clearClass();
    countriesButtons[i].classList.toggle(CLASS_ACTIVE);
    countriesTexts[i].classList.toggle(CLASS_HIDDEN);
  })
}
