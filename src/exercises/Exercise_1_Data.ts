export const Exercise_1_App: string = `import React from 'react';
import './style.css';
import filter from './filter';
function App() {

	return  <section>
			<h2>Seznam filmů:</h2>
			<ul>
				{filter()&&filter().map((movie) => (
					<li key={crypto.randomUUID()}>{movie.id}. {movie.title}</li>
				))}
			</ul>
		</section>


}

export default App;
`;

export const exercise: string = `export default () => {
	/*
	ZADÁNÍ
	Pomocí funkce map projdi pole objektů "movies" a vrať pro každý objekt:
	{ id: id_filmu, title: název_filmu }
	*/
		const movies = [
		{ id: 1, title: "The Shawshank Redemption", year: 1994 },
		{ id: 2, title: "The Godfather", year: 1972 },
		{ id: 3, title: "The Godfather: Part II", year: 1974 },
		{ id: 4, title: "The Dark Knight", year: 2008 },
	];

		/* Zde napiš odpověď */

		return

		/*Konec odpovědi */

	};
`;


export const exercise_Answer: string = `export default () => {
	/*
	ZADÁNÍ
	Pomocí funkce map projdi pole objektů "movies" a vrať pro každý objekt:
	{ id: id_filmu, title: název_filmu }
	*/
		const movies = [
		{ id: 1, title: "The Shawshank Redemption", year: 1994 },
		{ id: 2, title: "The Godfather", year: 1972 },
		{ id: 3, title: "The Godfather: Part II", year: 1974 },
		{ id: 4, title: "The Dark Knight", year: 2008 },
	];

		/* Zde napiš odpověď */

		return movies.map((movie) => ({ id: movie.id, title: movie.title }));

		/*Konec odpovědi */

	};
`;



/*
 - :white_check_mark: Zobrazit/skrýt konzoli (možná, uvidíme, je to jen nápad)
``` k tomu je už hotový btn ```
-  :white_check_mark: Jedna exportovaná React komponenta, která bude brát téměř stejné properties jako Sandpack komponenta
``` to jsem snad vyřešil ```

Responzivita je v mojí verzi defaultně vyřešená na jejich straně s tím, že na mobilu se okno s kódem  na cca 760px width už nadále nezmenšuje - je to dobré protože se neprzní kód, w

:x:  - Vrátit všechny soubory k původnímu stavu (na obojí naštěstí existují funkce z useSandpack hooku, viz https://sandpack.codesandbox.io/docs/advanced-usage/hooks#usesandpack)

```Bohužel. Pouze v advanced verzi kde se vypisují jednotlivé komponenty, jenže tam mi nefunguje drag&drop jednotlivých oken. Strávil jsem tím dva dny, jsem tragéd.

<SandpackProvider template="react">
    <SandpackLayout>
    <SandpackCodeEditor />
    <SandpackPreview />
    <SandpackConsole />
    </SandpackLayout>
</SandpackProvider>```

Other components (SandpackProvider for example) do not have this functionality and it must be implemented by the user.
https://sandpack.codesandbox.io/docs/getting-started/layout#resizable-panels
TO BUDE ASI TEN PROBLÉM*/