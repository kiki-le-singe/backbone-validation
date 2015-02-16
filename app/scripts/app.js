define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var NavController = require('controllers/nav');
  var RootLayoutView = require('views/rootLayoutView');
  var MenuItemView = require('views/menuItemView');
  var Routers = require('routers/routers');

  var App = new Marionette.Application();

  // When the application is ready
  App.on('start', function () {
    var rootLayoutView = new RootLayoutView();
    rootLayoutView.render();
    rootLayoutView.nav.show(new MenuItemView());

    this.routers = new Routers({
      controller: new NavController({contentRegion: rootLayoutView.content})
    });
  });

  return App;
});
