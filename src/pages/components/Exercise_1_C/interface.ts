type Props = {
	app: string;
	exercise: string;
	styles: string;
};

interface Options {
	editorHeight: string;
	showConsole: boolean;
	visibleFiles: string[];
	activeFile: string;
}

interface Files {
	[key]: Sandpackfile;
	/*"/App.js": SandpackFile;
	"/filter.js": string;
	"/style.css": string;*/
}

interface Setup_Props {
	options: Options;
	files: Files;
	template: string | any;
	// template can´t be string ???
	theme: string | any;
}
