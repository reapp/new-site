layout: docs
title: packages
---
## reapp-ui

*This is an alpha release: seeking feedback, expect missing pieces, laughable mistakes, big changes*

reapp-ui is a set of React components for building app UI's. It has a few goals

- Allow pick-and-choose usage
- Work well together
- Lightweight code with few dependencies
- Themeable
- Adaptable to many platforms

Near-term goals are to finish out the component set, finish the most
accurate themes possible for iOS and Andorid, and nail down performance.
[Visit our homepage](http://reapp.io) for an overview of features and a live demo.

### Demo

You can add these demos to your homescreen or emulate mobile on your browser:

- [kitchen.reapp.io](http://kitchen.reapp.io)
- [hn.reapp.io](http://hn.reapp.io)

### Structure

```
  /assets
    Icons, etc
  /behaviors
    (!) Used within components, can be passed in to override
  /components
    The UI components
  /helpers
    Components which don't map directly to user-viewable, helper components
  /lib
    Internally used functions
  /mixins
    All mixins (used internally and externally)
  /stores
    Internal: should be removable once parent-based contexts are in React
  /themes
    Theme files users can require
```

**index.js**

Used to set up reapp-ui.

reapp-ui uses three different things that must be imported at init. These
things are imported so they can be mixed and matched for use with adapating
theme or behavior.

For now it has three relevant methods:

- `addConstants`: constants allow users to customize themes easily. They are used
  in styles (and in the future could be used with animations and more).
  **See /themes/ios/constants/* for examples.**

- `addStyles`: styles objects, keys map to the names of components and values are
  objects that are CSS styles in JS. Values can optionally be a function, that takes
  in the constants as the argument.
  **See /themes/ios/styles/* for examples.**

- `addAnimations`: animations are objects, keys are names, values are functions that
  take an object with `index`, `step` as keys, an optionally extra keys with more info.
  **See /themes/ios/animations.js for examples.**

To see how you'd make a theme, I'd suggest looking at `/themes/ios/theme.js`. You
can require that file to have the entire iOS theme setup for you automatically.

**component.js**

component is a decorator that is used internally by reapp-ui to make components. It
was extracted out and is a nice set of mixins that allow the ui components to avoid
reptitious code.

This is an important file to look at before understanding how this library works,
and from there, the Mixins that are used here make the foundation of the UI kit.

### Contributing

Because Reapp has split itself into a number of modules, you'll probably need to do a little
more work than usual to contribute. For the UI, the best setup is to do the following:

1. Create a `reapp` folder
2. Clone the [kitchen sink](https://github.com/reapp/kitchen-sink) repository
3. Clone this repository
4. Run `sudo npm link` inside this repository
5. **Important:** Run `npm remove react` in reapp-ui and be sure react isn't in node_modules
6. Run `sudo npm link reapp-ui` inside the kitchen sink repository

This will link your reapp-ui module into your kitchen sink repo. Now you can:

7. Run `reapp run -d` inside kitchen sink
8. Go to [localhost:3010](http://localhost:3010)
9. Make edits inside reapp-ui and they will automatically compile into the kitchen sink.

**Warning:** When running locally you may run into some unique bugs. Because `npm link`
runs an `npm install`, it will often install multiple versions of React into your
modules folders, causing Webpack to bundle multiple versions of it into your app. This
can cause a variety of errors. If you see stuff that warns about `Mount, Link, Context`,
it is most likely because of this. Delete the react folder inside reapp-ui and any other
sub-modules and re-run Webpack.

### Principles

- Aim for performance and consistency.
- Keep the repo structure as flat as possible.
- Decouple components. Allow selective usage of these components.

### Credits

Original inspiration was thanks to [Pete Hunt](https://github.com/petehunt)'s [React Mobile Demo](http://petehunt.github.io/react-touch/).
The [Framework7]() Kitchen Sink was used as reference when building the kitchen sink.

SVG Icons included in this repo are originally from [flaticon](http://www.flaticon.com/packs/ios7-set-lined-1)
and are licensed under [Creative Commons 3.0](http://creativecommons.org/licenses/by/3.0/). If you use them with your project, you must
include attribution "in any reasonable manner, but not in any way that suggests the licensor endorses you or your use".

A big part of [react-tappable](https://github.com/JedWatson/react-tappable) was imported for use as a mixin, and will be sent
back as a pull request soon!

Help throughout was given in the #reactjs freenode channel, and from various great members
of the react community including:
 - [Andrey Popp](https://github.com/andreypopp)
 - [Ryan Florence](https://github.com/rpflorence)
 - [Dan Abramov](http://github.com/gaearon)

and many more.

## reapp-pack

A helper for generating webpack configs, along with some small helpers.
Includes `./webpackServer` for easy use of webpack-dev-server.

Based heavily on the official [webpack/react-starter](https://github.com/webpack/react-starter) repo.

Webpack is just an export of the version of webpack used in this repository.

### Usage

See required files in `./config`.

```js
var config = require('./config/webpack.run.js');
var webpackServer = require('reapp-pack/webpackServer');

webpackServer(config, {
  port: 3011,
  debug: true,
  hot: true
});
```

### Options

See `./index.js`.
## reapp-server

reapp-server provides express and webpack servers that work together to serve
a reapp app.

reapp-server takes in options that it uses to build the webpack config. By default
it runs in development mode and looks for a /config/config.development.js file to
determine options. It includes default configs for development and production though.

See `./webpack/config.*.js` for the default config files.

See `./webpack/make.js` for how to builds the webpack config.


### Options

```
mode: corresponds to config files, typically 'development' or 'production'
port: port to serve on, webpack server port by default is +1 of this
wport: optional, to specify custom webpack server work
staticPaths: array of strings, relative paths of where to serve static assets
dir: dir of where to serve app
debug: turn on debugging from webpack
hostname: set hostname to serve from, default 'localhost'
```

### TODO

- Work to be done getting isomorphic working again
- General organization, tests and code docs throughout
## reapp-routes

A small library for generating a tree representing routes that also map to paths.

This does two things: saves code and enforces consistency.

**Before reapp-routes**

```js
var App = require('./components/App');
var Sub = require('./components/app/Sub');
var OtherSub = require('./components/app/OtherSub');

module.exports =
  <Route handler={App} path="/">
    <Route name="sub" handler={Sub} />
    <Route name="otherSub" handler={OtherSub} />
  </Route>
```

**With reapp-routes**

```js
module.exports = routes(require,
  route('app',
    route('sub'),
    route('otherSub')
  )
)
```

The `routes` method reads in the object tree generated by `route` and determines
the path correspondingly. You can even customize it using the `dir` property on routes.
In the end, you end up with consistent directory structures that map to your routes,
less requires and code, and a simple routes file.

It does require Webpack or a bundle system that handles dynamic requires.

### Examples

Using react-router helpers:

```js
var { route, routes } = require('reapp-routes/react-router/generator');

module.exports = routes(require,
  route('app', '/', { dir: '' },
    route('kitchen', '/',
      route('controls'),
      route('modals'),
      route('popovers'),
      route('forms')
    ),
    route('viewer')
  )
);
```

Rolling your own:

```js
var React = require('react');
var { Route, DefaultRoute } = require('react-router');
var { route, routes } = require('react-router-generator');

module.exports = generate(routes(
  { dir: 'components/' },
  route({ name: 'app', path: '/', dir: '' },
    route('kitchen',
      route('controls'),
      route('modals'),
      route('popovers')
    )
  )
));

function generate(props) {
  props.children = props.children ? props.children.map(generate) : null;
  props.handler = require(props.handlerPath);

  return props.defaultRoute ?
    <DefaultRoute {...props} /> :
    <Route {...props} />;
}
```

Corresponing file tree, notice how `dir` affects nesting:

```text
/components
  /kitchen
    Controls.jsx
    Modals.jsx
    Popovers.jsx
  Kitchen.jsx
  App.jsx
```

### Todo
 - Document, tests

See the index.js for more in-code documentation.
## reapp-component

Component is a tiny, no-dependency library designed for top-down applications.

 It's essential a factory, that provides two things on it's factories:

  - Decorators through `addDecorator`
  - Dependency Injection through `addStatics`

So essentially Dependency Injection and Decorations.

In reapp it's optional, but we found it helpful when creating large apps, for
times when you want to add a mixin to every class, or have commonly used ones.
As well as for injecting stuff like stores, etc.

Because React apps use gradual controller-view -> view trees
DI is typically very simple and more akin to global variables. Decorators are helpful
for medium to large scale apps. They can help you have default mixins, and automate
other tasks you'd normally do all over the place.

### Usage

```js
var c1 = Component();

c1.addDecorator(spec => {
  spec.decorated = true;
  return spec;
});

c1.addStatics('hello', 'world');

assert(c1.hello === 'world');
assert(c1({}) === { decorated: true })
```
## reapp-platform

This library is for now the "glue" library for a few different pieces of reapp.
Ideally eventually this library could be phased out all together into smaller
ones, or moved into the other reapp pieces, respectively.

When you require this library it does two things:

- Enables touch events for React (this will be not necessary by React 1.0)
- Includes [reapp-object-assign](https://github.com/reapp/reapp-object-assign)
which gives you a polyfill to use Object.assign() in your app.

It also exports an object with:

- Env: { CLIENT: (true/false), SERVER: (true/false) }
- Helpers:
  - storePromise: pass in a store, and a function that takes in the store data and returns true or false, will resovle the promise when the condition returns true.
- Mixins:
  - RoutedViewListMixin: Provides a variety of helpers for use with react-router and ViewLists
  - storeRefreshMixin: pass in actions as arguments, will forceRefresh a React component when those actions happen.
## reapp-request

An early stage library (ie. unfinished) that wants to help package together a nice
isomorphic request module. For now there are a few options including
Superagent, request, and cujojs/rest.

Superagent works nicelly but doesn't have promise support, but there
is a good library superagent-bluebird-proimise. So for now we just extend
that.

The others also either bundle their own promise library or have separate
modules for them, but are bulky or tied to their promise library.

The goal here is to take the nice and small surface of Superagent with
superagent-bluebird-promise, and add on caching and offline support, eventually.
## reapp-reducer

Simple reducer for use with flux. Reduces an array or map into an array of objects with:
  { id, data, status }

Status is given first so we can allow currying, ex:

```js
var loadedReducer = reducer.bind(null, 'LOADED');

fetch(url).then(loadedReducer).then(store);
```

status is optional, default value is 'OK'

```js
assert(reducer([1]) === [{ id: 0, data: 1, status: 'OK' }]
```

## reapp-object-assign

Injects [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
into your apps.

Polyfill taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).