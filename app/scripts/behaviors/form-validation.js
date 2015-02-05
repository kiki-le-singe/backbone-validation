define([
  'marionette',
  'backbone.validation',
  'backbone.syphon'
],

function (Marionette, Validation, Syphon) {
  'use strict';

  return Marionette.Behavior.extend({
    ui: {
      submitButton: 'button[type="submit"]'
    },

    events: {
      'click @ui.submitButton': 'submit'
    },

    initialize: function () {
      this.model = this.view.options.model || null;
    },

    onDomRefresh: function () {
      // https://github.com/thedersen/backbone.validation#validation-binding
      // https://github.com/thedersen/backbone.validation#callbacks
      Validation.bind(this.view, {
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
      Validation.unbind(this.view);
    },

    submit: function () {
      // https://github.com/marionettejs/backbone.syphon#basic-usage--serialize
      var data = Syphon.serialize(this.view);
      this.model.set(data);

      // https://github.com/thedersen/backbone.validation#isvalid
      if (this.model.isValid(true)) {
        // this.model.save();
        console.log('Great Success!');
      }
    }
  });
});
