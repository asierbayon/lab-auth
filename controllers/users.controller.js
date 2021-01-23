const mongoose = require('mongoose');
const httpError = require('http-errors');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
  res.render('users/register');
};

module.exports.doRegister = (req, res, next) => {

  function renderWithErrors(errors) {
    res.status(400).render('users/register', {
      user: req.body,
      errors: errors,
    });
  }

  // Iteration 1: register and validate user
  User.findOne({ name: req.body.name })
    .then(user => {
      if (user) {
        renderWithErrors({ name: 'Name already exists.'})
      } else {
        return User.create(req.body) // Por qué return?
          .then(() => res.redirect('/'));
      }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    })
};

module.exports.login = (req, res, next) => {
  res.render('users/login');
};

module.exports.doLogin = (req, res, next) => {
  // Iteration 2: login user
  // Iteration 4: clean this method and login the user with passport
};

module.exports.logout = (req, res, next) => {
  // Iteration 2: logout
};

module.exports.list = (req, res, next) => {
  User.find()
    .then(users => res.render('users/list', { users }))
    .catch(next)
}
