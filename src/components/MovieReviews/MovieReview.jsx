import { useParams } from "react-router-dom";
import { requestMovieReviews } from "../../services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import css from "./MovieReview.module.css"

const MovieReview = () => {
  const params = useParams();
	const [movieReviews, setMovieReviews] = useState([]);
	useEffect(() => {
		async function fetchMovieInfo() {
			try {
				const response = await requestMovieReviews(params.topRatedMovieId);
				setMovieReviews(response.data.results);
			} catch (err) {
				toast.error(`Error fetching casts: ${err.message}`);
			}
		}
		fetchMovieInfo();
	}, [params.topRatedMovieId]);
      console.log(movieReviews)
	return (
		<div className={css.wrapper}>
			<div className={css.noFoundText}>
				{Array.isArray(movieReviews) && movieReviews.length === 0 && (
					<p className={css.noFoundText}>
						We don`t have any reviews for this movie
					</p>
				)}
			</div>
			<ul className={css.reviewsList}>
				{movieReviews.map((movieReview) => {
					return (
						<li
							className={css.reviewsItem}
							key={movieReview.id}
						>
							<p
								className={css.reviewersName}
							>{`Author: ${movieReview.author}`}</p>
							<p className={css.reviewersText}>{movieReview.content}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
  
	
};

export default MovieReview;
