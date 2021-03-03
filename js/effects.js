import {
  getIntValue
} from './util.js';

import {
  CONTROL_MAX_VALUE,
  CONTROL_MIN_VALUE,
  CONTROL_STEP,
  CONTROL_DEFAULT_VALUE,
  EffectSliderSettings,
  ImageEffectStyles,
  EFFECT_CLASS_START
} from './constants.js'

const imagePreviewElement = document.querySelector('.img-upload__preview img');
const scaleControlValueElement = document.querySelector('.scale__control--value');

const effectLevelBarElement = document.querySelector('.img-upload__effect-level');
const effectLevelValueElement = document.querySelector('.effect-level__value');

let imageEffect = 'none';
let imageScaleStyle = '';
let imageEffectStyle = '';

const updateStyles = (element, style) => {
  element.style = style;
};

const setPreviewScale = (element, percent) => {
  const scaleValue = percent / 100;
  scaleControlValueElement.value = percent + '%';
  imageScaleStyle = `transform: scale(${scaleValue});`;
  updateStyles(element, imageScaleStyle + imageEffectStyle);
};

const setPreviewDefaultScale = () => {
  setPreviewScale(imagePreviewElement, CONTROL_DEFAULT_VALUE);
};

const scaleUp = () => {
  let number = getIntValue(scaleControlValueElement);
  if ((number + CONTROL_STEP) <= CONTROL_MAX_VALUE) {
    number += CONTROL_STEP;
    setPreviewScale(imagePreviewElement, number);
  }
};

const scaleDown = () => {
  let number = getIntValue(scaleControlValueElement);
  if ((number - CONTROL_STEP) >= CONTROL_MIN_VALUE) {
    number -= CONTROL_STEP;
    setPreviewScale(imagePreviewElement, number);
  }
};

const clearEffect = () => {
  removeEffectClasses();
  effectLevelBarElement.classList.add('hidden');
  imageEffectStyle = '';
  updateStyles(imagePreviewElement, imageScaleStyle + imageEffectStyle);
};

const getEffectList = () => {
  const effectsList = [];
  const effectButtons = document.querySelectorAll('.effects__radio');
  effectButtons.forEach(button => effectsList.push(button.value))
  return effectsList;
};

const removeEffectClasses = () => {
  const effectsList = getEffectList();
  effectsList.forEach((effect) => {
    const effectClassName = EFFECT_CLASS_START + effect;
    imagePreviewElement.classList.toggle(effectClassName, false)
  });
};

const onEffectsChange = (evt) => {
  if (evt.target && evt.target.matches('input[type="radio"]')) {
    removeEffectClasses();
    imageEffect = evt.target.value;
    if (imageEffect === 'none') {
      clearEffect();
      return;
    }
    const effectClass = EFFECT_CLASS_START + imageEffect;
    updateEffectSlider(imageEffect);
    imagePreviewElement.classList.add(effectClass);
    effectLevelBarElement.classList.toggle('hidden', false)
  }
};

const setImageEffectStyle = () => {
  let effectValueName = '';
  if (imageEffect === 'marvin') {
    effectValueName = '%';
  } else if (imageEffect === 'phobos') {
    effectValueName = 'px';
  }
  imageEffectStyle = `filter: ${ImageEffectStyles[imageEffect.toUpperCase()]}(${effectLevelValueElement.value}${effectValueName});`;
  updateStyles(imagePreviewElement, imageScaleStyle + imageEffectStyle);
};

const createEffectSlider = () => {
  noUiSlider.create(effectLevelBarElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: (value) => {
        return parseFloat(value);
      },
    },
  });

  effectLevelBarElement.noUiSlider.on('update', (values, handle) => {
    effectLevelValueElement.value = values[handle];
    setImageEffectStyle();
  });
};

const updateEffectSlider = (imageEffect) => {
  effectLevelBarElement.noUiSlider.updateOptions(EffectSliderSettings[imageEffect.toUpperCase()]);
};

const closeEffectSlider = () => {
  effectLevelBarElement.noUiSlider.destroy();
};

export {
  scaleDown,
  scaleUp,
  setPreviewDefaultScale,
  onEffectsChange,
  clearEffect,
  createEffectSlider,
  closeEffectSlider
};
