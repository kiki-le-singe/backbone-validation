define([
  'marionette',
  'backbone.validation',
  'backbone.syphon'
],

function (Marionette, Validation, Syphon) {
  'use strict';

  return Marionette.Behavior.extend({
    defaults: {
      selectors: {
        group: '.form-group',
      },
      class: {
        disabled: 'disabled',
        error: 'has-error',
        success: 'has-success'
      }
    },

    ui: {
      submitButton: 'button[type="submit"]'
    },

    events: {
      submit: 'submit'
    },

    initialize: function () {
      this.model = this.view.options.model || null;
      this.groupSelector = this.options.selectors.group;
      this.errorCLass = this.options.class.error;
      this.successCLass = this.options.class.success;
      this.disabledCLass = this.options.class.disabled;
    },

    onDomRefresh: function () {
      // https://github.com/thedersen/backbone.validation#validation-binding
      // https://github.com/thedersen/backbone.validation#callbacks
      Validation.bind(this.view, {
        valid: this.valid.bind(this),
        invalid: this.invalid.bind(this)
      });
    },

    onDestroy: function () {
      // https://github.com/thedersen/backbone.validation#unbinding
      Validation.unbind(this.view);
    },

    valid: function (view, attr, selector) {
      var $el = view.$('[name=' + attr + ']');
      var $group = $el.closest(this.groupSelector);

      // handles $group
      if ($group.hasClass(this.errorCLass)) {
        $group.removeClass(this.errorCLass);
      }
      $group.addClass(this.successCLass);
    },

    invalid: function (view, attr, error, selector) {
      var $el = view.$('[name=' + attr + ']');
      var $group = $el.closest(this.groupSelector);

      // handles $group
      if ($group.hasClass(this.successCLass)) {
        $group.removeClass(this.successCLass);
      }
      $group.addClass(this.errorCLass);
    },

    submit: function () {
      // https://github.com/marionettejs/backbone.syphon#basic-usage--serialize
      var data = Syphon.serialize(this.view);
      this.model.set(data);

      // disable submit button for to avoid multiple submissions
      this.disable();

      // https://github.com/thedersen/backbone.validation#isvalid
      if (this.model.isValid(true)) {
        console.log('Great Success!');
      }
    },

    disable: function () {
      this.ui.submitButton.addClass(this.disabledCLass);
    },

    enable: function () {
      this.ui.submitButton.removeClass(this.disabledCLass);
    }
  });
});
