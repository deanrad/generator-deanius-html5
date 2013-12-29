// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var moment = require('moment');
 
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};
 
module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  var appcache_files = ['./*.html'];
  
  grunt.initConfig({
    watch: {
      options: {
        nospawn: true,
        livereload: LIVERELOAD_PORT
      },
      livereload: {
        files: [
          'index.html'
        ],
        tasks: ['build']
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.')
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%%= connect.options.port %>'
      }
    },
    bower: {
      target: {
        rjsConfig: 'js/requirejs-config.js'
      }
    },
    manifest: {
      //http://frederiknakstad.com/awkward-change-flow-or-how-i-learned-to-stop-worrying-and-love-the-application-cache/
      generate: {
        options: {
          network: ['http://*', 'https://*'],
          timestamp: true
        },
        src: appcache_files,
        dest: 'manifest.appcache'
      }
    }
  });
 
  grunt.registerTask('server', ['build', 'connect:livereload', 'open', 'watch']);

  grunt.registerTask('build', 'Build your app.', function () {
    console.log("Implement your custom build step here");
  });
  
  grunt.registerTask('cdnify', 'Toggle scripts/css to work online or offline', function(){
    var fs = require("fs");

    var filePath = "index.html"; //process.argv[2];
    var filePathNew = filePath; //+".bak";

    function cdnify(contents){
      //quick-n-dirty version, requires src|href to be adjacent to data-alt-path in markup
      return contents.replace( /(src|href)="([^"]+)"([\s]+)data-alt-path="([^"]+)"/gm, '$1="$4"$3data-alt-path="$2"' )
    }

    var contents = fs.readFileSync(filePath, 'utf-8');
    var newContents = cdnify(contents);
    fs.writeFileSync(filePathNew, newContents);

    grunt.log.writeln("All set, check " + filePathNew);
  });  
}