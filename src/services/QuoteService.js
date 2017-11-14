// file currently has a minimum of 23 and maximum of 208
const quotes = require('../assets/quotes.json')
const spaceRegex = /\s/g

function getExtremeValues () {
  var min = Number.MAX_VALUE
  var max = Number.MIN_VALUE
  quotes.forEach(function (value) {
    let length = value.length
    if (min > length) {
      min = length
    }
    if (max < length) {
      max = length
    }
  })

  return {min, max}
}

function getQuote (min = 23, max = 50, varyCase = false, removeSpaces = true) {
  var item = null
  do {
    let count = quotes.length
    let randomInt = getRandomInt(0, count)
    item = quotes[randomInt]

    // Replace spaces
    if (removeSpaces) {
      item.password = item.quote.replace(spaceRegex, '')
    } else {
      item.password = item.quote
    }
  } while (item.length < min || max < item.length)

  return item
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min  // The maximum is exclusive and the minimum is inclusive
}

export default {
  get: getQuote,
  getExtremeValues: getExtremeValues
}
