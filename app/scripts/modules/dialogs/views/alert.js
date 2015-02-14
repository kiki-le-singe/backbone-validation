define([
  'marionette',
  '#dialogs/templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.alert,

    initialize: function () {
      console.log('initialize: alertView');
    }
  });
});
