var deps=["jquery", "lodash", "bootstrap", "css!bootstrap-css", "css!main-css"];
console.log("Loading up " + deps.join(","));
requirejs(deps);

require(["domReady!", "jquery", "lodash", "coffee!js/util"], function(doc, $, _){
  console.log("The dom will see you now");
  console.log("Lodash version " + _.VERSION);
});
