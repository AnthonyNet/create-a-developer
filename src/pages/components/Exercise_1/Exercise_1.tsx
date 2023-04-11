"use client";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";


function Exercise_1({props, preview, styles}:any) {


const button = `export default function Button() {}`;
	return (
		<div className="w-full h-full">
			<Sandpack
				template="react"
				options={{
					editorHeight: "95vh",
					showConsole: true,
				}}
				theme={amethyst}
				files={{
					"/App.js": props,
					"/Exercise_1_Section.js": preview,
					"/style.css": styles,
				}}

				/>
		</div>
	);
}

export default Exercise_1;
