define([
  '#dialogs/controllers/nav',
  'vent'
],

function (NavController, vent) {
  'use strict';

  return function (options) {
    var opts = options || {};

    return {
      controller: function () {
        return new NavController(opts);
      },

      start: function () {
        this.controller();
        vent.trigger('module:dialogs:bootstrapped');
      }
    };
  };
});
