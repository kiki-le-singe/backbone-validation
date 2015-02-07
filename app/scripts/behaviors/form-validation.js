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
        error: 'has-error',
        success: 'has-success',
        hidden: 'hidden',
        hide: 'fadeOut',
        show: 'fadeIn',
      }
    },

    ui: {
      alert: '.alert-danger',
      submitButton: 'button[type="submit"]'
    },

    events: {
      'click @ui.alert': 'hide',
      'click @ui.submitButton': 'submit'
    },

    initialize: function () {
      this.model = this.view.options.model || null;
      this.groupSelector = this.options.selectors.group;
      this.errorCLass = this.options.class.error;
      this.successCLass = this.options.class.success;
      this.hiddenCLass = this.options.class.hidden;
      this.showCLass = this.options.class.show;
    },

    onDomRefresh: function () {
      // https://github.com/thedersen/backbone.validation#validation-binding
      // https://github.com/thedersen/backbone.validation#callbacks
      Validation.bind(this.view, {
        valid: this.valid.bind(this),
        invalid: this.invalid.bind(this)
      });
    },

    valid: function (view, attr, selector) {
      debugger
      var $el = view.$('[name=' + attr + ']');
      var $group = $el.closest(this.groupSelector);

      if ($group.hasClass(this.errorCLass)) {
        $group.removeClass(this.errorCLass);
      }

      $group.addClass(this.successCLass);
    },

    invalid: function (view, attr, error, selector) {
      debugger
      var $el = view.$('[name=' + attr + ']');
      var $group = $el.closest(this.groupSelector);
      var $alert = this.ui.alertDanger;

      if ($group.hasClass(this.successCLass)) {
        $group.removeClass(this.successCLass);
      }

      if ($alert.hasClass(this.hiddenCLass)) {
        $alert.removeClass(this.hiddenCLass).addClass(this.showCLass);
      }
      // TODO: Create helper text wrapper
      $alert.append('<p>' + error + '</p>');

      $group.addClass(this.errorCLass);
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
    },

    hide: function () {
      this.ui.alert
        .addClass(this.hideCLass)
        .removeClass(this.showCLass);
    }
  });
});
