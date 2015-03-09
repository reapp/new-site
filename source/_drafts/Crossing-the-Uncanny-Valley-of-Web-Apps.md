title: Crossing the Uncanny Valley of Web Apps
tags:
---
Hybrid apps are in a unique position today. Any developer paying
attention to the drama surrounding them since the iPhone first came out
with web-apps in 2007 (and native in 2008), as read a number of articles
from

Let's take a quick look

### Web Workers and Transferrable Objects

Our first taste of threading in JS came from Web Workers. They gave us
lightweight threads but with costs. Basically, you can't access the DOM.
But another big downside of using them is that data you send between them
is not shared, it's copied. On mobile, this can mean hundreds of millisecods of
delay when dealing with passing non-trivial amounts of data.

That's where Transferrable Objects come in handy. They are supported by all
modern browsers and you can [read more on them in this post](http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast).
Basically, they let you pass data by reference (without having to copy it).

### Better parallel JavaScript

Web Workers with their limitations don't quite get us all the way there.
What we'd have ideally is some form of [shared immutable structures](https://github.com/sebmarkbage/ecmascript-immutable-data-structures).

That, along with another up and comined idea of [UI Workers]() would finally
get us to avoid the dreaded slowdowns you see when doing CPU-intensive work
while trying to animate a user interface.

### Apple needs to improve Safari and open iOS to 3rd party browsers

It's hard to argue that Safari hasn't fallen behind dramatically in the
browser arena as of late. Slow to adopt features have made it a pain for
implementing new technology.

There are some huge bugs in the current WebViews in Safari like JavaScript painting
being delayed during scrolls that prevents proper touch event handling, and
touch inputs being offset completely.

They've been accused of [holding back web standards](http://arstechnica.com/tech-policy/2011/12/is-apple-is-using-patents-to-hurt-open-standards/).
Flebox can bring the rendering engine to it's knees, contentEditable, Shadow DOM,
WebRTC don't work properly. [Pointer Events](http://timkadlec.com/2015/02/apples-web/)
is held up (more reading [here](https://news.ycombinator.com/item?id=9106511) and [here](https://code.google.com/p/chromium/issues/detail?id=162757)).
Apple even removed support for the High Resolution Time API in 8.1.

Then there's the issues with WebViews on iOS. After years of lagging behind
with a limited non-JIT engine, Apple announced WKWebView's for iOS 8. Finally,
a fast JIT for homescreen/hybrid apps! Only, they never really delivered.

As they stand now there are showstopper bugs that have gone unfixed for three minor
releases. Not only that, but in 8.3, developers are reporting even the speed gains
we desperately needed with WKWebViews have now regressed!

Finally, their developer tools are horribly slow. Debugging a JavaScript app
brings Safari to it's knees, requiring restarts after every Timeline recording
and poor support for Source Maps.

But beyond the feature-set, this all stems from a bigger issue. Browsers need competition.
We need to learn from the history. Competition is necessary, and we don't want another
IE6 nightmare. Let's collectively start pushing apple Apple to open up their
platform. I'm positive the Google and Mozilla teams would be happy to ship their
own engines on iOS, and we'd all be better off for it.

### Native API's should be a priority for browsers

I'll say something that may not be a very popular opinion: I think Cordova does
an amazing job with their plugin platform. Installing is a breeze, and their goals
of designing upstreamable API's often work very well. The problem is, actually getting
them implemented.

We can hope that ChomeOS (and FirefoxOS) will help in this regard.

One good example is the lack of access for the iOS text selection interface.
Want to react to user selections of text programatically? [Good luck](http://stackoverflow.com/questions/11300590/how-to-captured-selected-text-range-in-ios-after-text-selection-expansion).

### Gesture interaction needs some love

This ties into the ongoing Pointer Events controversy,
but the mobile needs better ways of handling gestures and multi-touch interactions.
This could even be as simple as better libraries meant for handling these sort of
things. Things like [interact.js](http://interactjs.io/) and [hammer.js](http://hammerjs.github.io/)
make attempts, and there are rumors that React Native is working on a JS solution
for their own purposes that could be backported to the web.

### All that to say...

This post may seem like a long rant at the big companies on how they're handling
the web. In my mind, it's impossible to pin a motive on a lot of what they do,
there are certainly people pushing in different directions even the small teams
working on the web at each company.

All this really is, is another attempt to bring more light to the current status.
We all want the web to get better. We want it to be faster, more flexible, and
to be full featured enough to write apps comfortably across all platforms.