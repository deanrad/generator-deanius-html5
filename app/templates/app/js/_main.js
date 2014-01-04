var deps=["jquery", "lodash", "bootstrap", "css!bootstrap-css", "css!main-css", "hbs!templates/tOne"];
console.log("Loading up " + deps.join(","));
requirejs(deps);

require(["domReady!", "jquery", "hbs!templates/tOne", "lodash", "cs!js/util"], function(doc, $, templ, _){
  console.log("The dom will see you now");
  console.log("Lodash version " + _.VERSION);
});
