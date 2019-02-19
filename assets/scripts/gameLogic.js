'use strict'
require('./app.js')
//
//
const gameOver = () => {
  // const index0 = $('#0')
  //
  // const index1 = $('#1')
  //
  // const index2 = $('#2')
  //
  // const index3 = $('#3')
  //
  // const index4 = $('#4')
  //
  // const index5 = $('#5')
  //
  // const index6 = $('#6')
  //
  // const index7 = $('#7')
  //
  // const index8 = $('#8')

  let arrayOutcome = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8')]

  let playerOneWin = false
  let playerTwoWin = false
  const draw = true

  if ((arrayOutcome[1] && arrayOutcome[2] && arrayOutcome[3]) === xVal || (arrayOutcome[1] && arrayOutcome[2] && arrayOutcome[3]) === oVal) {
    playerOneWin = true
    console.log('Player1 wins')
    alert('P1 wins')

  }
}

module.exports = {
gameOver
}
