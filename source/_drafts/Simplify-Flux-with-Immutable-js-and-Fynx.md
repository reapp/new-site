title: "Simplify Flux with Immutable.js and Fynx"
tags:
---
I'll be honest. While it only took me a couple weeks to be comfortable with React,
but quite a bit longer to do so with Flux. The diagrams, large UPPER_CASE objects,
the terminology... I knew it was powerful, but I wasn't going to use it until it was absolutely necessary.

Which is fine. Flux is really meant to solve problems for "big" apps.
When your UI is handling multiple events and transforming complex data. So, for some time
I just avoided it.

### Prelude

After a month of hacking, my app was ready.  I needed to fetch multiple things, put them together
in non-simple ways, and handle a variety of actions.
So, I looked at others' code, read more into Flux, and scoured the
libraries available.

Nowadays, there's so many implementation out there, but at the time there were
pretty much three choices: roll your own, use [Fluxxor](http://fluxxor.com), or use [Reflux](https://github.com/spoike/refluxjs).

At the time Fluxxor seemed the best documented and supported.
After a week, out of a desperate want to simplify all the code I was writing,
I ended up making [a library on top of it](https://github.com/natew/Brawndo).
It was flexible, and it simplified things. I was happy.

Then, I found [Fynx](https://github.com/foss-haas/fynx).

See, around the same time as Flux was announced, I had been reading into Om and the recently released Immutable.js.  Immutable structures seemed awesome, and cursors where awesomely simple. But, now that I understood it, I still wanted to use Flux for coordinating actions.

With Fynx, I got just that. Despite it's awkward ASCII diagram, it actually reduced Flux conceptually to me to a single thing: actions. How? Well, first, forget what you know about Flux.

### Stores

Here's your entire store.js file, with Fynx:

    import { createCursorStore } from 'fynx';
    import { fromJS } from 'immutable';

    module.exports = createCursorStore(fromJS({
      dogIds: [],
      dogs: {}
    });

That's it, just one store! Use it's keys as you would normal Flux stores. There's no store methods, no waitFor, just a single cursor.

### Actions

The power with Fynx, is in the actions. Our actions.js:

    import { createAsyncActions } from 'fynx';

    let Actions = createAsyncActions([
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
      let data = {
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

In our top level Dogs class, let's grab our store and pass it down. We can also grab the store at any level of our app just by importing it.

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

And let's say in our Dog component, we can either respond to data simply:

    this.props.data.set('name', 'Scruffy');

And our store will update, along with our UI. But, this isn't Flux. Let's say we add an action in our dogActions file that reverses our dog list. After we've added the action name in our actions.js we can do this:

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

### Example code

Want to see an app using this in production? Check out our
[HN app repo](https://github.com/reapp/hacker-news-app)
and download the
[iOS app](https://itunes.apple.com/us/app/hacker-news-by-reapp/id972297110?mt=8).

