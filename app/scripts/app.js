define([
  'marionette',
  'controllers/nav',
  'views/rootLayoutView',
  'views/menuItemView',
  'routers/routers'
],

function (Marionette, NavController, RootLayoutView, MenuItemView, Routers) {
  'use strict';

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
