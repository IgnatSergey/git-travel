import "./simplebar.min.js";

var scrollButtonExcursionsNext = document.querySelector('.slider__excursions-button-leaf-next');
var scrollButtonExcursionsBack = document.querySelector('.slider__excursions-button-leaf-back');
const scrollExcursionsContainer = new SimpleBar(document.querySelector('.popular-excursions__scroll-container'));
const scrollExcursionsBar = scrollExcursionsContainer.getScrollElement();

var scrollButtonReviewsNext = document.querySelector('.slider__reviews-button-leaf-next');
var scrollButtonReviewsBack = document.querySelector('.slider__reviews-button-leaf-back');
const scrollReviewsContainer = new SimpleBar(document.querySelector('.popular-reviews__scroll-container'));
const scrollReviewsBar = scrollReviewsContainer.getScrollElement();

const SCROLL_STEP = 100;

scrollButtonExcursionsNext.addEventListener('click', function () {
  scrollExcursionsBar.scrollBy({
    left: scrollExcursionsBar.scrollLeft + SCROLL_STEP,
    behavior: "smooth"
  });
  console.log(scrollExcursionsBar.scrollWidth);
  console.log(scrollExcursionsBar.scrollLeft + scrollExcursionsBar.clientWidth);
});

scrollButtonExcursionsBack.addEventListener('click', function () {
  scrollExcursionsBar.scrollTo({
    left: scrollExcursionsBar.scrollLeft - SCROLL_STEP,
    behavior: "smooth"
  });
});

scrollExcursionsBar.addEventListener('scroll', function () {
  if (scrollExcursionsBar.scrollWidth <= Math.ceil(scrollExcursionsBar.scrollLeft + scrollExcursionsBar.clientWidth)) {
    scrollButtonExcursionsNext.classList.remove('slider__button--active');
  }
  else if (scrollExcursionsBar.scrollLeft === 0) {
    scrollButtonExcursionsBack.classList.remove('slider__button--active');
  }
  else {
    scrollButtonExcursionsBack.classList.add('slider__button--active');
    scrollButtonExcursionsNext.classList.add('slider__button--active');
  }
});

scrollButtonReviewsNext.addEventListener('click', function () {
  scrollReviewsBar.scrollBy({
    left: scrollReviewsBar.scrollLeft + SCROLL_STEP,
    behavior: "smooth"
  });
});

scrollButtonReviewsBack.addEventListener('click', function () {
  scrollReviewsBar.scrollTo({
    left: scrollReviewsBar.scrollLeft - SCROLL_STEP,
    behavior: "smooth"
  });
});

scrollReviewsBar.addEventListener('scroll', function () {
  if (scrollReviewsBar.scrollWidth <= Math.ceil(scrollReviewsBar.scrollLeft + scrollReviewsBar.clientWidth)) {
    scrollButtonReviewsNext.classList.remove('slider__button--active');
  }
  else if (scrollReviewsBar.scrollLeft === 0) {
    scrollButtonReviewsBack.classList.remove('slider__button--active');
  }
  else {
    scrollButtonReviewsBack.classList.add('slider__button--active');
    scrollButtonReviewsNext.classList.add('slider__button--active');
  }
});
