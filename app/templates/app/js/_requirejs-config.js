// to cache bust use  urlArgs: "bust=" + (new Date()).getTime(),

var require={
  baseUrl: ".",
  paths: {
    /* CSS */
    "main-css": "css/main",
    "bootstrap-css": "bower_components/bootstrap/dist/css/bootstrap.min", /*data-alt-path="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min"*/
    /* JS */
    "jquery": "bower_components/jquery/jquery.min", /*data-alt-path="//code.jquery.com/jquery-1.10.2.min"*/
    "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min", /*data-alt-path="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min"*/
    "lodash": "bower_components/lodash/dist/lodash.min", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"*/
    /* Loader plugins */
    "css": "bower_components/require-css/css", /*data-alt-path="//www.chicagogrooves.com/js/require-css.min.js"*/
    "coffee": "bower_components/require-cs/cs", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/require-cs/0.4.2/cs.js"*/
    "coffee-script": "bower_components/coffee-script/index", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js"*/
    "domReady": "bower_components/requirejs-domready/domReady", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.js"*/
    "hbs": "bower_components/require-handlebars-plugin/hbs", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars.min.js"*/
    "text": "bower_components/requirejs-text/text" /*data-alt-path="//www.chicagogrooves.com/js/requirejs-text.js"*/
  },
  shim: {
    "bootstrap": ["jquery"]
  },
  map: {
    "*": {
    }
  }
};

if(typeof exports !== "undefined"){
  exports.config = require;
}
