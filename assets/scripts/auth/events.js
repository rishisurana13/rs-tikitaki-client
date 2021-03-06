'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const config = require('../config.js')
const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('#create-example-form').on('submit', onCreateExample)
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  console.log('form: ', form)
  const formData = getFormFields(form)
  console.log('formData: ', formData)


  api.signUp(formData)
  .then(ui.signUpSuccess)
  .catch(ui.failure)
  $('form').trigger('reset')
    }
  const onSignIn = (event) => {
    event.preventDefault()
    const form = event.target
    console.log('form: ', form)
    const formData = getFormFields(form)
    console.log('formData: ', formData)


    api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
    $('form').trigger('reset')
      }

    const onChangePassword = (event) => {
      event.preventDefault()
      const form = event.target
      console.log('form: ', form)
      const formData = getFormFields(form)
      console.log('formData: ', formData)


      api.changePassword(formData)
      .then(ui.changePasswordSuccess)
      .catch(ui.failure)
      $('form').trigger('reset')
    }

    const onSignOut = (event) => {
      event.preventDefault()
      const form = event.target
      console.log('form: ', form)
      const formData = getFormFields(form)
      console.log('formData: ', formData)


      api.signOut(formData)
      .then(ui.signOutSuccess)
      .catch(ui.failure)
      $('form').trigger('reset')
        }

    const onGetGames = function () {
    gamesApi.getGames()
    .then(gamesUi.getGamesSuccess)
    .catch(gamesUi.failure)
}

module.exports = {
onSignUp,
onSignIn,
onChangePassword,
onSignOut,
onGetGames
}
