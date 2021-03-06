'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (formData) => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = (formData) => {
console.log('store: ', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}
const getGames = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi-production.herokuapp.com',
    method: 'GET'
  })
}




module.exports = {
signUp,
signIn,
changePassword,
signOut,
getGames

}
