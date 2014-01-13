'use strict';
///////////////////////////////////
// Generator inspired by: http://yeoman.io/generators.html#writing-your-first-generator
///////////////////////////////////
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Deanhtml5Generator = module.exports = function Deanhtml5Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Deanhtml5Generator, yeoman.generators.Base);

Deanhtml5Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'title',
    message: 'What would you like to name this page?',
    default: 'deanhtml5'
  }];

  this.prompt(prompts, function (props) {
    this.title = props.title;

    cb();
  }.bind(this));
};

Deanhtml5Generator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/css');
  this.mkdir('app/js');

  this.copy('app/_index.html', 'app/index.html');
  this.copy('app/_test-runner.js', 'app/test-runner.js');
  this.copy('app/_test-runner.html', 'app/test-runner.html');
  this.copy('app/js/_main.js', 'app/js/main.js');
  this.copy('app/js/_requirejs-config.js', 'app/js/requirejs-config.js');
  this.copy('app/js/_util.coffee', 'app/js/util.coffee');
  this.copy('app/js/_example.coffee', 'app/js/example.coffee');
  this.copy('app/js/templates/_example.coffee', 'app/js/templates/example.coffee');
  this.copy('app/js/test/_example.coffee', 'app/js/test/example.coffee');
  this.copy('app/css/_main.css', 'app/css/main.css');

};

Deanhtml5Generator.prototype.projectfiles = function projectfiles() {
  this.copy('_.gitignore', '.gitignore');
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_.editorconfig', '.editorconfig');
  this.copy('_.jshintrc', '.jshintrc');
  this.copy('_app.build.js', 'app.build.js');
  this.copy('_bower.json', 'bower.json');
  this.copy('_package.json', 'package.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_README.md', 'README.md');
};
