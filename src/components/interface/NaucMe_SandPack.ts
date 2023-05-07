import { SandpackFile } from "@codesandbox/sandpack-react/types";


interface Options {
	resizablePanels: boolean;
	editorHeight: string;
	showConsole: boolean;
	showConsoleButton: boolean;
	closableTabs: boolean;
	showLineNumbers: boolean;
	editorWidthPercentage: number;
	showTabs: boolean;
	showInlineErrors: boolean;
	externalResources?: string[];
}

interface Files {
	[key: string]: SandpackFile;
	/*"/App.js": SandpackFile;
		"/filter.js": string;
		"/style.css": string;*/
}
export interface Setup_Props {

	options: Options;
	files: Files;
	template: string | any;
	// template can´t be string ???
	theme: string | any;
}
