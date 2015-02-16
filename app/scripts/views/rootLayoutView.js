define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.LayoutView.extend({
    el: 'body',
    template: templates['root-layout'],

    regions: {
      dialogs: '.dialogs',
      nav: '.navbar',
      content: '#content',
      footer: '#footer'
    },

    initialize: function () {
      console.log('initialize: rootLayoutView');
    }
  });
});
