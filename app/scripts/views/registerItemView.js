define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.register,
    className: 'form--register',

    initialize: function () {
      console.log('initialize: registerItemView');
    }
  });
});
