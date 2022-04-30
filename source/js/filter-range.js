const scaleElement = document.querySelector('.scale');
const barElement = document.querySelector('.bar');
const thumbMin = document.querySelector('.toggle-min');
const thumbMax = document.querySelector('.toggle-max');
const inputStart = document.querySelector('.price-lable-min');
const inputEnd = document.querySelector('.price-lable-max');
const minValue = Number(inputStart.min);
const maxValue = Number(inputStart.max);
const form = document.querySelector('.side-filter__form');

const getCoords = (element) => {
  let coords = element.getBoundingClientRect();
  return {
    top: coords.top + window.pageYOffset,
    left: coords.left + window.pageXOffset,
    leftX: coords.left,
    rigth: coords.left + window.pageXOffset + coords.width,
    bottom: coords.top + window.pageYOffset + coords.height,
    width: coords.width
  }
};

form.addEventListener('keydown', (evt) => {
  if (evt.keyCode == 13) {
    evt.preventDefault();
  }
  console.log(22);
});

const getInitialValues = () => {
  const coordsThumbMin = getCoords(thumbMin);
  const coordsThumbMax = getCoords(thumbMax);
  const coordsSliderElem = getCoords(scaleElement);

  let positionThumbMin = (inputStart.value - minValue) / (maxValue - minValue) * (coordsSliderElem.width - coordsThumbMin.width * 2);
  thumbMin.style.left = positionThumbMin + 'px';
  barElement.style.left = positionThumbMin + 'px';
  let positionThumbMax = (inputEnd.value - minValue) / (maxValue - minValue) * (coordsSliderElem.width - coordsThumbMax.width * 2) + coordsThumbMin.width;
  thumbMax.style.left = positionThumbMax + 'px';
  barElement.style.width = positionThumbMax - positionThumbMin + 'px';
}

const onClickInputStart = () => {
  var coordsThumbMin = getCoords(thumbMin);
  var coordsThumbMax = getCoords(thumbMax);
  const coordsSliderElem = getCoords(scaleElement);

  const rigthEdge = coordsThumbMax.leftX - coordsThumbMin.width - coordsSliderElem.leftX;
  const leftEdge = 0;
  let maxValueCurrent = inputEnd.value;
  inputStart.max = maxValueCurrent;
  let position = (inputStart.value - minValue) / (maxValue - minValue) * (coordsSliderElem.width - coordsThumbMin.width * 2);
  if (position < leftEdge) {
    position = leftEdge;
    inputStart.value = minValue;
  } else if (position > rigthEdge) {
    position = rigthEdge;
    inputStart.value = inputEnd.value;
  }
  thumbMin.style.left = position + 'px';
  barElement.style.left = position + 'px';
  barElement.style.width = coordsThumbMax.left - position - coordsSliderElem.leftX + 'px';
};

const onClickInputEnd = () => {
  var coordsThumbMin = getCoords(thumbMin);
  var coordsThumbMax = getCoords(thumbMax);
  const coordsSliderElem = getCoords(scaleElement);

  var rigthEdge = coordsSliderElem.rigth - coordsSliderElem.leftX - coordsThumbMax.width;
  var leftEdge = coordsThumbMin.rigth - coordsSliderElem.leftX;

  let position = (inputEnd.value - minValue) / (maxValue - minValue) * (coordsSliderElem.width - coordsThumbMax.width * 2) + coordsThumbMin.width;
  if (position < leftEdge) {
    position = leftEdge;
    inputEnd.value = inputStart.value;
  } else if (position > rigthEdge) {
    position = rigthEdge;
    inputEnd.value = maxValue;
  }
  thumbMax.style.left = position + 'px';
  barElement.style.width = position - coordsThumbMin.left + coordsSliderElem.leftX + 'px';
};

const moveRangeThumb = (thumb, evt) => {
  var coordsThumbMin = getCoords(thumbMin);
  var coordsThumbMax = getCoords(thumbMax);
  const coordsSliderElem = getCoords(scaleElement);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);

  thumb.ondragstart = function () {
    return false;
  }

  function onMouseMove(e) {
    if (e.touches === undefined) {
      var positionClick = e.clientX;
      var startTouch = evt.pageX;
    } else {
      var positionClick = e.targetTouches[0].clientX;
      var startTouch = evt.targetTouches[0].clientX;
    }

    if (thumb === thumbMin) {
      var newThumbPosition = positionClick - coordsSliderElem.leftX - (startTouch - coordsThumbMin.left);
      var rigthEdge = coordsThumbMax.leftX - coordsThumbMax.width - coordsSliderElem.leftX;
      var leftEdge = 0;
    } else {
      var newThumbPosition = positionClick - coordsSliderElem.leftX - (startTouch - coordsThumbMax.left);
      var rigthEdge = coordsSliderElem.rigth - coordsSliderElem.leftX - coordsThumbMax.width;
      var leftEdge = coordsThumbMin.rigth - coordsSliderElem.leftX;
    }

    if (newThumbPosition < leftEdge) {
      newThumbPosition = leftEdge;
    } else if (newThumbPosition > rigthEdge) {
      newThumbPosition = rigthEdge;
    }

    thumb.style.left = newThumbPosition + 'px';

    if (thumb === thumbMin) {
      barElement.style.left = newThumbPosition + 'px';
      barElement.style.width = coordsThumbMax.left - newThumbPosition - coordsSliderElem.leftX + 'px';
      inputStart.value = (((newThumbPosition) / (coordsSliderElem.width - coordsThumbMin.width * 2) * (maxValue - minValue) / 100).toFixed() * 100) + minValue;
    } else {
      barElement.style.width = newThumbPosition - coordsThumbMin.left + coordsSliderElem.leftX + 'px';
      inputEnd.value = ((newThumbPosition - coordsThumbMin.width) / (coordsSliderElem.width - coordsThumbMin.width * 2) * (maxValue - minValue) / 100).toFixed() * 100 + minValue;
    }
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchend', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
  }
}

const changeRange = () => {
  thumbMin.addEventListener('mousedown', (evt) => { moveRangeThumb(thumbMin, evt) });
  thumbMin.addEventListener('touchstart', (evt) => { moveRangeThumb(thumbMin, evt) });

  thumbMax.addEventListener('mousedown', (evt) => { moveRangeThumb(thumbMax, evt) });
  thumbMax.addEventListener('touchstart', (evt) => { moveRangeThumb(thumbMax, evt) });

  inputEnd.addEventListener('change', onClickInputEnd);
  inputEnd.addEventListener('keydown', (evt) => {
    if (evt.keyCode == 13) {
      onClickInputEnd();
    }
  });

  inputStart.addEventListener('change', onClickInputStart);
  inputStart.addEventListener('keydown', (evt) => {
    if (evt.keyCode == 13) {
      onClickInputStart();
    }
  });
}


export { changeRange, getInitialValues };
