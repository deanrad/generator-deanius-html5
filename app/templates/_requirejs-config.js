requirejs.config({
  baseUrl: "bower_components",
  paths: {
    /* CSS */
    "main-css": "/css/main",
    "bootstrap-css": "bootstrap/dist/css/bootstrap.min", /*data-alt-path="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min"*/
    /* JS */
    "jquery": "jquery/jquery.min", /*data-alt-path="//code.jquery.com/jquery-1.10.2.min"*/
    "bootstrap": "bootstrap/dist/js/bootstrap.min" /*data-alt-path="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min"*/
    /* COFFEE */
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    }
  },
  map: {
  "*": {
    "css": "require-css/css",
    "cs": "require-cs/cs", /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/require-cs/0.4.2/cs.js"*/
    "coffee-script": "coffee-script/index" /*data-alt-path="//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js"*/
  }
}
});

var deps=["jquery", "bootstrap", "css!bootstrap-css", "css!main-css"];
console.log("Loading up " + deps.join(","))
requirejs(deps)
