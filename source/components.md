layout: docs
title: components
---
## Alert

Show an alert banner at the top of the View.

```
propTypes: {
  children: React.PropTypes.node
}
```

## Badge

A badge is used on lists or over icons and bars for notifications of numbers usually.

```
propTypes: {
  children: React.PropTypes.node
}
```
## Bar

Bars attach to an edge of the screen, as given by position.
Bars contain icons and text, usually as a header and navigation.
See TitleBar for a specific usage of a bar designed for View titles.

A bar will automatically wrap it's children with BarItem, but you can
manually use BarItem if you'd like to customize them.

```
propTypes: {
  // one of text, icon, icon-text, icon-text-right
  display: React.PropTypes.string,

  // props to pass to each BarItem child
  barItemProps: React.PropTypes.object,

  // attach to which side of screen
  position: React.PropTypes.string,

  // which BarItem to pass active prop
  activeIndex: React.PropTypes.number,

  // automatically wrap children with BarItem
  wrap: React.PropTypes.bool
},
```

## BarItem

An item in the Bar. Can be accessed as Bar.Item

- `children` used for text
- `icon` string or element
- `display`:
  - text: Text only
  - icon: Icon only
  - icon-text: Icon above text
  - icon-text-right: Icon left of text

```
propTypes: {
  icon: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  iconProps: React.PropTypes.object,
  children: React.PropTypes.node,
  display: React.PropTypes.oneOf([
    'text', 'icon', 'icon-text', 'icon-text-right'
  ]),
  active: React.PropTypes.bool
}
```

## Button

Buttons are buttons! Can be placed in a ButtonGroup.
Use onTap to add tap events.

```
propTypes: {
  // pass properties to Icon
  iconProps: React.PropTypes.object,

  // SVG icon
  icon: React.PropTypes.element,

  // no visual chrome added
  chromeless: React.PropTypes.bool,

  // Extend to fit screen when inside View
  fullscreen: React.PropTypes.bool,

  // Fully rounded corners
  rounded: React.PropTypes.bool,

  // Filled type button (no borders)
  filled: React.PropTypes.bool,

  // Color of button
  color: React.PropTypes.string,

  // Text color
  textColor: React.PropTypes.string,

  // Disabled look / no tap
  inactive: React.PropTypes.bool,

  // Props used for special display
  isInTitleBar: React.PropTypes.bool,
  isInViewList: React.PropTypes.bool,
}
```


## ButtonGroup

Also accessible as Button.Group

A button group manages a list of buttons. Places them together.
It can pass properties down to the children buttons as well to avoid
code duplication.

```
propTypes: {
  children: React.PropTypes.node,
  buttonProps: React.PropTypes.object
}
```
## Card

Simple Card element.

```
propTypes: {
  title: React.PropTypes.string,
  children: React.PropTypes.node
}
```
## Chat

Contains a list of ChatItems for use in messaging interfaces.

```
propTypes: {
  // pass props to ChatItem
  itemProps: React.PropTypes.object,

  // auto wrap children with ChatItem
  wrap: React.PropTypes.bool
},
```

## ChatItem

Also accessible as Chat.Item.  A chat bubble for use in messaging interfaces.

```
propTypes: {
  // Text name for chat bubble
  name: React.PropTypes.string,

  // Date on chat bubble
  date: React.PropTypes.string,

  // Image for chat bubble
  image: React.PropTypes.node,

  // Belongs to user (shown on right side)
  own: React.PropTypes.bool,

  // No decoration on chat bubble
  plain: React.PropTypes.bool
}
```

## Checkbox

Checkbox is used in forms, passes it's props on to an `<input type="checkbox" />`.

```
propTypes: {
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool
}
```

## Container

A row in a flexbox Grid.

```
propTypes: {
  pad: React.PropTypes.bool,
  col: React.PropTypes.bool,

  // wrap in Block automatically
  wrap: React.PropTypes.bool
}
```

## Dots

Dots are the equivalent of those used in the homescreen in iOS.
Used to track location within a list of views.

```
propTypes: {
  // Total dots
  total: React.PropTypes.number.isRequired,

  // Index of active dot
  active: React.PropTypes.number.isRequired
}
```

