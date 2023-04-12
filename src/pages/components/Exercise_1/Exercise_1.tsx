"use client";
import React from "react";
import { Sandpack, SandpackFile, SandpackFiles } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

type Props = {
	files: SandpackFiles;
}
function Exercise_1({app, exercise, styles}:Props) {


	return (
		<Sandpack
			options={{
				editorHeight: "96vh",
				showConsole: true,
				visibleFiles: ["/filter.js"],
				activeFile: "/filter.js",
			}}
			files={{
				"/App.js": {
					code: app,
					readOnly: true,
				},
				"/filter.js": exercise,
				"/style.css": styles,
			}}
			template="react"
			theme={amethyst}
		/>
	);
}

export default Exercise_1;
