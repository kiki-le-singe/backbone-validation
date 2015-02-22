define([
  'marionette',
  '#dialogs/views/alert',
  'vent'
],

function (Marionette, AlertView, vent) {
  'use strict';

  return Marionette.Controller.extend({
    initialize: function () {
      this.dialogsRegion = this.getOption('dialogsRegion');

      vent.on('dialogs:show', this.show, this);
    },

    show: function (options) {
      // https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md#preventdestroy
      return this.dialogsRegion.show(new AlertView(options), {preventDestroy: true});
    }
  });
});
