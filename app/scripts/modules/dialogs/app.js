define([
  'marionette',
  '#dialogs/controllers/nav',
  'vent'
],

function (Marionette, NavController, vent) {
  'use strict';

  return function (options) {
    var App = new Marionette.Application();

    App.on('start', function () {
      this.controller = new NavController(options);
      vent.trigger('module:dialogs:bootstrapped');
    });

    return App;
  };
});
