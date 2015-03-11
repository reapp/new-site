title: "Simplify Flux with Immutable.js and Fynx"
date: 2015-03-11 12:05:28
tags:
---
It's not exactly easy getting into Flux. There's a lot of terminology, and a lot of power.
Not to mention all the different implementations. It's useful, but for someone new to
React it's a lot to take in.

Which is fine. Flux is really meant to solve problems for "big" apps.
When your UI is handling multiple events and transforming chunks of data.

In this article we'll explain how we got to using Fynx, and then show some example
code similar to how we used in in our [Hacker News app](https://github.com/reapp/hacker-news-app).

### Prelude

Nowadays, beyond rolling your own, there's a ton of libraries for Flux. From
[Fluxxor](http://fluxxor.com) to [Reflux](https://github.com/spoike/refluxjs) to
[Flummox](https://github.com/acdlite/flummox), each brings something unique.

At the time we were building our app Fluxxor seemed the best documented and supported.
But, it was still verbose. After a week, out of a desperate want to reduce all the boilerplate
we were writing, we extracted [a library on top of it](https://github.com/natew/Brawndo).
It was flexible, and it simplified things. But, now we were stuck with another dependency.

Then, came [Fynx](https://github.com/foss-haas/fynx).

See, around the same time as Flux was announced, we'd been reading into [Om](https://github.com/omcljs/om), [Omniscient](https://github.com/omniscientjs/omniscient)
and the recently released [Immutable.js](https://github.com/facebook/immutable-js).
Immutable structures are awesome, and cursors seemed awesomely simple.
But, you still want to coordinate your actions somehow.

With Fynx, we got just that, and nothing more.
Despite it's awkward ASCII diagram, it actually reduced Flux conceptually to a single thing: actions.
How? Lets take a look.

### Stores

Well, really just a store. Here's your entire store.js file, with Fynx:

    import { createCursorStore } from 'fynx';
    import { fromJS } from 'immutable';

    module.exports = createCursorStore(fromJS({
      dogIds: [],
      dogs: {}
    });

That's all. Use it's keys as you would normal Flux stores. There's no store methods, no waitFor, just a single cursor.

### Actions

The power of Fynx is in its actions. Our actions.js:

    import { createAsyncActions } from 'fynx';

    var Actions = createAsyncActions([
      'loadDogs'
    ]);

*Note: the async actions in Fynx just means it will chain with promises. It's nice in some cases, but not a requirement.*

And then, we can make our dogActions.js:

    import Actions from './actions';
    import store from './store';

    // we fetch the ordered array of dogs
    // then grab their individual data
    Actions.loadDogs.listen(opts =>
      getDogsListFromAPI(opts).then(res => {
        store().set('dogIds', res);
        getDogsData(res);
      })
    )

    function getDogsData(res) {
      res.map(id => {
        getDogAPI(id).then(dog => {
          store().setIn(['dogs', dog.id], dog)
        })
      })
    }

    function getDogsListFromAPI() {
      return Promise.resolve([1, 2, 3]);
    }

    function getDogAPI(id) {
      var data = {
        1: { id: 1, breed: 'Jack Russell' },
        2: { id: 2, breed: 'Shih Tzu' },
        3: { id: 3, breed: 'Pitbull' },
      }
      return Promise.resolve(data[id]);
    }

Some nice things about this:

- All our dog actions are in one place
- I can chain my actions together as much as needed
- Simple functions everywhere

### Linking it to React

In our top level Dogs class, lets grab our store and pass it down. We can also grab the store at any level of our app just by importing it.

    import store from './store';
    import Dog from './Dog';

    module.exports = React.createClass({
      render() {
        var dogIds = store().get('dogIds');

        return dogIds.map(id =>
          var dog = store().getIn(['dogs', id]);

          return <Dog data={dog} />;
        });
      });
    });

And lets say in our Dog component, we can either respond to data simply:

    this.props.data.set('name', 'Scruffy');

And our store will update, along with our UI. But, this isn't Flux. Lets say we add an action in our dogActions file that reverses our dog list. After we've added the action name in our actions.js we can do this:

    Action.reverseDogs.listen(() =>
      store().update('dogs', dogs => dogs.reverse())
    );

And anywhere in our React tree we could then call:

    import Actions from './actions';
    Actions.reverseDogs();

### shouldComponentUpdate

The final step is to optimize our components shouldComponentUpdate now that we have immutable data throughout our app. Omniscient gives us a really nice one that works out of the box with Immutable.js.

    import shouldComponentUpdate from 'omniscient/shouldupdate';

    React.createClass({
      shouldComponentUpdate,
      render() {
        //...
      }
    })

In [Reapp](https://reapp.io), I use [a decorator](https://github.com/reapp/reapp-component) so I don't have to manually mix it in on every class.

### In action

Want to see an app using this in production? Download it in the
[iOS app store](https://itunes.apple.com/us/app/hacker-news-by-reapp/id972297110?mt=8)
and check out [the code on GitHub](https://github.com/reapp/hacker-news-app).