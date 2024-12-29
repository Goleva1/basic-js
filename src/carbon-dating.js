const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Преобразуем sampleActivity в число
  const activity = parseFloat(sampleActivity);

  // Проверяем, что sampleActivity является строкой, activity - конечное число, и находится в допустимом диапазоне
  if (
    typeof sampleActivity !== 'string' ||
    !Number.isFinite(activity) ||
    activity <= 0 ||
    activity > MODERN_ACTIVITY
  ) {
    return false;
  }

  // Вычисляем константу распада
  const decayConstant = Math.LN2 / HALF_LIFE_PERIOD;

  // Вычисляем возраст
  const age = Math.log(MODERN_ACTIVITY / activity) / decayConstant;

  // Возвращаем округленный возраст
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
