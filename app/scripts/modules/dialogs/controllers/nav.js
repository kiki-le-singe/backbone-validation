define([
  'marionette'
],

function (
  Marionette) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function (options) {
      this.dialogsRegion = options.dialogsRegion || 'body';
    },

    show: function () {
      debugger
    },

    hide: function () {
      debugger
    }
  });
});
