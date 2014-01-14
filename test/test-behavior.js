/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');
var Q       = require('q');
var path    = require('path');
var fs      = require('fs');
var helpers = require('yeoman-generator').test;
var spawn = require('child_process').spawn;

describe('app behavior upon install', function () {
    beforeEach(function (done) {
			helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
				if (err) {
					return done(err);
				}

				this.app = helpers.createGenerator('deanhtml5:app', [
				'../../app'
				]);
				done();
			}.bind(this));
    });

    it('contains a README', function (done) {
      helpers.mockPrompt(this.app, {
          'someOption': true
      });
      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
          helpers.assertFile("README.md");
          done();
      });
		});
		
		it('can run "npm test" to run test suite in node', function(done) {
			//var suite = this;
			var test = function(){
				helpers.assertFile("package.json", /scripts/);
			};
			
			assertTest.bind(this)(test, done);
		});
		it('can run "http://localhost:8080/test-runner.html to run test suite"', function() {});

		it('can run "grunt --help"', function() {});
		it('can run "grunt appcache" to create appcache', function() {});
		it('can work with live-reload to compile coffeescript, LESS files', function() {});
		/* TODO */
		it('can work with grunt to compile coffeescript files', function() {});
		it('can work with grunt to compile LESS files', function() {});

		
		it('installs an r.js build file which installs into app-optimized/', function(done) {
			assertTest.bind(this)(function(){
				helpers.assertFile("app.build.js", /app-optimized/);
			}, done);
		});

    
		
		function assertTest(test, done){
      helpers.mockPrompt(this.app, {
          'someOption': true
      });
      this.app.options['skip-install'] = true;
      this.app.run({}, function () {
          test();
          done();
      });
		}
});