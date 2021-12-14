module.exports = {
  renderToText: function(stripEverything) {
    if (typeof stripEverything != "boolean") {
      stripEverything = true;
    }
    return {
      code(code, infostring, escaped) {
        if (stripEverything) {
          return code;
        }
        
        const lang = (infostring || '').match(/\S*/)[0];
        const codeLines = code.split("\n");

        let output = "";
        if (lang) {
          output = lang + ":\n"
        }
          
        codeLines.map(function(line) {
          output = output + "\t" + line + "\n";
        });
        
        return output
      }

      blockquote(quote) {
        if (stripEverything) {
          return '“' + quote + '”\n';
        }
        
        let output = '\n“' + quote.split("\n").map(function(line) {
          return "\t" + line;
        }).join("\n");
        
        output = output + '”\n';
        
        return output;
      }

      html(html) {
        return "";
      }

      heading(text, level, raw, slugger) {
        if (!stripEverything) {
          if (level == 1) {
            return "\n" + text + "\n\n"
          } else if (level == 2) {
            return "\n" + text + "\n"
          }
        }
        return text + "\n";
      }

      hr() {
        return stripEverything ? "" : "-------------------------"; // 25 hyphens
      }

      list(body, ordered, start) {
        return body + "\n";
      }

      listitem(text) {
        return stripEverything ? text + ", " : "- " + text + "\n";
      }

      checkbox(checked) {
        if (stripEverything) return "";
        
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
        if (stripEverything) {
          return "\n" + content + "\n";
        }
        return content.slice(1) + " |\n";
      }

      tablecell(content, flags) {
        if (stripEverything) {
          return content;
        }
        return " | " + content;
      }

      // span level renderer
      strong(text) {
        return stripEverything ? text : text.toUpperCase();
      }

      em(text) {
        return stripEverything ? text : '*' + text + '*';
      }

      codespan(text) {
        return stripEverything ? text : '`' + text + '`';
      }

      br() {
        return "\n";
      }

      del(text) {
        return text;
      }

      link(href, title, text) {
        if (stripEverything) {
          return text;
        }
        
        const clearHhref = href; //cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (cleanHref === null) {
          return text;
        }

        let output = text + "(";
        if (title) {
          output = output + title + " ";
        }
        output = output + cleanHref + ")";
        return out;
      }

      image(href, title, altText) {
        if (stripEverything) {
          return altText;
        }
        return altText + "(" + (title ? title + " " : "") + href + ")";
      }

      text(text) {
        return text;
      }
    }
  }
}
