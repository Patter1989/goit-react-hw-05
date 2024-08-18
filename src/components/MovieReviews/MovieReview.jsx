import { useParams } from "react-router-dom";
import { requestMovieReviews } from "../../services/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
		<ul>
			<div>
				{Array.isArray(movieReviews) && movieReviews.length === 0 && (
					<p>We don`t have any reviews for this movie</p>
				)}
			</div>
			{movieReviews.map((movieReview) => {
					return (
						<li key={movieReview.id}>
							<p>{`Author: ${movieReview.author}`}</p>
							<p>{movieReview.content}</p>
						</li>
					);
				})}
		</ul>
	);
  
	
};

export default MovieReview;
