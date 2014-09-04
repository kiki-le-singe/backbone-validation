define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      libraries: 'libraries',
      '': 'home'
    }
  });

  return Router;
});
