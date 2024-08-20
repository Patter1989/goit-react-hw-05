import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import css from "./MoviesPage.module.css"
import { requestMovieByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
	const [movieList, setMovieList] = useState([]);
		const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");
	

  const onSubmit = (inputValue) => {
		setSearchParams({ "query": inputValue});
	};
    const onHandleSubmit = (event) => {
			event.preventDefault();
			const inputValue = event.currentTarget.elements.query.value;
			inputValue === ""
				? toast.error("please write something")
				: onSubmit(inputValue);
  };
  
  useEffect(() => {
    if (!query) return;
		async function fetchSearchedMovie() {
      try {
        
        const response = await requestMovieByQuery(query);
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
  }, [query]);
  
		return (
			<div className={css.wrapper}>
				<form
					onSubmit={onHandleSubmit}
					className={css.form}
				>
					<input
						className={css.input}
						name='query'
						type='text'
						autoComplete='off'
						// autoFocus
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
