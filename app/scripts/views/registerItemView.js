define([
  'marionette',
  'behaviors/index',
  'templates'
],

function (Marionette, behaviors, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.register,
    className: 'form--register',

    behaviors: {
      PreventClick: {
        behaviorClass: behaviors.preventClick
      },
      FormValidation: {
        behaviorClass: behaviors.formValidation,
      }
    },

    initialize: function () {
      console.log('initialize: registerItemView');
    }
  });
});
