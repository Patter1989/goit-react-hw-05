import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import css from "./MoviesPage.module.css"
import { requestMovieByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchedMovieValue, setSearchedMovieValue] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const onSubmit = (inputValue) => {
		setSearchedMovieValue(inputValue);
	};
    const onHandleSubmit = (event) => {
			event.preventDefault();
			const inputValue = event.currentTarget.elements.searchedMovieValue.value;
			inputValue === ""
				? toast.error("please write something")
				: onSubmit(inputValue);
  };
  
  useEffect(() => {
    if (searchedMovieValue === null) return;
		async function fetchSearchedMovie() {
      try {
        
        const response = await requestMovieByQuery(searchedMovieValue);
        if (response.data.results.length === 0) {
          setMovieList([])
					toast.error("No matches, please change your request!");
					return;
				}
				setMovieList(response.data.results);
			} catch (err) {
				toast.error(`Error fetching movies: ${err.message}`);
			}
		}
		fetchSearchedMovie();
  }, [searchedMovieValue]);
  console.log(movieList)
		return (
			<div className={css.header}>
				<form
					onSubmit={onHandleSubmit}
					className={css.form}
				>
					<input
						className={css.input}
						name='searchedMovieValue'
						type='text'
						autoComplete='off'
						autoFocus
					/>
					<button
						type='submit'
						className={css.btn}
					>
						Search
					</button>
        </form>
        <MovieList  moviesList={movieList}/>
			</div>
		);
}

export default MoviesPage
