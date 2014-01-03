/*globals mocha:true */
var all_tests= [
  'cs!js/test/example'
];

/* TODO: bring over config, and make adaptions for node/browser mocha */
if(typeof window === "undefined"){
}
else{
  
}

requirejs(all_tests, function(){
  if (typeof mocha !== 'undefined') {
    mocha.run();
  }
})