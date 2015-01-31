define([], function () {
  'use strict';

  return {
    username: {
      required: true
    },
    email: [{
        required: true,
        msg: 'Please enter an email address'
    },{
      pattern: 'email',
      msg: 'Please enter a valid email'
    }],
    password: {
      minLength: 8
    },
    repeatPassword: {
      equalTo: 'password',
      msg: 'The passwords does not match'
    },
    country: {
      oneOf: ['Brazil', 'France', 'United Kingdom', 'United States']
    },
    gender: {
      required: true
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
