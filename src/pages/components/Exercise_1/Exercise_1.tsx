"use client";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";


function Exercise_1({props, preview, styles}:any) {



	return (
			<Sandpack
				template="react"
				options={{
					editorHeight: "100vh",
					showConsole: true,
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
