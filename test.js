const fs = require("fs");
const path = require("path");

const { marked } = require("marked");
const { renderToText } = require("marked-renderer-text");

const testFile = fs.readFileSync(path.join(__dirname, "testText.md"), "utf-8");

marked.use({
	renderer: renderToText(false),
});

fs.writeFileSync(path.join(__dirname, "boring.output.txt"), marked(testFile));

marked.use({
	renderer: renderToText(true),
});

fs.writeFileSync(path.join(__dirname, "fancy.output.txt"), marked(testFile));
