define([
  'marionette',
  '#dialogs/views/alert'
],

function (Marionette, AlertView) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.dialogsRegion = this.getOption('dialogsRegion');
    },

    show: function () {
      return this.dialogsRegion.show(new AlertView());
    },

    hide: function () {
      debugger
    }
  });
});