## Drawer

A panel that slides in from the side of the screen, and can be dragged back out.

- `from` which side it comes from.
- `translate` pass in an object with { x: (number: 0-100) }
- `behavior` pass in object with translate objects for all the from props
- `closed` toggle open or closed.
- `touchableProps` will be passed down to it's internal touchableArea
(useful for disabling or changing the area).
- `onClose` calls a callback when closed by used.


```
propTypes: {
  behavior: React.PropTypes.object,
  translate: React.PropTypes.object,
  from: React.PropTypes.oneOf([
    'left', 'right', 'top', 'bottom'
  ]),
  touchableProps: React.PropTypes.object,
  onClose: React.PropTypes.func,
  open: React.PropTypes.bool,
  dragger: React.PropTypes.bool,
  draggerWidth: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}
```

## Gallery

Displays images in a swipeable gallery.

```
propTypes: {
  images: React.PropTypes.array.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  onClose: React.PropTypes.func,
  animationDuration: React.PropTypes.number,
  animations: React.PropTypes.object
}
```

## Grid

Allows you to easily access Container and Block through Grid.Container and
Grid.Block.

## Icon
We've taken the [flaticon](http://www.flaticon.com/packs/ios7-set-lined-1)
set of icons and normalized their names and styling. SVG gives you
crisp edges in your interface. But, you can also use your own icon set.

Be sure to include proper CC3 attribution when using these.

- `size` number for width and height.
- `path` path to icon, defaults to the svg kit
- `isInTitleBar` used internally
- `svgProps` to pass to the svg

```
propTypes: {
  // width x height in pixels
  size: React.PropTypes.number,

  // an SVG file
  file: React.PropTypes.string,

  // props passed to svg
  stroke: React.PropTypes.number,
  shapeRendering: React.PropTypes.string,
  viewBox: React.PropTypes.string,
  crisp: React.PropTypes.bool,

  // internal props used for special styles
  isInTitleBar: React.PropTypes.bool,
  isInViewList: React.PropTypes.bool
}
```

## Input

An input, much like HTML input.

## Label

For use in forms.

```
propTypes: {
  title: React.PropTypes.string
}

```

## List

Parent for use with ListItem.
Also accepts title for auto-adding Title components before.

- `type` so far, just 'inset' is an option
- `nowrap` don't wrap ListItem around components automatically


```
propTypes: {
  // pass props to List.Item
  itemProps: React.PropTypes.object,

  // List title
  title: React.PropTypes.node,

  // Automatically wrap children with List.Item
  wrap: React.PropTypes.bool,

  // Don't add padding
  nopad: React.PropTypes.bool
}
```

## ListItem

Accessible as List.Item.
Takes a variety of properties for constructing lists.

```
propTypes: {
  // displayed in bold at the top
  title: React.PropTypes.node,

  // aligns to the right of title, for badges, time, etc
  titleAfter: React.PropTypes.node,

  // lighter sub title
  titleSub: React.PropTypes.node,

  // place an icon or element before the item
  before: React.PropTypes.node,

  // place an icon or element after the item
  after: React.PropTypes.node,

  // wrap an element around the item, good for links
  wrapper: React.PropTypes.node,

  // show an icon indicating it's linked
  icon: React.PropTypes.bool,

  // don't add padding
  nopad: React.PropTypes.bool
}
```

## Menu
An alert that allows user to confirm, or be prompted for options.

- `type` of 'alert' (just shows ok), `prompt` or `confirm` (ok, cancel).
- `animationDuration` ms for animation to run

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

## Modal

Displays a modal above current content.

```
propTypes: {
  open: React.PropTypes.bool,
  type: React.PropTypes.oneOf([
    'alert', // OK
    'confirm' // Cancel | OK
  ]),
  animationDuration: React.PropTypes.number,
  animations: React.PropTypes.object,
  onConfirm: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onClose: React.PropTypes.func
}
```


## Popover
A menu that appears over content, accepts an array of children to
be used as the menu items.


