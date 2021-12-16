const fs = require("fs");
const path = require("path");

const { marked } = require("marked");
const RenderToText = require("marked-renderer-text");

const testFile = fs.readFileSync(path.join(__dirname, "testText.md"), "utf-8");

// With marked.use

marked.use({
	renderer: new RenderToText(false),
});

fs.writeFileSync(
	path.join(__dirname, "boring.output.txt"),
	marked.parse(testFile)
);

marked.use({
	renderer: new RenderToText(true),
});

fs.writeFileSync(
	path.join(__dirname, "fancy.output.txt"),
	marked.parse(testFile)
);

// By passing options to the parse function

fs.writeFileSync(
	path.join(__dirname, "boring.output.txt"),
	marked.parse(testFile, {
		renderer: new RenderToText(false),
	})
);

fs.writeFileSync(
	path.join(__dirname, "fancy.output.txt"),
	marked.parse(testFile, {
		renderer: new RenderToText(true),
	})
);
