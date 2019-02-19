'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
require('./events.js')
require('./api.js')
require('./gameLogic.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const xVal = 'X'
  const oVal = 'O'



  let click = 0

  let clickBox0 = 0
  let clickBox1 = 0
  let clickBox2 = 0
  let clickBox3 = 0
  let clickBox4 = 0
  let clickBox5 = 0
  let clickBox6 = 0
  let clickBox7 = 0
  let clickBox8 = 0
  const outcome = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ]

  const gameOver = () => {
    const index0 = outcome[0]
    const index1 = outcome[1]
    const index2 = outcome[2]
    const index3 = outcome[3]
    const index4 = outcome[4]
    const index5 = outcome[5]
    const index6 = outcome[6]
    const index7 = outcome[7]
    const index8 = outcome[8]

    // 0  1  2
    // 3  4  5
    //   6  7  8

    if ((index0 === xVal && index1 === xVal && index2 === xVal) || (index3 === xVal && index4 === xVal && index5 === xVal) || (index6 === xVal && index7 === xVal && index8 === xVal)) {
      return true
    } else if ((index0 === oVal && index1 === oVal && index2 === oVal) || (index3 === oVal && index4 === oVal && index5 === oVal) || (index6 === oVal && index7 === oVal && index8 === oVal)) {
      return true
    } else if ((index0 === xVal && index3 === xVal && index6 === xVal) || (index1 === xVal && index4 === xVal && index7 === xVal) || (index2 === xVal && index5 === xVal && index8 === xVal)) {
      return true
    } else if ((index0 === oVal && index3 === oVal && index6 === oVal) || (index1 === oVal && index4 === oVal && index7 === oVal) || (index2 === oVal && index5 === oVal && index8 === oVal)) {
      return true
    } else if ((index0 === xVal && index4 === xVal && index8 === xVal) || (index2 === xVal && index4 === xVal && index6 === xVal)) {
      return true
    } else if ((index0 === oVal && index4 === oVal && index8 === oVal) || (index2 === oVal && index4 === oVal && index6 === oVal)) {
      return true
    } else {
      return false
    }
  }

  $('#0').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox0 < 1) {
      $('#0').text(xVal)
      console.log('click')
      outcome.splice(0, 1, xVal)

      console.log(outcome)
      $('#0').css('background-color', 'red')

      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox0++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox0 < 1) {
      $('#0').text(oVal)
      console.log('click')
      outcome.splice(0, 1, oVal)
      console.log(outcome)
      $('#0').css('background-color', 'blue')

      if (gameOver(outcome) === true) {
        alert('Player1 Wins')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox0++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })

  $('#1').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox1 < 1) {
      $('#1').text(xVal)
      console.log('click')
      outcome.splice(1, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }

      clickBox1++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox1 < 1) {
      $('#1').text(oVal)
      console.log('click')
      outcome.splice(1, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }

      clickBox1++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })
  $('#2').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox2 < 1) {
      $('#2').text(xVal)
      console.log('click')
      outcome.splice(2, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox2++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox2 < 1) {
      $('#2').text(oVal)
      console.log('click')
      outcome.splice(2, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox2++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })

  $('#3').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox3 < 1) {
      $('#3').text(xVal)
      console.log('click')
      outcome.splice(3, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox3++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox3 < 1) {
      $('#3').text(oVal)

      console.log('click')
      outcome.splice(3, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }

      clickBox3++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })

  $('#4').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox4 < 1) {
      $('#4').text(xVal)
      console.log('click')
      outcome.splice(4, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox4++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox4 < 1) {
      $('#4').text(oVal)
      console.log('click')
      outcome.splice(4, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox4++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })
  $('#5').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox5 < 1) {
      $('#5').text(xVal)
      console.log('click')
      outcome.splice(5, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox5++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox5 < 1) {
      $('#5').text(oVal)
      console.log('click')
      outcome.splice(5, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox5++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })

  $('#6').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox6 < 1) {
      $('#6').text(xVal)
      console.log('click')
      outcome.splice(6, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox6++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox6 < 1) {
      $('#6').text(oVal)
      console.log('click')
      outcome.splice(6, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox6++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })

  $('#7').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox7 < 1) {
      $('#7').text(xVal)
      console.log('click')
      outcome.splice(7, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }


      clickBox7++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox7 < 1) {
      $('#7').text(oVal)
      console.log('click')
      outcome.splice(7, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }


      clickBox7++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })
  $('#8').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox8 < 1) {
      $('#8').text(xVal)
      console.log('click')
      outcome.splice(8, 1, xVal)
      console.log(outcome)
      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        alert('Player2 wins!')
        $('#playerMove').text('Player2 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player1 to move')
      }
      clickBox8++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox8 < 1) {
      $('#8').text(oVal)
      console.log('click')
      outcome.splice(8, 1, oVal)
      console.log(outcome)
      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        alert('Player1 wins!')
        $('#playerMove').text('Player1 Wins! Click button to reset')
      } else {
        $('#playerMove').text('Player2 to move')
      }





      clickBox8++
      click++
    } else {
      console.log('error')
      alert('error')
    }
  })
})
