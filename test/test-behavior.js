/*global describe, beforeEach, it*/
'use strict';

var Q       = require('q');
var path    = require('path');
var fs      = require('fs');
var helpers = require('yeoman-generator').test;

function insideApp(cb, done){
	helpers.mockPrompt(this.app, {
	    'someOption': true
	});
	this.app.options['skip-install'] = true;
	this.app.run({}, function () {
	    helpers.assertFile("README.md");
	    done();
	});

	return cb();
}


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
		
		it('can run "npm test"', function(done) {
			//var suite = this;
			var test = function(){
				helpers.assertFile("package.json", /scripts/);
			};
			
			//This works
			assertTest.bind(this)(test, done);
			//As does this
			//assertTest.call(this, test, done);
			//But not this since 'this' is incorrect, giving Cannot read property 'app' of undefined
			//assertTest(test, done);
		});

		
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