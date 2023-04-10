"use client";
import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

function Exercise_1() {
	const files = {
		"/App.js": `/* Vrať pro každou položku pomocí funkce objekt: {id: xxx, title: xxx} */

import React from 'react';
function App() {

  const movies = [
	{id: 1, title: "The Shawshank Redemption", year: 1994 },
	{id: 2, title: "The Godfather", year: 1972 },
	{id: 3, title: "The Godfather: Part II", year: 1974 },
	{id: 4, title: "The Dark Knight", year: 2008 },
  ];

/* Zde bude procvičovací funkce*/
const filter = () =>{
/*Zde napiš odpověď */

 return movies.map(movie=>({id:movie.id, title:movie.title}))

 /*Konec odpovědi */
}

  return <>
  <ul>
	{filter().map(movie => (
  		<li key={movie.id}>
    		{movie.title}
  		</li>
))}
	</ul>

  </>;
}
export default App;
  `,
	};

	return (
		<section className="grid items-center align-center h-screen w-screen">
			<div className="w-full h-full">
				<Sandpack
					template="react"
					options={{
						editorHeight: "100vh",
						showConsole: true,
					}}
					files={files}
					theme={amethyst}
				/>
			</div>
		</section>
	);
}

export default Exercise_1;
