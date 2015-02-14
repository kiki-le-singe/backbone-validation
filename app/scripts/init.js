require.config({

  baseUrl: '/scripts',

  /* starting point for application */
  deps: ['app-init', 'bootstrap'],

  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    backbone: {
      deps: ['underscore', 'jquery']
    },
    marionette: {
      deps: ['backbone']
    }
  },

  paths: {
    // modules
    '#dialogs': 'modules/dialogs',

    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/lodash/dist/lodash',
    backbone: '../bower_components/backbone/backbone',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',

    /* backbone plugins */
    'backbone.validation': '../bower_components/backbone-validation/dist/backbone-validation-amd',

    /* alias all marionette libs */
    marionette: '../bower_components/marionette/lib/backbone.marionette',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.syphon': '../bower_components/marionette.backbone.syphon/lib/backbone.syphon',

    /* Alias text.js for template loading and shortcut the templates dir to tmpl */
    text: '../bower_components/requirejs-text/text',
    tmpl: '../templates',

    /* Helpers */
    helpersHBS: 'helpers/helpers',

    /* requirejs-plugins */
    json: '../bower_components/requirejs-plugins/src/json',

    /* handlebars from the require handlerbars plugin below */
    handlebars: '../bower_components/handlebars/handlebars',
    hbs: '../bower_components/requirejs-hbs/hbs'
  }
});