```
propTypes: {
  // element the popover is pointing towards
  target: React.PropTypes.object.isRequired,

  // show it as open
  open: React.PropTypes.bool,

  // pad in px towards edge of strings
  edgePadding: React.PropTypes.number,

  // size of arrow
  arrowSize: React.PropTypes.number,

  // after close event
  onClose: React.PropTypes.func,
  animationDuration: React.PropTypes.number,
  animations: React.PropTypes.object
}
```

## Radio

A standard form radio button.

## SearchBar

A bar that will automatically appear under TitleBars when in a view.
Contains an input that you can pass props to directly.

## TextArea

A form textarea.

## Title

Accepts children, renders as a title for groups of content in views.

## TitleBar

A special type of bar that is used within views as the title.
Handles a variety of use cases for positioning content and animations.

- `width` automatically set to window by default
- `height` adjust height from default

One of:
- `left` content on the left, handles icon animations for you
- `right` content on the right, handles icon animations for you
- `children` content in the middle.

or just use `children` with a ternary array.

```
propTypes: {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  left: React.PropTypes.node,
  right: React.PropTypes.node,
  transparent: React.PropTypes.bool,

  isInViewList: React.PropTypes.bool,

  // attach to side of screen
  attach: React.PropTypes.string
}
```

## InputArray

An array of inputs component for reapp-ui

### Usage

For an array of inputs:

```javascript
import { React, Reapp, InputArray } from 'reapp-kit';
export class chooseColor extends React.Component {
  constructor(props, context) {

    this.styles = {
      phoneInputContainerStyles: {
        maxHeight: '120px',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',
      },
      phoneInputStyles: {
        color: "",
      }
    }

    var owner = {};
    var owner.phoneNumbers = [
      {number: '3175551234'},
      {number: '3175559191'},
      {number: '3175559134'}
    ];

    var phoneArray = owner.phoneNumbers.map((item, index) => {
      return ({
        defaultValue: item.number,
        disabled: false,
        validator: 'phone',
        type: 'tel',
      })
    });

    this.setState({
      phoneArray: phoneArray,
    });

  }

  updatePhoneArray(phoneArray) {
    this.setState({
      phoneArray: phoneArray,
    });
  }

  addPhoneArray(phoneArray) {
    var addedIndex = phoneArray.length - 1;
    React.findDOMNode(this.refs.phoneInputArray.refs.inputArrayInputs.refs[phoneArray[addedIndex].inputName]).focus();
  }

  render(
    <InputArray ref="phoneInputArray"
                inputs={this.state.phoneArray}
                disabled={false}
                inputsCb={this.updatePhoneArray}
                inputContainerStyles={this.styles.phoneInputContainerStyles}
                inputStyles={this.styles.phoneInputStyles}
                defaultValidator="phone"
                addInputCb={this.addPhoneArray}
                addInputChromeless={true}
                addInputIcon={addInputIcon}
                addInputTextStyles={this.styles.addPhoneInputTextStyles}
                addInputText="Add Number"
                addInputType="tel" />
  );
}
```

### API

#### InputArray(props)

Type: React Component

Basic InputArray input list.

##### props.inputs

Type: `Array of Objects`
Default: []
Allowed Keys: `defaultValue`, `disabled`, `validator`, `type`

Pass in html to be shown for each input array item into the "defaultValue" property.

##### props.disabled

Type: `Bool`

Indicates whether the input array should be disabled or enabled (for read only/editable).

##### props.inputsCb

Type: `Func`

A function to run on the returned input array. This would be a good place to set state for your input array.

##### props.phoneInputContainerStyles

Type: `Object`

An object containing custom styles for the container element of the input array.

##### props.inputStyles

Type: `Object`

An object containing custom styles for the input elements of each item in the input array.

##### props.defaultValidator

Type: `String`

Use a default validation method instead of a seperate validation for each input element.

##### props.addInputCb

Type: `Function`

Callback to perform UI changes once the input array has updated.

##### props.addInputChromeless

Type: `Bool`

Ability to make the input elements chromeless.

##### props.addInputIcon

Type: `Object`

Add an image to the "New Input" button.

##### props.addInputTextStyles

Type: `Object`

