# generator-deanius-html5 [![Build Status](https://secure.travis-ci.org/chicagogrooves/generator-deanius-html5.png?branch=master)](https://travis-ci.org/chicagogrooves/generator-deanius-html5)

A generator for [Yeoman](http://yeoman.io).

## Raison d'être (Reason for being)

To facilitate whipping up HTML5 apps to play with during ones commute.

A default generated site gives you:
- HTML5 doctype
- Viewport tag
- Twitter Bootstrap CSS and JS
- CoffeeScript support with or without precompilation
- Mocha/chai testing frameworks
- Grunt tasks for developing, testing, linting, online/offline functionality
- In browser and command-line testing
- Easy updating of dependencies

### Important technologies ###

- Bower: Includes front-end packages and gives you a means to update them 
- Grunt: Gives you a development server, livereload, and build functionality
- Npm: Run mocha tests from the command-line via `npm test` (TODO)
- RequireJS: Modular development, easy add/remove of stylesheets and scripts
-- r.js can precompile all JS, CS, LESS, CSS etc into a minified file



- Uses requirejs so adding/removing dependencies, both JS and CSS is a breeze

## Getting Started

First we'll assume you've done
```
$ npm install -g generator-deanius-html5
```

Or if you're in local development mode, you have a copy of the repo, you may have done:
```
$ cd generator-deanius-html5 && npm link
```

Either way now that node knows of the generator, you can proceed to 
```
$ mkdir coolapp && cd coolapp && yo deanius-html5
```

Now watch as Yeoman generates, your site, pulls down Node and front-end packages (using locally cached copies if desired), and fires up a browser
to show you the beautiful site you're developing


### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-deanius-html5 from npm, run:

```
$ npm install -g generator-deanius-html5
```

Finally, initiate the generator:

```
$ yo deanius-html5
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
