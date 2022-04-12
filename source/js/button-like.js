var buttonLike = document.querySelectorAll('.catalog__card-like');

buttonLike[1].addEventListener('click', function () {
  if (buttonLike.classList.contains('catalog__card-like--active')) {
    buttonLike.classList.remove('catalog__card-like--active');
  } else {
    buttonLike.classList.add('catalog__card-like--active');
  }
  console.log(1);
});
