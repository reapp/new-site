title: "Announcing reapp-kit: Lowering the barrier to being productive in React"
date: 2015-03-31 12:05:28
tags:
---
Reapp launched just over a month ago and we've been overwhelmed by the response.
We've gotten [thousands of stars on Github](https://github.com/reapp/reapp), pushed [hundreds
of updates]() across all our modules. We published [a getting started tutorial on Scotch.io](https://scotch.io/tutorials/make-a-mobile-app-with-reactjs-in-30-minutes).
We added new components, a more accurate [iOS theme](http://reapp.io/), support for React 0.13
(and [context-based themes](http://reapp.io/docs-themes.html)), a [Hacker News app](https://itunes.apple.com/us/app/hacker-news-by-reapp/id972297110?mt=8),
and most improtantly, a whole bunch of [documentation](http://reapp.io/ui.html).

All this to say, we're moving fast. Reapp is still a work in progress, but
we want to keep things moving fast. So today, we're releasing reapp-kit in beta.

### What is reapp-kit?

Reapp-kit unifies all the reapp components to make building apps way, way simpler.

### Why

When building reapp, one of the biggest goals was to keep things cleanly separated.
React is still young, and no "best" practices have won out yet. In 2015, people
want to move fast, but they all have different requirements.

Originally, we solved this by gluing our [8 different user-facing packages](http://github.com/reapp)
with our CLI scaffolding. It greatly simplified startup, but building the app still
took too much work to put it all together.