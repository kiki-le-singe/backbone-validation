define([], function () {
  'use strict';

  return {
    username: {
      required: true, // https://github.com/thedersen/backbone.validation#required
      msg: 'Username is required'
    },
    email: [{
        required: true,
        msg: 'Please enter an email address'
    },{
      pattern: 'email', // https://github.com/thedersen/backbone.validation#pattern
      msg: 'Please enter a valid email'
    }],
    password: [{
        required: true,
        msg: 'Password is required'
    },{
      minLength: 8,
      msg: 'Password must be at least 8 characters long'
    }],
    confirmPassword: [{
        required: true,
        msg: 'Confirm password is required'
    },{
      equalTo: 'password',
      msg: 'The passwords does not match'
    }],
    website: {
      required: false,
      pattern: 'url',
      msg: 'Please enter a valid url'
    },
    tel: {
      required: false,
      pattern: /^[0-9]+([-. ]?[0-9]+){4,14}$/,
      msg: 'Please enter a valid telephone number'
    },
    country: {
      oneOf: ['BR', 'FR', 'UK', 'US']
    },
    gender: {
      required: true,
      msg: 'Gender is required'
    },
    age: {
      required: false,
      range: [18, 100]
    },
    terms: {
      acceptance: true
    },
    someAttribute: function (value) { // https://github.com/thedersen/backbone.validation#method-validator
      if ('somevalue' !== value) {
        return 'Error message';
      }
    }
  };
});
