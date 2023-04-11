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
	return (
		<>
			<ul>
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
	);
}

export default App;
