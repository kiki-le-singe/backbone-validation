define([
  'backbone',
  'backbone.validation',
  'config/userRules'
],

function (Backbone, Validation, UserRules) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
    },

    validation: UserRules,

    initialize: function () {
      console.log('initialize: UserModel');
    }
  });
});
