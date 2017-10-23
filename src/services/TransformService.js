
const leetmap = {
  'A': '4',
  'a': '@',
  'B': '8',
  'b': '6',
  'E': '3',
  'e': '3',
  'G': '&',
  'g': '9',
  'H': '#',
  'h': '#',
  'L': '1',
  'l': '1',
  'O': '0',
  'o': '0',
  's': '$',
  'S': '5',
  'T': '7',
  't': '7',
  'Z': '2',
  'z': '2'
}

const punctuationRegex = /[.,?!;:']/g

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min  // The maximum is exclusive and the minimum is inclusive
}

function getRandomBool (randomPercent) {
  if (randomPercent > 1 || randomPercent <= 0) {
    throw Error("Argument 'randomPercent' must be greater than zero and less than or equal to one")
  }

  let max = Math.floor(1 / randomPercent)
  return getRandomInt(0, max) === 0
}

// Maps given character to a leet character if possible
function mapToLeet (char) {
  return (leetmap[char]) ? leetmap[char] : char
}

// Randomly assigns leet character to given character if possible
function randomLeet (char, randomPercent = 0.125) {
  return getRandomBool(randomPercent) ? mapToLeet(char) : char
}

// Capitalizes first letter of given text
function capitalizeFirstLetter (text) {
  return text[0].toUpperCase() + text.slice(1)
}

// Random capitalize
function randomCapitalize (char, randomPercent = 0.125) {
  return getRandomBool(randomPercent) ? char.toUpperCase() : char
}

// Removes all punctuation
function removePunctuation (char) {
  return char.replace(punctuationRegex, '')
}

// Randomizes punctuation
// function randomizePunctuation (char) {
//   return
// }

// Changes period to ? or ! at about 50/50 respectively
function swapPeriod (char) {
  if (char === '.') {
    let randomInt = getRandomInt(0, 2)
    return (randomInt === 0) ? '?' : '!'
  }

  return char
}

export default {
  randomCapitalize,
  swapPeriod,
  removePunctuation,
  capitalizeFirstLetter,
  randomLeet,
  mapToLeet
}
