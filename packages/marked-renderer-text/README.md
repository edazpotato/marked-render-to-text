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
const { renderToText } = require("marked-renderer-text");
const testText = `# Title\n**bold text**\n- A\n- List\n- *of*\n- ~~things~~`;
marked.use({ renderer: renderToText() });
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

## Options

You can enable fancy mode by passing `true` to the `renderToText()` function.

```js
const { marked } = require("marked");
const { renderToText } = require("marked-renderer-text");
const testText = `# Title\n**bold text**\n- A\n- List\n- *of*\n- ~~things~~`;
marked.use({ renderer: renderToText(true) });
/*

Title

BOLD TEXT
- A
- List
- *of*
- ~things~

*/
```
