// function () {
//   if (click < 9 && click % 2 !== 0 && clickBox0 < 1) {
//     $('#0').text(xVal)
//     console.log('click')
//     outcome.splice(0, 1, xVal)
//
//     console.log(outcome)
//     $('#0').css('background-color', 'red')
//
//     if (gameOver(outcome) === true) {
//       alert('Player2 wins!')
//       $('#playerMove').text('Player2 Wins! Click Button to reset')
//       player2Score++
//     } else {
//       // $('#playerMove').text('game is a draw')
//       draw = true
//     }
//     clickBox0++
//     click++
//   } else if (click < 9 && click % 2 === 0 && clickBox0 < 1) {
//     $('#0').text(oVal)
//     console.log('click')
//     outcome.splice(0, 1, oVal)
//     console.log(outcome)
//     $('#0').css('background-color', 'blue')
//
//     if (gameOver(outcome) === true) {
//       alert('Player1 Wins')
//       $('#playerMove').text('Player1 Wins! Click Button to reset')
//       player1Score++
//     } else {
//       $('#playerMove').text('Player2 to move')
//       draw = true
//     }
//
//     clickBox0++
//     click++
//   } else {
//     console.log('error')
//     alert('error')
//   }
// })
