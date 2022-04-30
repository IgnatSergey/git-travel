import { getInitialValues } from './filter-range.min.js';

var rangeFilter = document.querySelector('.side-filter__input-container-price');
var filterButtonPrice = document.querySelector('.side-filter__fieldset-button-price');
var listMenAmount = document.querySelector('.side-filter__input-container-men-amount');
var filterButtonMenAmount = document.querySelector('.side-filter__fieldset-button-men-amount');
var listPlaces = document.querySelector('.side-filter__input-container-place');
var filterButtonPlace = document.querySelector('.side-filter__fieldset-button-place');

const openFilterDivision = (button, division, cb) => {
  button.addEventListener('click', function () {
    if (division.classList.contains('side-filter__input-container--closed')) {
      division.classList.remove('side-filter__input-container--closed');
      division.classList.add('side-filter__input-container--opened');
    } else {
      division.classList.add('side-filter__input-container--closed');
      division.classList.remove('side-filter__input-container--opened');
    }
    cb();
  });
};

const openFilter = () => {
  openFilterDivision(filterButtonPrice, rangeFilter, getInitialValues);
  openFilterDivision(filterButtonMenAmount, listMenAmount, () => { });
  openFilterDivision(filterButtonPlace, listPlaces, () => { });
}

export { openFilter };
