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
        valid: function (view, attr, selector) {
          debugger
          var $el = view.$('[name=' + attr + ']');
          var $group = $el.closest('.form-group');

          if ($group.hasClass('has-error')) {
            $group.removeClass('has-error');
          }

          $group.addClass('has-success');
        },
        invalid: function (view, attr, error, selector) {
          debugger
          var $el = view.$('[name=' + attr + ']');
          var $group = $el.closest('.form-group');
          var $alert = view.$('.alert-danger');

          if ($group.hasClass('has-success')) {
            $group.removeClass('has-success');
          }

          if ($alert.hasClass('hidden')) {
            $alert.removeClass('hidden').addClass('show animated-opacity');
          }
          // TODO: Create helper text wrapper
          $alert.append('<p>' + error + '</p>');

          $group.addClass('has-error');
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
