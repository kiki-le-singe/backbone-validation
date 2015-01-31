define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.register,
    className: 'form--register',

    behaviors: {
      PreventClick: {
        behaviorClass: behaviors.preventClick
      }
    },

    initialize: function () {
      console.log('initialize: registerItemView');
    }
  });
});
