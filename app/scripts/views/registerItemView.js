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
      FormValidation: {
        behaviorClass: behaviors.formValidation,
      },
      PreventClick: {
        behaviorClass: behaviors.preventClick
      }
    },

    initialize: function () {
      console.log('initialize: registerItemView');
    }
  });
});
