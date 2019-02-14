'use strict'
let clickBox = 0
let click = 0

const moves = (box) => {
  $(box).on('click', function () {
  console.log('click')
  $(this).html(click++, clickBox++)

  if (click % 2 === 0 && click < 10 && clickBox < 2) {
    $('<p>OOO<p>').appendTo(box)
    }
  else if (click % 2 !== 0 && click < 10 && clickBox < 2) {
    $('<p>X</p>').appendTo(box)
  } else if (clickBox > 1) {
    console.log('error')
    alert('cant replace move')


  }

  else {
    console.log('error')
    alert('error')
  }



  })
}

module.exports = {
  moves: moves
}
