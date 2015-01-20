define(function (require) {
  'use strict';
  return {
    form: require('hbs!tmpl/form'),
    menu: require('hbs!tmpl/menu'),
    'hello-world': require('hbs!tmpl/hello-world'),
    libraries: require('hbs!tmpl/libraries'),
    library: require('hbs!tmpl/library')
  };
});
