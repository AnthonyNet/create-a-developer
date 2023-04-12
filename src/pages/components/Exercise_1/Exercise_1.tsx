"use client";
import React from "react";
import { Sandpack, SandpackFile, SandpackFiles } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

type Props = {
	files: SandpackFiles;
}
function Exercise_1({props, preview, styles}:Props) {


	return (
		<Sandpack
			template="react"
			options={{
				editorHeight: "96vh",
				showConsole: true,
				visibleFiles: ["/App.js"],
			}}
			theme={amethyst}
			files={{
				"/App.js": props,
				"/Exercise_1_Section.js": preview,
				"/style.css": styles,
			}}
		/>
	);
}

export default Exercise_1;
