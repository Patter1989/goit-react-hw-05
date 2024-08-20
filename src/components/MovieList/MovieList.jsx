import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

const defaultImg =
	"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
const MovieList = ({ moviesList }) => {
	const location = useLocation()
	return (
		<ul className={css.list}>
			{moviesList.map((topRatedMovie) => {
				return (
					<li
						key={topRatedMovie.id}
						className={css.item}
					>
						<Link state={{from: location}} className={css.link} to={`/movies/${topRatedMovie.id}`}>
							<div className={css.wrapper}>
								<img className={css.img}
									src={
										topRatedMovie.poster_path
											? `https://image.tmdb.org/t/p/w500/${topRatedMovie.poster_path}`
											: defaultImg
									}
									width={250}
									alt={`poster of ${topRatedMovie.title}`}
								/>
								{topRatedMovie.title}
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default MovieList
