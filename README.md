<h1 align="center">
  <img src="https://github.com/Danielkhakbaz/use-shared/blob/master/assets/use-shared-logo.jpeg" alt="use shared's logo" width="200">
  <br />
  <br />
  Use-Shared Hook
  <br />
  <br />
</h1>

## Installation

To install the **use-shared** package in your React project, use **npm** or **yarn**:

```jsx
npm install use-shared
```

<p align="center">or</p>

```jsx
yarn add use-shared
```

## Usage

### - Import SharedProvider

Begin by importing the **SharedProvider** component from the **use-shared** package:

```jsx
import { SharedProvider } from "@danielkhakbaz/use-shared";
```

### - Wrap Your App with SharedProvider

Wrap your React application's root component with the **SharedProvider** component. Pass an initial state object as a prop to the **SharedProvider**. This state object will be accessible throughout your entire application:

```jsx
const state = {
  name: "Danial",
  lastName: "Khakbaz",
  profession: "Front-end Engineer",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>
);
```

In any component within your application, import the **useShared** hook from **use-shared** to access the shared state provided by the **SharedProvider**:

```jsx
import { useShared } from "@danielkhakbaz/use-shared";

const App = () => {
  const { data, dispatch } = useShared();

  return (
    <div>{/* Access and modify shared state using data and dispatch */}</div>
  );
};
```

`data: This object represents the current state from the SharedProvider.`
<br />
`dispatch: This function allows you to update the shared state.`

### - Complete Example

- **_main.jsx_**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SharedProvider } from "@danielkhakbaz/use-shared";

const state = {
  name: "Danial",
  lastName: "Khakbaz",
  profession: "Front-end Engineer",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>
);
```

- **_App.jsx_**

```jsx
import { useShared } from "@danielkhakbaz/use-shared";

const App = () => {
  const { data, dispatch } = useShared();

  const handleClick = () => {
    dispatch({ ...data, profession: "Software Engineer" });
  };

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Profession: {data.profession}</p>
      <button onClick={handleClick}>Change Profession</button>
    </div>
  );
};

export default App;
```

## License

MIT

---

> <a href="https://danieloo.vercel.app/" target="_blank">danieloo.com</a> &nbsp;&middot;&nbsp; > <a href="https://github.com/Danielkhakbaz" target="_blank">Danial Khakbaz</a> &nbsp;&middot;&nbsp; > <a href="https://twitter.com/DanielKhakbaz" target="_blank">@danielkhakbaz</a> &nbsp;&middot;&nbsp;
