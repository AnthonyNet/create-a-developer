export const Exercise_1_App: string = `
import React from 'react';
import Exercise_1_Section from './Exercise_1_Section';
import './style.css';

function App() {
	const movies = [
		{ id: 1, title: "The Shawshank Redemption", year: 1994 },
		{ id: 2, title: "The Godfather", year: 1972 },
		{ id: 3, title: "The Godfather: Part II", year: 1974 },
		{ id: 4, title: "The Dark Knight", year: 2008 },
	];

	/* ZADÁNÍ */
	/* Pomocí funkce map projdi pole objektů "movies" a vrať pro každý objekt:*/
	/* { id: id_filmu, title: název_filmu } */

	const filter = () => {
		/*Zde, ZA RETURN,  napiš odpověď */

		return

		/*Konec odpovědi */
	};
	return <Exercise_1_Section props={filter()} />;
}

export default App;
`;

export const Exercise_1_Answer: string = `
import React from 'react';
import Exercise_1_Section from './Exercise_1_Section';
import './style.css';

function App() {
	const movies = [
		{ id: 1, title: "The Shawshank Redemption", year: 1994 },
		{ id: 2, title: "The Godfather", year: 1972 },
		{ id: 3, title: "The Godfather: Part II", year: 1974 },
		{ id: 4, title: "The Dark Knight", year: 2008 },
	];

	/* ZADÁNÍ */
	/* Pomocí funkce map projdi pole objektů "movies" a vrať pro každý objekt:*/
	/* { id: id_filmu, title: název_filmu } */

	const filter = () => {
		/*Zde napiš odpověď */

		return movies.map((movie) => ({ id: movie.id, title: movie.title }));

		/*Konec odpovědi */
	};
	return <Exercise_1_Section props={filter()} />;
}

export default App;
`;

export const Exercise_1_Section: string = `
import React from 'react';

function Exercise_1_Section({props}) {


return <section style={{height:"100vh", width: "100vw", display:"grid", justifyContent: "center", alignContent: "center"}}>
			<ul>
				{props&&props.map((movie) => (
					<li style={{listStyle:"none"}} key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</section>
}
export default Exercise_1_Section;
`;
