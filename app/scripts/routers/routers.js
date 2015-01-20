define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      register: 'register',
      post: 'post',
      libraries: 'libraries',
      '': 'home'
    }
  });

  return Router;
});
