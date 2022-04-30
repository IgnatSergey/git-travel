var buttonLike = document.querySelectorAll('.catalog__card-like');

const onButtonLikeClick = () => {
  buttonLike.forEach((element) => {
    element.addEventListener('click', function () {
      if (element.classList.contains('catalog__card-like--active')) {
        element.classList.remove('catalog__card-like--active');
      } else {
        element.classList.add('catalog__card-like--active');
      }
    });
  });
}
export {onButtonLikeClick};
