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
	console.log(location)
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
  
  // console.log(movieInfo)
  
  

	return (
		<div>
			<Link to={backLinkRef.current}>Go back</Link>
			<div>
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
				<div>
					<h2>
						{movieInfo.title} ({movieInfo.release_date?.slice(0, 4)})
					</h2>
					<p>User Score: {(movieInfo.vote_average * 10).toFixed(1)}%</p>
					<h3>Overview</h3>
					<p>{movieInfo.overview}</p>
					<h4>Genres</h4>
					<p>{genresList}</p>
				</div>
			</div>
			<div>
				<p>Additional information</p>
				<ul>
					<li>
						<Link to='cast'>Cast</Link>
					</li>
					<li>
						<Link to='reviews'>Reviews</Link>
					</li>
				</ul>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default MovieDetailsPage
