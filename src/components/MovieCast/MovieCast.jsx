import { Link, useParams } from "react-router-dom"
import { requestMovieCast} from "../../services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import css from "./MovieCast.module.css"

const defaultImg =
	"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const params = useParams()
  const [movieCasts, setMovieCasts] = useState([]);
	useEffect(() => {
		async function fetchMovieInfo() {
			try {
				const response = await requestMovieCast(params.topRatedMovieId);
				setMovieCasts(response.data.cast);
			} catch (err) {
				toast.error(`Error fetching casts: ${err.message}`);
			}
		}
		fetchMovieInfo();
	}, [params.topRatedMovieId]);

	return (
		<div className={css.wrapper}>
			<div>
				{Array.isArray(movieCasts) && movieCasts.length === 0 && (
					<p className={css.noFoundText}>
						We don`t have any casts for this movie
					</p>
				)}
			</div>
			<ul className={css.castList}>
				{movieCasts.map((movieCast) => {
					return (
						<li
							className={css.castItem}
							key={movieCast.id}
						>
							<a
								className={css.link}
								href={`https://en.wikipedia.org/wiki/${movieCast.name}`}
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={
										movieCast.profile_path
											? `https://image.tmdb.org/t/p/w500${movieCast.profile_path}`
											: defaultImg
									}
									width={250}
									alt={`${movieCast.name} photo`}
								/>
								<p className={css.castName}>{movieCast.name}</p>
								<p
									className={css.characterName}
								>{`Character: ${movieCast.character}`}</p>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default MovieCast
