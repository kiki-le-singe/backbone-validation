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

    onDestroy: function () {
      vent.trigger('form:enable');
    },

    show: function () {
      this.ui.alert.removeClass(this.hiddenCLass).addClass(this.showCLass);

      // Detect When CSS3 Animations and Transitions End:
      // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
      // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
      this.ui.alert.one('webkitAnimationEnd', function () {
        this.runTimer(3000);
      }.bind(this));
    },

    hide: function () {
      this.killTimer();

      this.ui.alert.addClass(this.hideCLass).removeClass(this.showCLass);

      // Detect When CSS3 Animations and Transitions End:
      // - http://stackoverflow.com/questions/9255279/callback-when-css3-transition-finishes?answertab=votes#tab-top
      // - http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end
      this.ui.alert.one('webkitAnimationEnd', function () {
        this.destroy();
      }.bind(this));
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
