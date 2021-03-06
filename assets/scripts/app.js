'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./auth/events.js')
const api = require('./auth/api.js')
// const exampleEvents = require('./auth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#boxes').hide('click')
  $('#playerMove').hide('click')
  $('#score').hide('click')
  $('#resetButton').hide('click')
  $('#sign-out').hide('click')
  $('#change-password-form').hide('click')

  // exampleEvents.addHandlers()

  // $('#show-all-examples').on('submit', events.onShowExamples)

  const xVal = 'X'
  const oVal = 'O'

  let player1Score = 0
  let player2Score = 0

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

  let player1Win = false
  let player2Win = false
  let draw = true
  const resetValues = () => {
    click = 0

    clickBox0 = 0
    clickBox1 = 0
    clickBox2 = 0
    clickBox3 = 0
    clickBox4 = 0
    clickBox5 = 0
    clickBox6 = 0
    clickBox7 = 0
    clickBox8 = 0
  }

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

    if ((index0 === oVal && index1 === oVal && index2 === oVal) || (index3 === oVal && index4 === oVal && index5 === oVal) || (index6 === oVal && index7 === oVal && index8 === oVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0

      player2Win = true
      draw = false

      return player2Win
    } else if ((index0 === xVal && index1 === xVal && index2 === xVal) || (index3 === xVal && index4 === xVal && index5 === xVal) || (index6 === xVal && index7 === xVal && index8 === xVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0
      player1Win = true
      draw = false

      return player1Win
    } else if ((index0 === oVal && index3 === oVal && index6 === oVal) || (index1 === oVal && index4 === oVal && index7 === oVal) || (index2 === oVal && index5 === oVal && index8 === oVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0
      player2Win = true
      draw = false

      return player2Win
    } else if ((index0 === xVal && index3 === xVal && index6 === xVal) || (index1 === xVal && index4 === xVal && index7 === xVal) || (index2 === xVal && index5 === xVal && index8 === xVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0
      player1Win = true
      draw = false

      return player1Win
    } else if ((index0 === oVal && index4 === oVal && index8 === oVal) || (index2 === oVal && index4 === oVal && index6 === oVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0
      player2Win = true
      draw = false

      return player2Win
    } else if ((index0 === xVal && index4 === xVal && index8 === xVal) || (index2 === xVal && index4 === xVal && index6 === xVal)) {
      // click = -1
      //
      // clickBox0 = 0
      // clickBox1 = 0
      // clickBox2 = 0
      // clickBox3 = 0
      // clickBox4 = 0
      // clickBox5 = 0
      // clickBox6 = 0
      // clickBox7 = 0
      // clickBox8 = 0
      player1Win = true
      draw = false

      return player1Win
    } else {
      draw = true

      return false
    }
  }

  // onClick="document.location.reload(true)" substitute

  const gameReset = (click) => {
    $('#score').html('[ Score = P1:   ' + player1Score + '    P2:     ' + player2Score + ' ]')
    $('#boxes').css('pointer-events', 'auto')

    // document.getElementById('score').innerHTML = 'p1' + score;

    outcome.splice(0, 1, ' ')
    outcome.splice(1, 1, ' ')
    outcome.splice(2, 1, ' ')
    outcome.splice(3, 1, ' ')
    outcome.splice(4, 1, ' ')
    outcome.splice(5, 1, ' ')
    outcome.splice(6, 1, ' ')
    outcome.splice(7, 1, ' ')
    outcome.splice(8, 1, ' ')

    $('#0').text(' ').css('background-color', 'white')
    $('#1').text(' ').css('background-color', 'white')
    $('#2').text(' ').css('background-color', 'white')
    $('#3').text(' ').css('background-color', 'white')
    $('#4').text(' ').css('background-color', 'white')
    $('#5').text(' ').css('background-color', 'white')
    $('#6').text(' ').css('background-color', 'white')
    $('#7').text(' ').css('background-color', 'white')
    $('#8').text(' ').css('background-color', 'white')
    resetValues()

    $('#playerMove').text('[Player1_to_Move]')
  }
  const gameReset2 = (click) => {
    $('#score').html('Score = P1:   ' + player1Score + '    P2:     ' + player2Score)
    $('#boxes').css('pointer-events', 'auto')

    // document.getElementById('score').innerHTML = 'p1' + score;

    outcome.splice(0, 1, ' ')
    outcome.splice(1, 1, ' ')
    outcome.splice(2, 1, ' ')
    outcome.splice(3, 1, ' ')
    outcome.splice(4, 1, ' ')
    outcome.splice(5, 1, ' ')
    outcome.splice(6, 1, ' ')
    outcome.splice(7, 1, ' ')
    outcome.splice(8, 1, ' ')

    $('#0').text(' ').css('background-color', 'white')
    $('#1').text(' ').css('background-color', 'white')
    $('#2').text(' ').css('background-color', 'white')
    $('#3').text(' ').css('background-color', 'white')
    $('#4').text(' ').css('background-color', 'white')
    $('#5').text(' ').css('background-color', 'white')
    $('#6').text(' ').css('background-color', 'white')
    $('#7').text(' ').css('background-color', 'white')
    $('#8').text(' ').css('background-color', 'white')
    resetValues()
    player1Score = 0
    player2Score = 0

    $('#playerMove').text('[Player1_to_Move]')
  }

  $('#resetButton').on('click', gameReset)

  // $('#sign-out').on('click', gameReset2)
  $('#sign-in-form').on('click', gameReset2)

  $('#0').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox0 < 1) {
      $('#0').text(oVal)

      outcome.splice(0, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $('#0').css('background-color', 'red')

      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')

        player2Score++
      } else {
        // $('#playerMove').text('game is a draw')
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
          $('#boxes').css('pointer-events', 'none')
        }
      }
      clickBox0++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox0 < 1) {
      $('#0').text(xVal)

      outcome.splice(0, 1, xVal)

      $('#playerMove').text('[Player2_to_Move]')

      $('#0').css('background-color', 'blue')

      if (gameOver(outcome) === true) {
        alert('Player1 Wins')
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')

        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox0++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })

  $('#1').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox1 < 1) {
      $('#1').text(oVal)
      outcome.splice(1, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')



      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox1++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox1 < 1) {
      $('#1').text(xVal)

      outcome.splice(1, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox1++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })
  $('#2').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox2 < 1) {
      $('#2').text(oVal)

      outcome.splice(2, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox2++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox2 < 1) {
      $('#2').text(xVal)

      outcome.splice(2, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox2++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })

  $('#3').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox3 < 1) {
      $('#3').text(oVal)

      outcome.splice(3, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox3++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox3 < 1) {
      $('#3').text(xVal)

      outcome.splice(3, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox3++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })

  $('#4').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox4 < 1) {
      $('#4').text(oVal)

      outcome.splice(4, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox4++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox4 < 1) {
      $('#4').text(xVal)

      outcome.splice(4, 1, xVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox4++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })
  $('#5').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox5 < 1) {
      $('#5').text(oVal)

      outcome.splice(5, 1, oVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox5++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox5 < 1) {
      $('#5').text(xVal)

      outcome.splice(5, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox5++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })

  $('#6').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox6 < 1) {
      $('#6').text(oVal)

      outcome.splice(6, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox6++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox6 < 1) {
      $('#6').text(xVal)

      outcome.splice(6, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox6++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })

  $('#7').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox7 < 1) {
      $('#7').text(oVal)

      outcome.splice(7, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox7++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox7 < 1) {
      $('#7').text(xVal)

      outcome.splice(7, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox7++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })
  $('#8').on('click', function () {
    if (click < 9 && click % 2 !== 0 && clickBox8 < 1) {
      $('#8').text(oVal)

      outcome.splice(8, 1, oVal)
      $('#playerMove').text('[Player1_to_Move]')

      $(this).css('background-color', 'red')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player2_Wins! Click_Button to reset ]')
        player2Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }
      clickBox8++
      click++
    } else if (click < 9 && click % 2 === 0 && clickBox8 < 1) {
      $('#8').text(xVal)

      outcome.splice(8, 1, xVal)
      $('#playerMove').text('[Player2_to_Move]')

      $(this).css('background-color', 'blue')
      if (gameOver(outcome) === true) {
        $('#boxes').css('pointer-events', 'none')

        $('#playerMove').text('[ Player1_Wins! Click_Button to reset ]')
        player1Score++
      } else {
        if (click === 8) {
          draw = true
          $('#playerMove').text('[ Game was a draw, click to reset! ]')
        }
      }

      clickBox8++
      click++
    } else {
      $('#playerMove').text('error')
    }
  })
})
