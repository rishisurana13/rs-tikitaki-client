'use strict'

const store = require('../store.js')
const app = require('../app.js')

const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')
}
const signInSuccess = (responseData) => {

$('#user-message').text('successfully signed In!')

  store.user = responseData.user
  $('#sign-in-form').hide('click')
  $('#sign-up-form').hide('click')
  $('#sign-out').show('click')
  $('#change-password-form').show('click')
  $('#boxes').show('click')
  $('#playerMove').show('click')
  $('#score').show('click')
  $('#footer').hide('click')
  $('#resetButton').show('click')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)


}
const signOutSuccess = (responseData) => {
  $('#user-message').text('successfully signed Out!')
  $('form').trigger('reset')
  store.user = null
  console.log('store: ', store)
  $('#sign-in-form').show('click')
  $('#sign-up-form').show('click')
  $('#sign-out').hide('click')
  $('#change-password-form').hide('click')
  $('#boxes').hide('click')
  $('#playerMove').hide('click')
  $('#score').hide('click')
  $('#footer').show('click')
  $('#resetButton').hide('click')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)




}
const getGamesSuccess = function (outcome) {
    $('#book-display').html('')
    outcome.games.forEach(outcomes => {
    const gameHtml = (`
    <h2>Title : ${game.outcome}</h2>

    <br>
    `)
    $('#game-display').append(gameHtml)
  })
}



const signOutFailure = () => {
$('#user-message').text('error on sign out')
setTimeout(function () {
  $('#user-message').text('')
}, 2000)
}

const signUpFailure = () => {
$('#user-message').text('error on sign up')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}

const signInFailure = () => {
$('#user-message').text('error on sign in')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}

const changePasswordFailure = () => {
$('#user-message').text('error in changing password')
setTimeout(function () {
$('#user-message').text('')
}, 2000)
}
const changePasswordSuccess = () => {
$('#user-message').text('successfully changed password!')
setTimeout(function () {
$('#user-message').text('')
}, 2000)

}

const failure = () => {

  $('#user-message').text('something went wrong')
  setTimeout(function () {
    $('#user-message').text('')
  }, 2000)
  $('form').trigger('reset')



}



module.exports = {
signUpSuccess,
signUpFailure,
signInFailure,
signInSuccess,
changePasswordFailure,
changePasswordSuccess,
signOutFailure,
signOutSuccess,
failure,
getGamesSuccess

}
