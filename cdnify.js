/* Promises version - to work inside grunt, call var done = grunt.async(), and invoke done() */
var Q = require("q");
  Q.longStackSupport = true;
  
var fs = require("fs");
var sys = require("sys");

var filePath = process.argv[2];
var filePathNew = filePath; //+".bak";

function cdnify(contents){
  //quick-n-dirty version, requires src|href to be adjacent to data-alt-path in markup
  return contents.replace( /(src|href)="([^"]+)"([\s]+)data-alt-path="([^"]+)"/gm, '$1="$4"$3data-alt-path="$2"' )
}

var promise = Q.nfcall(fs.readFile, filePath, 'utf-8').then(
  function(contents){
    return cdnify(contents);
  }
).then(
  function(newContents){
    return Q.nfcall(fs.writeFile, filePathNew, newContents);
  }
).then(
  function(){
    sys.puts("All set, check " + filePathNew);
  }
).fail(
  function(err){
    sys.puts("Error occurred." + err);
  }
)

