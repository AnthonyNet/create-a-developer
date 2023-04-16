"use client";
import React from "react";
import { useState } from "react";
import {
	Sandpack,
	SandpackFile,
	SandpackFileExplorerProp,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

import { filter, filter_Answer} from "../../../exercises/Exercise_1_Data";
import { preview_Css } from "../../../exercises/preview_Css";

type Props = {
	app: string;
	props: {};
};

interface Options {
	editorHeight: string;
	showConsole: boolean;
	showConsoleButton: boolean;
	closableTabs: boolean;
	showLineNumbers: boolean;
	showInlineErrors: boolean;
	externalResources?: string[];
}

interface Files {
	[key: string]: SandpackFile;
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

function Exercise_1({ app, props }: Props) {
	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	const handleClick = () => {
		setShowAnswer((showAnswer) => !showAnswer);
	};

	const Setup_Props: Setup_Props = {
		options: {
			editorHeight: "100dvh",
			showConsole: true,
			/*visibleFiles: ["/filter.js", "/style.css"],
			activeFile: "/filter.js",*/
			showConsoleButton: true,
			closableTabs: false,
			showLineNumbers: true,

			showInlineErrors: true, // What is this doing?
			//externalResources: ["https://cdn.tailwindcss.com"] eRRoRs
		},
		files: {
			"/App.js": {
				code: app,
				//readOnly: true,
				//hidden: true,
			},
			"/filter.js": {
				code: showAnswer ? filter_Answer : filter,
				active: true,

			},
			"/style.css": {
				code: preview_Css,
				//active: true,
				hidden: true,
			},

		},
		template: "react",
		theme: amethyst,
	};

	return (
		<section className="relative">
			<div className="sandP_Btn w-[240px] h-[40px]  absolute z-10 right-0 md:left-0 md:bottom-0 my-1   flex items-start">
				<button onClick={handleClick}>Ukaž odpověď</button>
				<button onClick={() => setShowAnswer(false)}>Restart</button>
			</div>
			<Sandpack {...Setup_Props} {...props} />
		</section>
	);
}

export default Exercise_1;
