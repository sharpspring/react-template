# Style Guide

## JavaScript

We follow [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

`eslint` runs the lint rules, so make sure your text editor
has an [eslint plugin](http://eslint.org/docs/user-guide/integrations).

## Github

We write [semantic git messages](https://seesparkbox.com/foundry/semantic_commit_messages)
```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

## State

State is managed by [Redux](http://redux.js.org/)

### Modules
Our redux code follows the [Ducks proposal](https://github.com/erikras/ducks-modular-redux).

A module...
* MUST `export default` a function called `reducer()`
* MUST `export` its action creators as functions
* MUST have action types in the form `npm-module-or-app/reducer/ACTION_TYPE`
* MAY `export` its action types as `UPPER_SNAKE_CASE`, if an external reducer needs to listen for them, or if it is a published reusable library

### ImmutableJS

All `state` objects must be an instance of an ImmutableJS type.

[ImmutableJS](https://facebook.github.io/immutable-js/) is a library for immutable persistent data structures.

This library allows for better performance and an efficient way to determine if the Redux state has changed using referential equality checks (`assert(map1.equals(map2) === true);`)

## Components

Do not extend components.
Instead, use composition

```jsx
// bad
class Foo extends Bar { }

// good
const Foo = () => {
  <Bar />
}
```

Learn more:
* https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.5vgyey54q
* https://facebook.github.io/react/docs/composition-vs-inheritance.html
