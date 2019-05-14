# Intro

Learn React Router v4

## [history, location. match]

Every **view**, **component**, or whatever that’s wrapped by Router has these objects. `<Router />` does its job as an Higher Order Component and wraps your `components` or `views` and injects these three objects as **props** inside them.

### Match

> The `match` object contains information about how a `<Route path>` matched the `URL`.

- **params**: (object), key/value pairs parsed from the URL corresponding to the dynamic segments of the path

- **isExact**: (boolean), true if the entire URL was matched (no trailing characters)

- **path**: (string), the path pattern used to match. Useful for building nested routes. We’ll take a look at this later in one of the next articles.

- **url**: (string), the matched portion of the URL. Useful for building **nested links**.

### Location

> The `location` object represents where the app is **now**, where you want it to go, or even where it was.
```js
location: {
  hash: "";
  key: "9vexfr";
  pathname: "/Home";
  search: "";
  state: undefined;
}
```

You can create a custom object and use it:
```js
const locationX = {
  pathname: "/Topics/Topic4",
  state: { fromTopicList: true }
};
```
- `<Redirect to={locationX} />`
- `<Link to={locationX} />`
- `history.push(locationX)`

It’s also found on `history.location` but you shouldn’t use that because it’s **mutable**.


### History

> The `history` object allows you to manage and handle the **browser history** inside your **views** or **components**.

- **length**: (number), the number of entries in the history stack
- **action**: (string), the current action (PUSH, REPLACE or POP)
- **location**: (object), the current location
- **push(path, [state])**: (function), pushes a new entry onto the history stack
- **replace(path, [state])**: (function), replaces the current entry on the history stack
- **go(n)**: (function), moves the pointer in the history stack by n entries
- **goBack()**: (function), equivalent to go(-1)
- **goForward()**: (function,) equivalent to go(1)
- **block(prompt)**: (function), prevents navigation



## Resources
- [reacttrainning] (https://reacttraining.com/react-router/web/api/Route)