/*globals mocha:true */

/* These tests are the 'dependencies' of mocha.run() and so add yours accordingly */
var all_tests = [
  'cs!js/test/example'
];

/* In the browser, we load the config as 'var require', then requirejs picks it up.
   In node, loading is trickier, and repurposing the config that works for the browser
   with least redundancy is trickier still. Thus this eyebrow-raising loading code.
   Suggestions always welcome :) */
if(typeof window === "undefined"){
  console.log("Running tests in node");
  var requirejs = require('requirejs');
  var Mocha = require('mocha');
  var mocha = new Mocha;
  
  var rconfig = require("./js/requirejs-config.js").config;
  var node_rjsconf = {
    baseUrl : __dirname,
    nodeRequire : require,
    paths: rconfig.paths,
    shim: rconfig.shim,
    map: rconfig.map
  };
  requirejs.config(node_rjsconf);
}

requirejs(all_tests, function(){
  if (typeof mocha !== 'undefined') {
    mocha.run();
  }
})
