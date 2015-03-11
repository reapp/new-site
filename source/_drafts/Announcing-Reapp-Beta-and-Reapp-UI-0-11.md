title: "Announcing Reapp Beta and Reapp UI 0.11"
tags:
---
Today I'm incredibly proud to announce the exit of alpha for Reapp UI,
along with the 0.11 release of reapp-ui.

We've come an incredibly long way from the announcement two months ago.
In that short time, our in house team has built three app store
applications. We've integrated with Cordova, and then integrated that with
Amazon Login, Firebase, and a whole host of other endpoints.

We've added lots of new components:

- Gallery
- Chat
- Swiper (Swipe for options on lists)
- Drawer ViewLists

If you're curious as to more of what's new since launch, here's the full
changelog:

### reapp
- 6to5 -> Babel, fixed multiple CLI install issues
- Can change devtool from CLI using -t --tool
- Can change hostname from CLI -h --host
- Can bind to different port with -h --bind
- reapp build [platform] (ios for now)
- separate assets for platforms /assets/${platform}/index.html
- shared assets in /assets/shared/
- reapp debug
- reapp new [repo/scaffold]

reapp-ui
- Cordova builds
- Animation fixes
- Dynamically change ViewList at runtime
  - Switch animations between Views
  - Works with react-router children
- Scroller performance boost
  - remove requestAnimationFrame polyfill
  - speed up dropped frames logic
- iOS theme pixel-perfect improvements
  - double-tap scroll to top
  - retina half pixel line support
  - view animation tweaks
  - perfect colors
- Tappable improvements
  - ignore scroll stopping
  - ignore slow scrolling (non-taps)
  - maxTapTime
  - delayUntilActive
  - delayUntilInactive
  - passprops
  - available on most components
- Gallery component
- Chat components
- Swiper
  - Swipe to delete list items
- Inline SVG icons
  - no external assets necessary in builds
  - performance
  - fast builds
  - WKWebView compatability
- file: require() icons simplified
- WKWebView support
- AnimationLoop component
- isAnimatingSafe helper
- waitForAnimations lib

reapp-pack
- need to specify 'platform' key
- working platform
- babel
- webworker support
- newwatchingplugin
- noerrors with react-hot-loader

reapp-routes
- cordova fixes for historylocation
- default routes now work