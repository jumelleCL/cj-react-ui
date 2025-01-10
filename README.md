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

```js
<SimpleButton text="Click Me" textColor="white" backgroundColor="red" type="submit"/>
<SimpleButton text="Click me" textColor="#ddd" backgroundColor="#2a5736"/>
```

### Inputs

#### Input Simple

The input simple does not show a label at all the time, but only use a placehoder that you can modify by using the props `label` or `placeholder`.

```js
<InputSimple label="Name" type="password" colorText="red" color="black"/>
<InputSimple placeholder="Name" type="email"/>
```

#### Input with Label

```js
<InputLabel label="Name" type="password" colorText="red" color="black"/>
```
