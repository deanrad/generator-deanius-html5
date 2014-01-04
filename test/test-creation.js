/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('deanhtml5 generator', function () {
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

    it('creates expected files', function (done) {
        var expected = [
            '.jshintrc',
            '.editorconfig',
            '.bowerrc',
            'Gruntfile.js',
            'package.json',
            'bower.json',
            'README.md',
            'app/index.html',
            'app/test-runner.html',
            'app/test-runner.js',
            'app/index.html',
            'app/js/main.js',
            'app/js/requirejs-config.js',
            'app/js/util.coffee',
            'app/js/example.coffee',
            'app/js/test/example.coffee',
            'app/css/main.css'
        ];

        helpers.mockPrompt(this.app, {
            'someOption': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
