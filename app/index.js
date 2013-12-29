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
  this.mkdir('css');
  this.mkdir('js');

  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_index.html', 'index.html')
  this.copy('_requirejs-config.js', 'js/requirejs-config.js');
  this.copy('_README.md', 'README.md');
  this.copy('_main.css', 'css/main.css');
  this.copy('_util.coffee', 'js/util.coffee');
  
};

Deanhtml5Generator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
