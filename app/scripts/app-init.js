require([
  'backbone',
  'app',
  'helpersHBS'
],

function (Backbone, App) {
  'use strict';

  App.start();
  Backbone.history.start();
});
