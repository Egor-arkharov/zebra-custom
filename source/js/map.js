'use strict';

const PREFIX = {
  MAP: `map-`,
  BANNER: `map__banner--`,
  BUTTON: `btn-`,
  TEXT: `text-`
}

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

        const countryName = btn.id.replace(PREFIX.BUTTON, ``);

        const countryBtn = countries.querySelector(`#${PREFIX.BUTTON + countryName}`);
        const countryText = countries.querySelector(`#${PREFIX.TEXT + countryName}`);

        countryBtn.classList.toggle(CLASS_BTN_ACTIVE);
        countryText.classList.toggle(CLASS_HIDDEN);

        changeMap(countryName)
      })
    }

    return;
  }

  const countryBtn = countries.querySelector(`#${PREFIX.BUTTON + country}`)
  const countryText = countries.querySelector(`#${PREFIX.TEXT + country}`);

  countryBtn.classList.toggle(CLASS_BTN_ACTIVE);
  countryText.classList.toggle(CLASS_HIDDEN);
};


const changeMap = function (country) {
  if (!country) {
    for (let country of mapCountries) {
      country.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        clearMap();

        const countryName = country.id.replace(PREFIX.MAP, ``);

        const countryOnMap = map.querySelector(`#${PREFIX.MAP + countryName}`);
        const countryBanner = map.querySelector(`.${PREFIX.BANNER + countryName}`);

        countryOnMap.classList.toggle(CLASS_COUNTRY_ACTIVE);
        countryBanner.classList.toggle(CLASS_HIDDEN);

        changeText(countryName);
      })
    }

    return;
  }

  const countryOnMap = map.querySelector(`#${PREFIX.MAP + country}`)
  const countryBanner = map.querySelector(`.${PREFIX.BANNER + country}`);

  countryOnMap.classList.toggle(CLASS_COUNTRY_ACTIVE)
  countryBanner.classList.toggle(CLASS_HIDDEN);
};

changeText();
changeMap();
