export const Exercise_1_App = (activeFile: string) => `import React from 'react';
import './style.css';
import filter from './${activeFile}';

function App() {

	const movies = filter()&&filter().map((movie) => (
				!movie.year
				?(<li key={movie.id}>
						{movie.id}.{movie.title}
					</li>)
				: ""
));



	return <section>
			<h2>Seznam filmů:</h2>
			<ul>
				{movies}
			</ul>
		</section>
}

export default App;
`;

export const exercise = `export default () => {
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

export const exercise_Answer = `export default () => {
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
