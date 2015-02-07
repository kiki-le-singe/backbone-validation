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
      this.hideCLass = this.options.class.hide;
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
      var $alert = this.ui.alert;

      // handles $group
      if ($group.hasClass(this.successCLass)) {
        $group.removeClass(this.successCLass);
      }
      $group.addClass(this.errorCLass);

      // handles $alert
      if ($alert.hasClass(this.hiddenCLass)) {
        $alert.removeClass(this.hiddenCLass).addClass(this.showCLass);
      }
      if ($alert.hasClass(this.hideCLass)) {
        $alert.removeClass(this.hideCLass).addClass(this.showCLass);
      }
      $alert.append('<p>' + error + '</p>'); // TODO: Create helper text wrapper
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

      // Detect When CSS3 Animations and Transitions End:
      // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
      // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
      this.ui.alert.one('webkitAnimationEnd', function () {
        this.innerHTML = '';
      });
    }
  });
});
