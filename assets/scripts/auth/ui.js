'use strict'

const store = require('../store.js')


const signUpSuccess = () => {
  $('#user-message').text('successfully signed up!')

}
const signInSuccess = (responseData) => {
  $('#user-message').text('successfully signed In!')
  store.user = responseData.user
  $('#sign-in-form').hide('click')
  $('#sign-up-form').hide('click')
  $('#sign-out-form').show('click')
  $('#change-password-form').show('click')
  $('#boxes').show('click')
  $('#playerMove').show('click')
  $('#score').show('click')
  $('#sign-out').show('click')
  $('#footer').hide('click')
}
const signOutSuccess = (responseData) => {
  $('#user-message').text('successfully signed Out!')
  $('form').trigger('reset')
  store.user = null
  console.log('store: ', store)
  $('#sign-in-form').show('click')
  $('#sign-up-form').show('click')
  $('#sign-out-form').hide('click')
  $('#change-password-form').hide('click')
  $('#boxes').hide('click')
  $('#playerMove').hide('click')
  $('#score').hide('click')
  $('#sign-out').hide('click')
  $('#footer').show('click')

}

const signOutFailure = () => {
$('#user-message').text('error on sign out')
}

const signUpFailure = () => {
$('#user-message').text('error on sign up')
}

const signInFailure = () => {
$('#user-message').text('error on sign in')
}

const changePasswordFailure = () => {
$('#user-message').text('error in changing password')
}
const changePasswordSuccess = () => {
$('#user-message').text('successfully changed password!')

}

const failure = () => {

  $('#user-message').text('something went wrong')
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
failure

}
