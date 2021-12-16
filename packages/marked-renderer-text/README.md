# marked-renderer-text

[Github](https://github.com/edazpotato/marked-render-to-text) |
[NPM](https://www.npmjs.com/package/marked-renderer-text)

A custom renderer for [Marked](https://github.com/markedjs/marked) that renders
markdown to plain text. Can be useful for when you want to show a preview
snippet of an article (or anything written in markdown) without any rich
formatting.

## Usage

```bash
npm i marked-renderer-text
```

```js
const { marked } = require("marked");
const RenderToText = require("marked-renderer-text");
const testText = `# Title\n**bold text**\n- A\n- List\n- *of*\n- ~~things~~`;
marked.use({ renderer: new RenderToText() });
console.log(marked(testText)); // Note that it preseves newlines - you need to remove those yourself
/*
Title
bold text
A
List
of
things

*/
```

### Typescript

In my testing this works fine with typescript out of the box - you can import it
like this

```ts
import { renderToText } from "marked-renderer-text";
```

and use it like normal. Because it's a really simple package, Typescript seems
to magicaly infer all of the types.

If you run into any problems using this with typescript, open an issue and I'll
add proper type definitions.

## Options

You can enable fancy mode by passing `true` to the `renderToText()` function.

```js
const { marked } = require("marked");
const RenderToText = require("marked-renderer-text");
const testText = `# Title\n**bold text**\n- A\n- List\n- *of*\n- ~~things~~`;
marked.use({ renderer: new RenderToText() });
/*

Title

BOLD TEXT
- A
- List
- *of*
- ~things~

*/
```