Style the "New Input" button.

##### props.addInputType

Type: `String`

Specify a type for the input.

## Typeahead

A type-ahead/autocomplete component for reapp-ui

### Usage

For a Typeahead input:

```javascript
import { React, Reapp, Typeahead } from 'reapp-kit';
export class chooseColor extends React.Component {
  constructor(props, context) {

    this.colors = [
      { inListElement: '<div>Apricot</div>', inputDisplayText: 'Apricot', value: 0 },
      { inListElement: '<div>Beige</div>', inputDisplayText: 'Beige', value: 1 },
      { inListElement: '<div>Black</div>', inputDisplayText: 'Black', value: 2 },
      { inListElement: '<div>Blonde</div>', inputDisplayText: 'Blonde', value: 3 },
      { inListElement: '<div>Blue</div>', inputDisplayText: 'Blue', value: 4 },
      { inListElement: '<div>Blue Merle</div>', inputDisplayText: 'Blue Merle', value: 5 },
      { inListElement: '<div>Brindle</div>', inputDisplayText: 'Brindle', value: 6 }
    ];
  }

  render(
    <Typeahead
      ref="color"
      disabled={false}
      name="colorTypeahead"
      placeholder='Color'
      className="flex colorTypeahead"
      inputStyles={this.styles.inputStyles}
      listStyles={this.styles.colorTypeaheadListStyles}
      allowCustomValues={true}
      staticCustomValue={null}
      defaultValue={this.state.colorActive}
      customValue=""
      options={this.colors}
      maxVisible={0}
      onOptionSelected={this.colorSelected}
      clearOnOptionSelected={false}/>
  );
}
```

### API

#### Typeahead(props)

Type: React Component

Basic Typeahead input and results list.

##### props.options

Type: `Array of Objects`
Default: []
Allowed Keys: `inListElement`, `inputDisplayText`, `value`

Pass in html/jsx to be shown for each list item into the "inListElement" property, pass in what should be shown in the Typeahead input box into the "inputDisplayText" property, and pass in the value that gets sent back into the "value" property of each array element.
* Note: You can pass a single value, an array or an object into the "value" property, and it gets sent as the first parameter of the callback function defined in "onOptionSelected".

##### props.defaultValue

Type: `String`

A default value used when the component has no value. If it matches any options a option list will show.

##### props.customClasses

Type: `Object`

An object of classes to be applied to the Typeahead input box.

##### props.inputStyles

Type: `Object`

An object of styles to be applied to the Typeahead input box.

##### props.optionStyles

Type: `Object`

An object of styles to be applied to each Typeahead option shown.

##### props.maxVisible

Type: `Number`

Limit the number of options rendered in the results list.

##### props.listStyles

Type: `Object`

An object containing custom styles for the list of elements that is shown in the Typeahead.

##### props.placeholder

Type: `String`

Placeholder text for the Typeahead input.

##### props.onKeyDown

Type: `Function`

Event handler for the `keyDown` event on the Typeahead input.

##### props.onBlur

Type: `Function`

Event handler for the `blur` event on the Typeahead input.

##### props.onFocus

Type: `Function`

Event handler for the `focus` event on the Typeahead input.

##### props.onOptionSelected

Type: `Function`

Event handler triggered whenever a user picks an option.

##### props.clearOnOptionSelected

Type: `bool`

Depict if the Typeahead input box should be cleared when an option is selected.

##### props.disabled

Type: `bool`

Depict if the Typeahead input box should be disabled, and only show default value.

##### props.filterOption

Type: `String` or `Function`

A function to filter the provided `options` based on the current input value. For each option, receives `(inputValue, option)`. If not supplied, defaults to [fuzzy string matching](https://github.com/mattyork/fuzzy).

If provided as a string, it will interpret it as a field name and fuzzy filter on that field of each option object.

##### props.allowCustomValues

Type: `Boolean`

Determines whether to show a custom value such as a static option at the end of the list of options that is always shown.

##### props.staticCustomValue

Type: `String`

Set the default customValue display property.

##### props.inputProps

Type: `Object`

Set any additional props that will be included on the Typeahead input.