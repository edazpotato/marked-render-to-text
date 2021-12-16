import marked from "marked";

export = RenderToText;

declare class RenderToText extends marked.Renderer {
	fancyMode: boolean;
	constructor(fancyMode?: boolean, options?: marked.marked.MarkedOptions);
}
