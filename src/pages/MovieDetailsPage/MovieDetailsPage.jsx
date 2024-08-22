import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { requestMovieInfoById } from "../../services/api";
import css from "./MovieDetailsPage.module.css"


const defaultImg =
	"https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
const MovieDetailsPage = () => {
	const params = useParams();
	const [movieInfo, setMovieInfo] = useState([]);
	const location = useLocation()
	const backLinkRef = useRef(location.state?.from ?? "/movies")

	useEffect(() => {
	async function fetchMovieInfo() {
		try {
			const response = await requestMovieInfoById(params.topRatedMovieId);
			setMovieInfo(response.data);
		} catch (err) {
			toast.error(`Error fetching movies: ${err.message}`);
		} 
	}
	fetchMovieInfo();
}, [params.topRatedMovieId]);
  
  const genresList = Array.isArray(movieInfo.genres)
		? movieInfo.genres.map((genre) => genre.name).join(" ")
		: "No genres available";

	return (
		<div className={css.wrapper}>
			<Link
				className={css.backButtonLink}
				to={backLinkRef.current}
			>
				Go back
			</Link>
			<div className={css.infoWrapper}>
				<img
					className={css.image}
					src={
						movieInfo.poster_path
							? `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`
							: defaultImg
					}
					width={250}
					alt={`poster of ${movieInfo.title}`}
				/>
				<div className={css.infoTextWrapper}>
					<h2 className={css.movieHeader}>
						{movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
					</h2>
					<p className={css.text}>
						User Score: {(movieInfo.vote_average * 10).toFixed(1)}%
					</p>
					<h3 className={css.infoHeader}>Overview</h3>
					<p className={css.text}>{movieInfo.overview}</p>
					<h3 className={css.infoHeader}>Genres</h3>
					<p className={css.text}>{genresList}</p>
				</div>
			</div>
			<div>
				<p className={css.additionalInfoText}>Additional information</p>
				<ul className={css.linksList}>
					<li className={css.linksItem}>
						<Link
							className={css.link}
							to='cast'
						>
							Cast
						</Link>
					</li>
					<li className={css.linksItem}>
						<Link
							className={css.link}
							to='reviews'
						>
							Reviews
						</Link>
					</li>
				</ul>
				<div className={css.outletWrapper}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MovieDetailsPage
