import { useEffect, useState } from 'react';
import { requestTopMoviesList } from '../../services/api';
import toast from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import css from "./HomePage.module.css"

function HomePage() {

	const [topRatedMovies, setTopRatedMovies] = useState([]);
	useEffect(() => {
		async function fetchTopRatedMovies() {
			try {
				const response = await requestTopMoviesList();
				setTopRatedMovies(response.data.results);
			} catch (err) {
				toast.error(`Error fetching movies: ${err.message}`);
			} 
		}
		fetchTopRatedMovies();
	}, []);

	return (
		<div className={css.HomePageWrapper}>
			<h2 className={css.header}>Trending today</h2>
			<MovieList moviesList={topRatedMovies} />
		</div>
	);
}

export default HomePage
