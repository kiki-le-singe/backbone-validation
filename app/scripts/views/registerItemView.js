define([
  'marionette',
  'backbone.validation',
  'backbone.syphon',
  'behaviors/index',
  'templates'
],

function (Marionette, Validation, Syphon, behaviors, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.register,
    className: 'form--register',

    ui: {
      submitButton: 'button[type="submit"]'
    },

    events: {
      'click @ui.submitButton': 'signUp'
    },

    behaviors: {
      PreventClick: {
        behaviorClass: behaviors.preventClick
      }
    },

    initialize: function () {
      console.log('initialize: registerItemView');

      // https://github.com/thedersen/backbone.validation#validation-binding
      // https://github.com/thedersen/backbone.validation#callbacks
      Validation.bind(this, {
        valid: function (view, attr) {
          // do something
          debugger
        },
        invalid: function (view, attr, error) {
          // do something
          debugger
        }
      });
    },

    onDestroy: function () {
      // https://github.com/thedersen/backbone.validation#unbinding
      Validation.unbind(this);
    },

    signUp: function () {
      // https://github.com/marionettejs/backbone.syphon#basic-usage--serialize
      var data = Syphon.serialize(this);
      this.model.set(data);

      // https://github.com/thedersen/backbone.validation#isvalid
      if (this.model.isValid(true)) {
        // this.model.save();
        console.log('Great Success!');
      }
    }
  });
});
