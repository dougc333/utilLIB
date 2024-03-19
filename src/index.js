
var uniqueRandomArray = require('unique-random-array')
var swNames = require(
  './starwars-names.json'
)

function getRandomName(){
  return uniqueRandomArray(swNames)
}

module.exports = {
  all: swNames,
  random:getRandomName()
}