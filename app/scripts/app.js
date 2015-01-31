define([
  'marionette',
  'controllers/nav',
  'views/menuItemView',
  'routers/routers',
  'vent'
],

function (Marionette, NavController, MenuItemView, Routers, Vent) {
  'use strict';

  var App = new Marionette.Application();

  /* Add application regions here */
  App.addRegions({
    nav: '.navbar',
    content: '#content',
    footer: '#footer'
  });

  /* Add initializers here */
  App.addInitializer(function () {
    this.routers = new Routers({
      controller: new NavController({contentRegion: App.content})
    });

    this.nav.show(new MenuItemView());

    Vent.trigger('APP:START');
  });

  return App;
});
