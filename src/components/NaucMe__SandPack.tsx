"use client"
import React from 'react';
import { useState } from 'react';
import Sandpack from './SandPack__Original';
import { amethyst } from "@codesandbox/sandpack-themes";
import { preview_Css } from "../exercises/preview_Css";
import { SandpackFile } from '@codesandbox/sandpack-react/types'

interface Props {
	app: string;
	filter: string;
	filter_Answer: string;
}

const Playground = ({app, filter, filter_Answer}:Props) => {

	const [showAnswer, setShowAnswer] = useState<boolean>(false);
	const handleClick = () => {
		setShowAnswer((showAnswer) => !showAnswer);
	};
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
interface Setup_Props {

	options: Options;
	files: Files;
	template: string | any;
	// template can´t be string ???
	theme: string | any;
}
const Setup_Props: Setup_Props = {
	options: {
		resizablePanels: true,
		editorHeight: "100dvh",
		showConsole: true,
		showConsoleButton: true,
		showLineNumbers: true,
		editorWidthPercentage: 50,
		closableTabs: true,
		showTabs: true,
		/*visibleFiles: ["/filter.js", "/style.css"],
			activeFile: "/filter.js",*/

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
		<section className="w-screen h-screen">
			<div className="sandP_Btn w-[240px] h-[40px]  absolute z-10 right-0 md:left-0 md:bottom-0 my-1  flex items-start">
				<button onClick={handleClick}>Ukaž odpověď</button>
				<button onClick={() => setShowAnswer(false)}>Restart</button>
			</div>
			<Sandpack {...Setup_Props} theme={amethyst} />
		</section>
	);
}

export default Playground;