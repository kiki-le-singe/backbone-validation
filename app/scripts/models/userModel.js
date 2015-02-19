define([
  'backbone',
  'backbone.validation',
  'config/userRules',
  'vent'
],

function (Backbone, Validation, UserRules, vent) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
    },

    validation: UserRules,

    initialize: function () {
      console.log('initialize: UserModel');

      // https://github.com/thedersen/backbone.validation#events

      // https://github.com/thedersen/backbone.validation#validated
      this.on('validated', this.validated, this);

      // https://github.com/thedersen/backbone.validation#validatedvalid
      this.on('validated:valid', this.validatedValid, this);

      // https://github.com/thedersen/backbone.validation#validatedinvalid
      this.on('validated:invalid', this.validatedInvalid, this);
    },

    validated: function (isValid, model, errors) {
      debugger
    },

    validatedValid: function (model) {
      debugger
      // this.save();
    },

    validatedInvalid: function (model, errors) {
      var options = {
        model: model,
        errors: errors
      };
      vent.trigger('dialogs:show', options);
    }
  });
});
