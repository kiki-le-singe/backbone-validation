define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      form: 'form',
      libraries: 'libraries',
      '': 'home'
    }
  });

  return Router;
});
