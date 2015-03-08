layout: docs
title: components
---
### Badge

A badge is used on lists or over icons and bars, for notifications
of numbers usually.

Props:
```
propTypes: {
  children: React.PropTypes.node
}
```
### Bar

Bars attach to an edge of the screen, as given by position.
Bars contain icons and text, usually as a header and navigation.
See TitleBar for a specific usage of a bar designed for View titles.

A bar will automatically wrap it's children with BarItem, but you can
manually use BarItem if you'd like to customize them.

Props:
```
propTypes: {
  barItemProps: React.PropTypes.object,
  position: React.PropTypes.string,
  activeIndexIndex: React.PropTypes.number,
  nowrap: React.PropTypes.bool
}
```
### BarItem

Item on a Bar.

- `children` used for text
- `icon` string or element
- `display`:
  - text: Text only
  - icon: Icon only
  - icon-text: Icon above text
  - icon-text-right: Icon left of text

Props:
```
propTypes: {
  icon: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  iconProps: React.PropTypes.object,
  children: React.PropTypes.string,
  display: React.PropTypes.oneOf([
    'text', 'icon', 'icon-text', 'icon-text-right'
  ]),
  active: React.PropTypes.bool
}
```
### Button

Buttons are buttons! Can be placed in a ButtonGroup.

Props:
```
propTypes: {
  iconProps: React.PropTypes.object,
  icon: React.PropTypes.element,
  chromeless: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  active: React.PropTypes.bool
}
```
### ButtonGroup

A button group manages a list of buttons. Places them together.
It can pass properties down to the children buttons as well to avoid
code duplication.

Props:
```
propTypes: {
  children: React.PropTypes.node,
  buttonProps: React.PropTypes.object
}
```
### Card

**In Progress**

Unfinished, will be used for both regular and tinder-style swipe cards.

Props:
```
propTypes: {
  title: React.PropTypes.string,
  children: React.PropTypes.node
}
```
### Chat

**In Progress**

Contains a list of ChatItems for use in messaging interfaces.

Props
```
propTypes: {
  itemProps: React.PropTypes.object,
  wrap: React.PropTypes.bool
}
```
### ChatItem

**In Progress**

A chat item for use in messaging interfaces.

Props:
```
propTypes: {
  name: React.PropTypes.string,
  date: React.PropTypes.object,
  avatar: React.PropTypes.node,
  own: React.PropTypes.bool
}
```
### Checkbox

Checkbox is used in forms, passes it's props on to an `<input type="checkbox" />`.

Props:
```
propTypes: {
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool
}
```
### Dots

Dots are the equivalent as used in the homescreen in iOS.
Used to track location within a list of views.

Props:
```
propTypes: {
  total: React.PropTypes.number.isRequired,
  active: React.PropTypes.number.isRequired
}
```
### Drawer

A panel that slides in from the side of the screen, and can be dragged
back out.

- `from` which side it comes from.
- `translate` pass in an object with { x: (number: 0-100) }
- `behavior` pass in object with translate objects for all the from props
- `closed` toggle open or closed.
- `touchableProps` will be passed down to it's internal touchableArea
(useful for disabling or changing the area).
- `onClose` calls a callback when closed by used.


Props:
```
propTypes: {
  behavior: React.PropTypes.object,
  translate: React.PropTypes.object,
  from: React.PropTypes.oneOf([
    'left', 'right', 'top', 'bottom'
  ]),
  closed: React.PropTypes.bool,
  touchableProps: React.PropTypes.object,
  onClose: React.PropTypes.func
}
```

### Icon
We've taken the [flaticon](http://www.flaticon.com/packs/ios7-set-lined-1)
set of icons and normalized their names and styling. SVG gives you
crisp edges in your interface. But, you can also use your own icon set.

Be sure to include proper CC3 attribution when using these.

- `size` number for width and height.
- `path` path to icon, defaults to the svg kit
- `isInTitleBar` used internally
- `svgProps` to pass to the svg

Props:
```
propTypes: {
  size: React.PropTypes.number,
  path: React.PropTypes.string,
  name: React.PropTypes.string,
  color: React.PropTypes.string,
  stroke: React.PropTypes.number,
  isInTitleBar: React.PropTypes.bool,
  shapeRendering: React.PropTypes.string,
  svgProps: React.PropTypes.object
}
```
### Label
For use in forms.

Props:
```
propTypes: {
  title: React.PropTypes.string
}
```
### List
Parent of ListItem, will automatically wrap an array with ListItem
elements. Also accepts title for auto-adding Title components before.

- `type` so far, just 'inset' is an option
- `nowrap` don't wrap ListItem around components automatically


Props:
```
propTypes: {
  type: React.PropTypes.string,
  itemProps: React.PropTypes.object,
  title: React.PropTypes.node,
  nowrap: React.PropTypes.bool,
  nopad: React.PropTypes.bool
}
```
### ListItem
Takes a variety of properties for constructing lists.

- `title` displayed in bold at the top
- `titleAfter` aligns to the right of title, for badges, time, etc
- `titleSub` lighter sub title
- `before` place an icon or element before the item
- `after` place an icon or element after the item
- `wrapper` wrap a link around the item
- `underLeft` not implemented
- `underRight` not implemented
- `noicon` by default, listitems with links have an arrow (&gt;)
- `nopad` remove default padding

Props:
```
propTypes: {
  title: React.PropTypes.node,
  titleAfter: React.PropTypes.node,
  titleSub: React.PropTypes.node,
  before: React.PropTypes.node,
  after: React.PropTypes.node,
  wrapper: React.PropTypes.node,
  underLeft: React.PropTypes.node,
  underRight: React.PropTypes.node,
  noicon: React.PropTypes.bool,
  nopad: React.PropTypes.bool
}
```
### Menu
An alert that allows user to confirm, or be prompted for options.

- `type` of 'alert' (just shows ok), `prompt` or `confirm` (ok, cancel).
- `animationDuration` ms for animation to run

Props:
```
propTypes: {
  type: React.PropTypes.string,
  animationDuration: React.PropTypes.number,
  animations: React.PropTypes.object,
  handleConfirm: React.PropTypes.func,
  handleCancel: React.PropTypes.func,
  handleClose: React.PropTypes.func
}
```
### Popover
A menu that appears over content, accepts an array of children to
be used as the menu items.


Props:
```
propTypes: {
  open: React.PropTypes.bool,
  edgePadding: React.PropTypes.number,
  arrowSize: React.PropTypes.number,
  handleClose: React.PropTypes.func,
  animationDuration: React.PropTypes.number,
  animations: React.PropTypes.object
}
```
### PopoverLink
Triggers a menu.

Props:
```

```
### Radio
A standard form radio
### SearchBar
A bar that will automatically appear under TitleBars when in a view.
Contains an input that you can pass props to directly.

Props:
```

```
### Title
Accepts children, renders as a title for groups of content in views.
### TitleBar
A special type of bar that is used within views as the title.
Handles a variety of use cases for positioning content and animations.

- `width` automatically set to window by default
- `height` adjust height from default

One of:
- `left` content on the left, handles icon animations for you
- `right` content on the right, handles icon animations for you
- `children` content in the middle.

or just use `children` with a three-arity array.

Props:
```
propTypes: {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  animations: React.PropTypes.object,

  // either this, with children node
  left: React.PropTypes.node,
  right: React.PropTypes.node,

  transparent: React.PropTypes.bool
}
```