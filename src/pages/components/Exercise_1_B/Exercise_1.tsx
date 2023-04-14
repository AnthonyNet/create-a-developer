"use client";
import React from "react";
import {
	Sandpack,
	SandpackCodeOptions,
	SandpackFile,
	SandpackFileExplorerProp,
	SandpackFiles,
	SandpackProps,
	SandpackProvider,
	SandpackLayout,
	SandpackPreview,
	SandpackCodeEditor,

	SandpackConsole
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";
import { useSandpack } from "@codesandbox/sandpack-react";

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
	"/App.js": SandpackFile;
	"/filter.js": string;
	"/style.css": string;
}

interface Setup_Props {
	options: Options;
	files: Files;
	template: string | any;
	// template can´t be string ???
	theme: string | any;
}
const layout = {
	height: "100vh",
	width: "100vw",

};

function Exercise_1({ app, exercise, styles }: Props) {


	const Setup_Props: Setup_Props = {
		options: {
			editorHeight: "96vh",
			showConsole: true,
			visibleFiles: ["/filter.js"],
			activeFile: "/filter.js",
		},
		files: {
			"/App.js": {
				code: app,
				readOnly: true,
			},
			"/filter.js": exercise,
			"/style.css": styles,
		},
		template: "react",
		theme: amethyst,
	};

	//return <Sandpack {...Setup_Props} />;

return (
	<SandpackProvider template="react" theme={amethyst}>
		<SandpackLayout style={{ height: "100vh" }} contentEditable>
			<SandpackCodeEditor style={{ height: "100%" }} contentEditable />

			<SandpackPreview showOpenInCodeSandbox={false} contentEditable />
			{/* This will render the pre on the right side of your sandpack component */}

			<SandpackConsole />
		</SandpackLayout>
	</SandpackProvider>
);
}

export default Exercise_1;
