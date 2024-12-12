# jsonthrow
A small utility for JSON (parse and stringify) that follows error first approach inspired from golang.

# Installation

```
npm install jsonthrow
```

# usage

Example in a .ts file

```js
// example.ts file

import { jsonthrow } from "jsonthrow";

const data = {
  msg: "hello word",
};

function test() {
  const [result, error] = jsonthrow.stringify(data);

  // at this point result is either null or string
  if (error) {
    // do something
    return;
  }

  // since we checked for error result is string at this point
  console.log(result);

  const [result2, error2] = jsonthrow.parse<typeof data>(result);

  if (error2) {
    // do something
    return;
  }

  console.log(result2); // will be of type data
}
```

Example in a .js file

```js
// example.js file

const { jsonthrow } = require("jsonthrow");

const data = {
  msg: "hello word",
};

function test() {
  const [result, error] = jsonthrow.stringify(data);

  // at this point result is either null or string
  if (error) {
    // do something
    return;
  }

  // since we checked for error result is string at this point
  console.log(result);

  const [result2, error2] = jsonthrow.parse(result);

  if (error2) {
    // do something
    return;
  }

  console.log(result2);
}
```
