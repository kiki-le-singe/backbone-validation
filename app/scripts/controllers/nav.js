define([
  'marionette',
  'views/registerItemView',
  'views/postItemView',
  'views/helloWorldItemView',
  'views/librariesCompositeView',
  'models/helloWorldModel',
  'models/librariesCollection'
],

function (
  Marionette,
  RegisterItemView,
  PostItemView,
  HelloWorldItemView,
  LibrariesCompositeView,
  HelloWorldModel,
  LibrariesCollection) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      return this.contentRegion.show(new HelloWorldItemView({
        model: new HelloWorldModel()
      }));
    },

    libraries: function () {
      return this.contentRegion.show(new LibrariesCompositeView({
        collection: new LibrariesCollection()
      }));
    },

    post: function () {
      return this.contentRegion.show(new PostItemView());
    },

    register: function () {
      return this.contentRegion.show(new RegisterItemView());
    }
  });

  return NavController;
});
