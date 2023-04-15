
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

export const filter: string = `export default () => {
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


export const filter_Answer: string = `export default () => {
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
