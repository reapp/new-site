title: Crossing the Uncanny Valley of Web Apps
date: 2015-03-02 21:02:22
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

### Better Parallel JavaScript

Web Workers with their limitations don't quite get us all the way there.
What we'd have ideally is some form of [shared immutable structures](https://github.com/sebmarkbage/ecmascript-immutable-data-structures).

That, along with another up and comined idea of [UI Workers]() would finally
get us to avoid the dreaded slowdowns you see when doing CPU-intensive work
while trying to animate a user interface.

### Apple needs to fix Safari, and open their platform

It's hard to argue that Safari hasn't fallen behind dramatically in the
browser arena as of late. Slow to adopt features have made it a pain for
implementing new technology.  We've seen it recently with problems from
pointer events, to slow flexbox implementations.

Further, their developer tools fall short. Debugging a heavy JavaScript page
will bring Safari to it's knees. And the timeline can be so laggy it's
nearly impossible to debug. There are myriad bugs that go unfixed for months.

Finally, there's the issues with webviews on iOS. After years of lagging behind
with a limited non-JIT engine, Apple announced WKWebView's for iOS 8. Only,
they never really delivered them. As they stand now there are showstopper bugs
that have gone unfixed for three minor releases. Not only that, but in 8.3,
developers are reporting the speed gains with WKWebViews have gone completely!

But beyond the feature-set, there's a bigger issue. Browsers need competition.
We need to learn from the lessons of history and get Apple to open up their
platform. I'm positive the Google and Mozilla teams would be happy to ship their
own engines on iOS.

### Web browsers need to start adding in native API's

I'll say something that may not be a very popular opinion: I think Cordova does
an amazing job with their platform. Using plugins is a breeze, and their goals
of upstreaming the API's back into JS is a great plan. The problem is,
upstreaming of those API's just isn't happening.

One example I ran into recently is the ability to interact with the native iOS
text selection interface. You have no control or even knowledge when a user
goes to select text. Wan't to remove the overlays that come up when a users has
selected any of your text? Good luck with that.

### Gesture interaction needs some love

This ties into the ongoing [Pointer Events controversy](https://news.ycombinator.com/item?id=9106511),
but the mobile needs better ways of handling gestures and multi-touch interactions.
This could even be as simple as better libraries meant for handling these sort of
things. Things like [interact.js](http://interactjs.io/) and [hammer.js](http://hammerjs.github.io/)
make attempts, and there are rumors that React Native is working on a JS solution
for their own purposes that could be backported to the web.