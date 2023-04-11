"use client";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

function Exercise_1() {
const component_Name = "App";
const task = `/* Vrať pro každou položku pomocí funkce objekt: {id: xxx, title: xxx} */ `;

const task_Data = ` const movies = [
	{id: 1, title: "The Shawshank Redemption", year: 1994 },
	{id: 2, title: "The Godfather", year: 1972 },
	{id: 3, title: "The Godfather: Part II", year: 1974 },
	{id: 4, title: "The Dark Knight", year: 2008 },
  ]; `;

const exercise = `

 /* CVIČENÍ ZDE*/
const filter = () =>{
/*Zde napiš odpověď */

 return movies.map(movie=>({id:movie.id, title:movie.title}))

 /*Konec odpovědi */
}
  `;

const return_In_Exercise = ` <>
  <ul>
	{filter().map(movie => (
  		<li key={movie.id}>
    		{movie.title}
  		</li>
))}
	</ul>
	<button onClick={()=>{console.log("ahoj")}}>asds</button>
  </>;`;
const lesson_Data = () => {
	const all = {
		"/App.js":
			task +
			`

import React from 'react';
function ` +
			component_Name +
			`() {

 ` +
			task_Data +
			exercise +
			`

return ` +
			return_In_Exercise +
			`
}
export default App;
  `,
	};
	return all;
};
const app = `
import React from 'react';
import Button from './Button';

function App() {
	const movies = [
		{ id: 1, title: "The Shawshank Redemption", year: 1994 },
		{ id: 2, title: "The Godfather", year: 1972 },
		{ id: 3, title: "The Godfather: Part II", year: 1974 },
		{ id: 4, title: "The Dark Knight", year: 2008 },
	];

	/* CVIČENÍ ZDE*/
	const filter = () => {
		/*Zde napiš odpověď */

		return movies.map((movie) => ({ id: movie.id, title: movie.title }));

		/*Konec odpovědi */
	};
	return <>
			<ul className="list">
				{filter().map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
			<button
				onClick={() => {
					console.log("ahoj");
				}}>
				asds
			</button>
		</>
}

export default App;
`;

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
					"/App.js": app,
					"/Button.js": button
				}}
				/>
		</div>
	);
}

export default Exercise_1;
