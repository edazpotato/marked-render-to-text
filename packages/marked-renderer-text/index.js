const { Renderer } = require("marked");

module.exports = class RenderToText extends Renderer {
	constructor(fancyMode, options) {
		if (typeof fancyMode != "boolean") {
			this.fancyMode = false;
		} else {
			this.fancyMode = fancyMode;
		}
		super(options);
	}

	code(code, infostring, escaped) {
		if (!fancyMode) {
			return code;
		}

		const lang = (infostring || "").match(/\S*/)[0];
		const codeLines = code.split("\n");

		let output = "";
		if (lang) {
			output = lang + ":\n";
		}

		codeLines.map(function (line) {
			output = output + "\t" + line + "\n";
		});

		return output;
	}

	blockquote(quote) {
		let parsedQuote = quote;
		if (parsedQuote.endsWith("\n")) {
			parsedQuote = parsedQuote.slice(0, -1);
		}
		if (!fancyMode) {
			return "“" + parsedQuote + "”\n";
		}

		let output =
			"\n\t“ " +
			quote
				.split("\n")
				.map(function (line, i, list) {
					if (i == 0) {
						return line;
					}
					if (line == "\t") {
						return "";
					}
					return "\t" + line;
				})
				.join("\n")
				.slice(1);

		output = output + "”\n";

		return output;
	}

	html(html) {
		return "";
	}

	heading(text, level, raw, slugger) {
		if (fancyMode) {
			if (level == 1) {
				return "\n" + text + "\n\n";
			} else if (level == 2) {
				return "\n" + text + "\n";
			}
		}
		return text + "\n";
	}

	hr() {
		return !fancyMode ? "\n" : "-------------------------\n"; // 25 hyphens
	}

	list(body, ordered, start) {
		return body;
	}
	listitem(text) {
		if (!fancyMode) {
			return text + "\n";
		}
		return "- " + text + "\n";
	}
	checkbox(checked) {
		if (!fancyMode) {
			return "";
		}

		if (checked) {
			return "[x]\n";
		}
		return "[ ]\n";
	}

	paragraph(text) {
		return text + "\n";
	}

	table(header, body) {
		return header + "\n" + (body ? body + "\n" : "");
	}

	tablerow(content) {
		if (!fancyMode) {
			return "\n" + content + "\n";
		}
		return content.slice(1) + " |\n";
	}
	tablecell(content, flags) {
		if (!fancyMode) {
			return content;
		}
		return " | " + content;
	}
	// span level renderer
	strong(text) {
		return !fancyMode ? text : text.toUpperCase();
	}
	em(text) {
		return !fancyMode ? text : "*" + text + "*";
	}
	codespan(text) {
		return !fancyMode ? text : "`" + text + "`";
	}
	br() {
		return "\n";
	}
	del(text) {
		if (!fancyMode) {
			return text;
		}
		return "~" + text + "~";
	}
	link(href, title, text) {
		if (!fancyMode) {
			return text;
		}

		const cleanHref = href; //cleanUrl(this.options.sanitize, this.options.baseUrl, href);
		if (!cleanHref) {
			return text;
		}

		let output = text + "(";
		if (title) {
			output = output + title + " ";
		}
		output = output + cleanHref + ")";
		return output;
	}
	image(href, title, altText) {
		if (!fancyMode) {
			return altText;
		}
		return altText + "(" + (title ? title + " " : "") + href + ")";
	}
	text(text) {
		return text;
	}
};
