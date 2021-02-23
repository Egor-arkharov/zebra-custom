'use strict';

const CLASS_HIDDEN = `visually-hidden`;
const CLASS_BTN_ACTIVE = `countries__button--active`;
const CLASS_COUNTRY_ACTIVE = `country--active`;

const countries = document.querySelector(`.countries`);
const countriesButtons = countries.querySelectorAll(`.countries__button`);
const countriesTexts = countries.querySelectorAll(`.countries__text`);

const map = document.querySelector(`.map`)
const mapCountries = map.querySelectorAll(`path[id^="map-"]`);
const mapBanners = map.querySelectorAll(`.map__banner`)

const clearMap = function () {
  countriesButtons.forEach(el => {
    el.classList.remove(CLASS_BTN_ACTIVE);
    el.blur();
  });
  countriesTexts.forEach(el => el.classList.add(CLASS_HIDDEN));
  mapCountries.forEach(el => el.classList.remove(CLASS_COUNTRY_ACTIVE));
  mapBanners.forEach(el => el.classList.add(CLASS_HIDDEN));
};

const changeText = function (country) {
  if (!country) {
    for (let btn of countriesButtons) {
      btn.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        clearMap()

        const countryName = btn.id.slice(4);

        const countryBtn = countries.querySelector(`#btn-${countryName}`);
        const countryText = countries.querySelector(`#text-${countryName}`);

        countryBtn.classList.toggle(CLASS_BTN_ACTIVE);
        countryText.classList.toggle(CLASS_HIDDEN);

        changeMap(countryName)
      })
    }

    return;
  }

  const countryBtn = countries.querySelector(`#btn-${country}`)
  const countryText = countries.querySelector(`#text-${country}`);

  countryBtn.classList.toggle(CLASS_BTN_ACTIVE);
  countryText.classList.toggle(CLASS_HIDDEN);
};


const changeMap = function (country) {
  if (!country) {
    for (let country of mapCountries) {
      country.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        clearMap();

        const countryName = country.id.slice(4);

        const countryOnMap = map.querySelector(`#map-${countryName}`);
        const countryBanner = map.querySelector(`.map__banner--${countryName}`);

        countryOnMap.classList.toggle(CLASS_COUNTRY_ACTIVE);
        countryBanner.classList.toggle(CLASS_HIDDEN);

        changeText(countryName);
      })
    }

    return;
  }

  const countryOnMap = map.querySelector(`#map-${country}`)
  const countryBanner = map.querySelector(`.map__banner--${country}`);

  countryOnMap.classList.toggle(CLASS_COUNTRY_ACTIVE)
  countryBanner.classList.toggle(CLASS_HIDDEN);
};

changeText();
changeMap();
