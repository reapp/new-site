layout: docs
title: views
---
### DottedViewList

A side-by-side view list, with Dots at the top that track
the position of the views inside, similar to the Twitter App.

Props:
```
propTypes: {
  scrollToStep: React.PropTypes.number,
  disableScroll: React.PropTypes.bool,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  onTouchStart: React.PropTypes.func,
  onTouchEnd: React.PropTypes.func,
  onViewEntering: React.PropTypes.func,
  onViewEntered: React.PropTypes.func,
  onViewLeaving: React.PropTypes.func,
  onViewLeft: React.PropTypes.func,
  scrollerProps: React.PropTypes.object
}
```
### LayoutLeftNav

**In Progress**

Use at the top level of your app, above any ViewList or View.
Provides a slideout menu and passes the handle prop down to children.

Props:
```
propTypes: {
  behavior: React.PropTypes.object,
  sideWidth: React.PropTypes.number,
  sizeZIndex: React.PropTypes.number,
  drawerProps: React.PropTypes.object,
  handle: React.PropTypes.node,
  draggable: React.PropTypes.bool
}
```
### NestedViewList

This is the standard viewlist and for now mimics iOS style swipe from the edge
views.

Props:
```
propTypes: {
  scrollToStep: React.PropTypes.number,
  disableScroll: React.PropTypes.bool,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  onTouchStart: React.PropTypes.func,
  onTouchEnd: React.PropTypes.func,
  onViewEntering: React.PropTypes.func,
  onViewEntered: React.PropTypes.func,
  onViewLeaving: React.PropTypes.func,
  onViewLeft: React.PropTypes.func,
  scrollerProps: React.PropTypes.object
}
```
### View

The base View class. Give it a `title` property to automatically had a titlebar.
When used inside a ViewList, it will be animated automatically.

Props:
```
propTypes: {
  title: React.PropTypes.node,
  index: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number,

  // add animations in view list
  isInViewList: React.PropTypes.bool,

  // offset of inner scroll area from top
  offsetTop: React.PropTypes.number,

  // offset of inner scroll area from bottom
  offsetBottom: React.PropTypes.number,

  animations: React.PropTypes.object,

  // pass inner div props (scrollable content)
  innerProps: React.PropTypes.object,

  // pass titlebar props
  titleBarProps: React.PropTypes.object,

  // pass overlay div props
  overlayProps: React.PropTypes.object,

  // place a node outside the inner pane
  after: React.PropTypes.node,

  // disable pointer events
  inactive: React.PropTypes.bool,

  // make the StaticContainer inside fullscreen
  fullscreen: React.PropTypes.bool,

  // see scrollTopable
  scrollTop: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}
```
### ViewList

By default the ViewList comes with no properties,
see the `/behaviors` folder for example properties you can use.

Props:
```
propTypes: {
  scrollToStep: React.PropTypes.number,
  disableScroll: React.PropTypes.bool,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  onTouchStart: React.PropTypes.func,
  onTouchEnd: React.PropTypes.func,
  onViewEntering: React.PropTypes.func,
  onViewEntered: React.PropTypes.func,
  onViewLeaving: React.PropTypes.func,
  onViewLeft: React.PropTypes.func,
  scrollerProps: React.PropTypes.object
}
```