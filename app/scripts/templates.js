define(function (require) {
  'use strict';
  return {
    'root-layout': require('hbs!tmpl/root-layout'),
    register: require('hbs!tmpl/register'),
    post: require('hbs!tmpl/post'),
    menu: require('hbs!tmpl/menu'),
    'hello-world': require('hbs!tmpl/hello-world'),
    libraries: require('hbs!tmpl/libraries'),
    library: require('hbs!tmpl/library')
  };
});
