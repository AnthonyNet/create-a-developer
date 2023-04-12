"use client";
import React from "react";
import {
	Sandpack,
	SandpackCodeOptions,
	SandpackFile,
	SandpackFileExplorerProp,
	SandpackFiles,
	SandpackProps,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

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

	return <Sandpack {...Setup_Props} />;
}

export default Exercise_1;
