# CJ-REACT-UI

cj-react-ui is a React component library designed to simplify the creation of user interfaces. It provides pre-built, reusable components for rapid UI development, helping streamline your workflow and maintain consistency across projects.

## Installation

Install the package via npm:

`npm install cj-react-ui`

Or via yarn

`yarn add cj-react-ui`

## Usage

Just import the components and they are ready to use!

```tsx
import React from "react";
import { ButtonAnimated } from "cj-react-ui";

function App() {
  return (
    <div>
      <SimpleButton text="Click Me" />
    </div>
  );
}

export default App;
```

## Components

### Buttons

#### Simple Button

A basic button that allows customization of text, colors, and type.

Available Props:

- text (string): Button text
- textColor (string): Text color (e.g., "white", "#ddd").
- backgroundColor (string): Background color of the button.
- type (string): Button type (e.g., "submit", "button").

```js
<SimpleButton text="Click Me" textColor="white" backgroundColor="red" type="submit"/>
<SimpleButton text="Click me" textColor="#ddd" backgroundColor="#2a5736"/>
```

### Inputs

#### Input Simple

An input field that displays a placeholder based on the label or placeholder prop.

Available Props:

- label (string): Text used as a placeholder.
- placeholder (string): Placeholder text if label is not provided.
- type (string): Input type (e.g., "text", "password", "email").
- colorText (string): Color of the entered text.
- color (string): Background color of the input field.
- error (string): Error message displayed below the field.

```js
<InputSimple label="Name" type="password" colorText="red" color="black" error="Error message"/>
<InputSimple placeholder="Name" type="email"/>
```

#### Input with Label

Similar to InputSimple, but includes a persistent label above the field.

Available Props:

- Same props as InputSimple.

```js
<InputLabel label="Name" type="password" colorText="red" color="black" error="Error message"/>
```

### Loading's

#### Loading Simple

A basic loading indicator.

Available Props:

- color (string): Color of the indicator.

```js
<LoadingSimple color="black"/>
```

#### Loading Skeleton

A skeleton loader for placeholder content while loading elements.

Available Props:

- Currently does not support any props.

```js
<LoadingSkeleton/>
```

### ToolTip

A component to display additional information in a tooltip.

Available Props:

- info (string): Text displayed in the tooltip.
- color (string): Tooltip text color.
- size (number): Text size.

```js
<ToolTip info="hello world" color="white" size={20}/>
```

### CheckBox

#### Checkbox simple

A simple component with a box to check and a label.

Available Props:

- label(string): The text besides the box
- BorderColor(string): The color of the box
- TextColor(string): The color of the text put in label
- Color(string): The color of the fill in the box when it's checked

```js
<CheckboxSimple label="Check this" borderColor="black" textColor="red" color="#d34"/>
```
