# marked-renderer-text

[Github](https://github.com/edazpotato/marked-render-to-text) |
[NPM](https://www.npmjs.com/package/marked-renderer-text)

A custom renderer for [Marked](https://github.com/markedjs/marked) that renders
markdown to plain text. Can be useful for when you want to show a preview
snippet of an article (or anything written in markdown) without any rich
formatting.

Includes Typescript types.

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

## Options

You can enable fancy mode by passing `true` as the first argument when initialising the class.

```js
const { marked } = require("marked");
const RenderToText = require("marked-renderer-text");
const testText = `# Title\n**bold text**\n- A\n- List\n- *of*\n- ~~things~~`;
marked.use({ renderer: new RenderToText(true) });
/*

Title

BOLD TEXT
- A
- List
- *of*
- ~things~

*/
```

You can pass any normal marked renderer options as the second paramater (if you don't want to enable fancy mode, you should pass `false` as the first parameter when doing this).

