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
    var options = {
      contentRegion: rootLayoutView.content
    };

    rootLayoutView.render();
    rootLayoutView.nav.show(new MenuItemView());

    this.routers = new Routers({
      controller: new NavController(options)
    });

    // load modules
    require(['#dialogs/app'], function (dialogs) {

      dialogs({dialogsRegion: rootLayoutView.dialogs}).start();
    });
  });

  return App;
});
