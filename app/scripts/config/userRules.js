define([], function () {
  'use strict';

  return {
    username: {
      required: true,
      msg: 'Username is required'
    },
    email: [{
        required: true,
        msg: 'Please enter an email address'
    },{
      pattern: 'email',
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
    someAttribute: function (value) {
      if ('somevalue' !== value) {
        return 'Error message';
      }
    }
  };
});
