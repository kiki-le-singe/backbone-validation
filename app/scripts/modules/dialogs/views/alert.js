define([
  'marionette',
  'vent',
  '#dialogs/templates'
],

function (Marionette, vent, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.alert,

    ui: {
      alert: '.alert-danger'
    },

    events: {
      'click @ui.alert': 'hide'
    },

    initialize: function () {
      console.log('initialize: alertView');

      this.hideCLass = 'fadeOut';
      this.hiddenCLass = 'hidden';
      this.showCLass = 'fadeIn';
    },

    serializeData: function () {
      var data = {};
      data.errors = this.getOption('errors');
      return data;
    },

    onRender: function () {
      this.show();
    },

    show: function () {
      var self = this;

      this.ui.alert.removeClass(this.hiddenCLass).addClass(this.showCLass);

      // Detect When CSS3 Animations and Transitions End:
      // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
      // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
      this.ui.alert.one('webkitAnimationEnd', function () {
        self.runTimer(5000);
      });
    },

    hide: function () {
      var $alert = this.ui.alert;

      this.killTimer();

      $alert.addClass(this.hideCLass).removeClass(this.showCLass);

      // Detect When CSS3 Animations and Transitions End:
      // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
      // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
      $alert.one('webkitAnimationEnd', function () {
        $alert.remove();
        vent.trigger('form:enable');
      });
    },

    runTimer: function (timeout) {
      var self = this;
      timeout = timeout || 2000;

      this.killTimer();

      this.timer = setTimeout(function () {
        self.hide();
      }, timeout);
    },

    killTimer: function () {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = undefined;
      }
    }
  });
});
