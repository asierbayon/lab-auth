const passport = require('passport');
const mongoose = require('mongoose');
const createError = require('http-errors');
const User = require('../models/user.model');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, next) => {
  // Iteration 4: select user attribute for session cookie serialization
});

passport.deserializeUser((id, next) => {
  // Iteration 4: find user by session cookie user identifier field
});

passport.use('local-auth', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, next) => {
  // Iteration 4: find and validate user password 
}));
