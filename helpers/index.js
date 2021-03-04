export const divisibleFieldRegex = /[^0-9,]/g

export function isArray(array) {
  if (!Array.isArray(array)) {
    console.error('The value is invalid, must be an array')
    return false
  }

  return true
}

export function buildNumbersArray(array, separator) {
  return array.split(separator).filter(item => {
    if (!isNaN(item))
      return parseInt(item)
  })
}

export function isDivisibleForNumbers(value, numbers) {
  let isDivisible = false

  numbers.forEach(item => {
    if (value % item === 0)
      isDivisible = true
  });

  return isDivisible
}

export function sumValues(value, divisibleBy) {
  let sum = 0;

  if (!isArray(divisibleBy))
    return false;

  for (let i = 0; i < value; i++) {
    if (isDivisibleForNumbers(i, divisibleBy))
      sum += i
  }

  return sum;
}

