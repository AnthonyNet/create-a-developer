"use client";
import React from "react";
import {
	SandpackProvider,
	SandpackLayout,
	SandpackCodeEditor,
	SandpackPreview,
	SandpackConsole,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

function Pokus() {
	const component = () => {
		const App_Return_Value = `  return <>
  <ul>
	{filter().map(movie => (
  		<li key={movie.id}>
    		{movie.title}
  		</li>
))}
	</ul>
  </>;`;
		const all = {
			"/App.js":
				`/* Vrať pro každou položku pomocí funkce objekt: {id: xxx, title: xxx} */

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

` +
				App_Return_Value +
				`
}
export default App;
  `,
		};
		return all;
	};

	return (
		<section className="h-screen w-screen">
			<div className="flex w-full h-full justify-center items-center">
				<SandpackProvider
					template="react"
					theme={amethyst}
					options={{
						editorHeight: "100vh",
						showConsole: true,
					}}>
					<SandpackLayout>
						<SandpackCodeEditor />
						<SandpackPreview
							actionsChildren={
								<button onClick={() => window.alert("Bug reported!")}>
									Report bug
								</button>
							}
						/>
						<button>ale ale</button>
						<SandpackConsole />
					</SandpackLayout>
				</SandpackProvider>
			</div>
		</section>
	);
}

export default Pokus;
