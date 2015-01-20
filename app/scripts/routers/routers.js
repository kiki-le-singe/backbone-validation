define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      post: 'post',
      libraries: 'libraries',
      '': 'home'
    }
  });

  return Router;
});
