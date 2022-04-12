var rangeFilter = document.querySelector('.side-filter__input-container-price');
var filterButtonPrice = document.querySelector('.side-filter__fieldset-button-price');
var listMenAmount = document.querySelector('.side-filter__input-container-men-amount');
var filterButtonMenAmount = document.querySelector('.side-filter__fieldset-button-men-amount');
var listPlace = document.querySelector('.side-filter__input-container-place');
var filterButtonPlace  = document.querySelector('.side-filter__fieldset-button-place');

rangeFilter.classList.remove('side-filter__input-container--nojs');

filterButtonPrice.addEventListener('click', function () {
  if (rangeFilter.classList.contains('side-filter__input-container--closed')) {
    rangeFilter.classList.remove('side-filter__input-container--closed');
    rangeFilter.classList.add('side-filter__input-container--opened');
  } else {
    rangeFilter.classList.add('side-filter__input-container--closed');
    rangeFilter.classList.remove('side-filter__input-container--opened');
  }
});

listMenAmount.classList.remove('side-filter__input-container--nojs');

filterButtonMenAmount.addEventListener('click', function () {
  if (listMenAmount.classList.contains('side-filter__input-container--closed')) {
    listMenAmount.classList.remove('side-filter__input-container--closed');
    listMenAmount.classList.add('side-filter__input-container--opened');
  } else {
    listMenAmount.classList.add('side-filter__input-container--closed');
    listMenAmount.classList.remove('side-filter__input-container--opened');
  }
});

listPlace.classList.remove('side-filter__input-container--nojs');

filterButtonPlace.addEventListener('click', function () {
  if (listPlace.classList.contains('side-filter__input-container--closed')) {
    listPlace.classList.remove('side-filter__input-container--closed');
    listPlace.classList.add('side-filter__input-container--opened');
  } else {
    listPlace.classList.add('side-filter__input-container--closed');
    listPlace.classList.remove('side-filter__input-container--opened');
  }
});
