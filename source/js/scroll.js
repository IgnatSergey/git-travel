import "./simplebar.min.js";

const scrollButtonExcursionsNext = document.querySelector('.slider__excursions-button-leaf-next');
const scrollButtonExcursionsBack = document.querySelector('.slider__excursions-button-leaf-back');
const scrollExcursionsContainer = new SimpleBar(document.querySelector('.popular-excursions__scroll-container'));
const scrollExcursionsBar = scrollExcursionsContainer.getScrollElement();

const scrollButtonReviewsNext = document.querySelector('.slider__reviews-button-leaf-next');
const scrollButtonReviewsBack = document.querySelector('.slider__reviews-button-leaf-back');
const scrollReviewsContainer = new SimpleBar(document.querySelector('.popular-reviews__scroll-container'));
const scrollReviewsBar = scrollReviewsContainer.getScrollElement();

const SCROLL_STEP = 100;

const onScrollSliderClick = (scrollButtonNext, scrollButtonBack, scrollBar) => {
  scrollButtonNext.addEventListener('click', function () {
    scrollBar.scrollBy({
      left: scrollBar.scrollLeft + SCROLL_STEP,
      behavior: "smooth"
    });
  });

  scrollButtonBack.addEventListener('click', function () {
    scrollBar.scrollTo({
      left: scrollBar.scrollLeft - SCROLL_STEP,
      behavior: "smooth"
    });
  });

  scrollBar.addEventListener('scroll', function () {
    if (scrollBar.scrollWidth <= Math.ceil(scrollBar.scrollLeft + scrollBar.clientWidth)) {
      scrollButtonNext.classList.remove('slider__button--active');
    }
    else if (scrollBar.scrollLeft === 0) {
      scrollButtonBack.classList.remove('slider__button--active');
    }
    else {
      scrollButtonBack.classList.add('slider__button--active');
      scrollButtonNext.classList.add('slider__button--active');
    }
  });
}

onScrollSliderClick(scrollButtonExcursionsNext, scrollButtonExcursionsBack, scrollExcursionsBar);
onScrollSliderClick(scrollButtonReviewsNext, scrollButtonReviewsBack, scrollReviewsBar);

