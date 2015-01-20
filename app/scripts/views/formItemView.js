define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.form,
    className: 'form',

    initialize: function () {
      console.log('initialize: formItemView');
    }
  });
});
