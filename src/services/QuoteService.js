// import Axios from 'axios'

// const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
// const apiUrl = 'https://talaikis.com/api/quotes/random/'

// file currently has a minimum of 23 and maximum of 208
const quotes = require('../assets/quotes.json')
const spaceRegex = /\s/g

function getExtremeValues () {
  var min = Number.MAX_VALUE
  var max = Number.MIN_VALUE
  quotes.forEach(function (value) {
    let length = value.quoteText.length
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
  var quote = null
  do {
    let count = quotes.length
    let randomInt = getRandomInt(0, count)
    quote = quotes[randomInt].quoteText

    // Replace spaces
    if (removeSpaces) {
      quote = quote.replace(spaceRegex, '')
    }
    console.log(quote.length)
  } while (quote.length < min || max < quote.length)

  return quote
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
