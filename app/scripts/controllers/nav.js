define([
  'marionette',
  'views/formItemView',
  'views/helloWorldItemView',
  'views/librariesCompositeView',
  'models/helloWorldModel',
  'models/librariesCollection'
],

function (Marionette, FormItemView, HelloWorldItemView, LibrariesCompositeView, HelloWorldModel, LibrariesCollection) {
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

    form: function () {
      return this.contentRegion.show(new FormItemView());
    }
  });

  return NavController;
});
