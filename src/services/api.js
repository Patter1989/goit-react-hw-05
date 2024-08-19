// import params from "../App.jsx"
import axios from "axios";







export const requestTopMoviesList = async () => {
	const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
	const options = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTMzNDE0ZGEyNjVkMjJhYWI3MTJhYTAxYzBlNTQzMCIsIm5iZiI6MTcyMzg5MDU3Mi40MDIyOTQsInN1YiI6IjY2YzA3NjY2MGUzNTg4NGM1YmMzMGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EktLaRzBXkZXRM2Q1-NVrvbaahGa8rydUET0yngQ2gg",
		},
	};

	const response = await axios.get(
		url, options
	);
	return response;
};


export const requestMovieInfoById = async (topRatedMovieId,) => {
	const url =
		(`https://api.themoviedb.org/3/movie/${topRatedMovieId}`);
	const options = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTMzNDE0ZGEyNjVkMjJhYWI3MTJhYTAxYzBlNTQzMCIsIm5iZiI6MTcyMzg5MDU3Mi40MDIyOTQsInN1YiI6IjY2YzA3NjY2MGUzNTg4NGM1YmMzMGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EktLaRzBXkZXRM2Q1-NVrvbaahGa8rydUET0yngQ2gg",
		},
		
	};

	const response = await axios.get(url, options);
	return response;
};


export const requestMovieCast = async (topRatedMovieId) => {
	const url = `https://api.themoviedb.org/3/movie/${topRatedMovieId}/credits`;
	const options = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTMzNDE0ZGEyNjVkMjJhYWI3MTJhYTAxYzBlNTQzMCIsIm5iZiI6MTcyMzg5MDU3Mi40MDIyOTQsInN1YiI6IjY2YzA3NjY2MGUzNTg4NGM1YmMzMGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EktLaRzBXkZXRM2Q1-NVrvbaahGa8rydUET0yngQ2gg",
		},
	};

	const response = await axios.get(url, options);
	return response;
};


export const requestMovieReviews = async (topRatedMovieId) => {
	const url = `https://api.themoviedb.org/3/movie/${topRatedMovieId}/reviews`;
	const options = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTMzNDE0ZGEyNjVkMjJhYWI3MTJhYTAxYzBlNTQzMCIsIm5iZiI6MTcyMzg5MDU3Mi40MDIyOTQsInN1YiI6IjY2YzA3NjY2MGUzNTg4NGM1YmMzMGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EktLaRzBXkZXRM2Q1-NVrvbaahGa8rydUET0yngQ2gg",
		},
	};

	const response = await axios.get(url, options);
	return response;
};


export const requestMovieByQuery = async (query) => {
	const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
	const options = {
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTMzNDE0ZGEyNjVkMjJhYWI3MTJhYTAxYzBlNTQzMCIsIm5iZiI6MTcyMzg5MDU3Mi40MDIyOTQsInN1YiI6IjY2YzA3NjY2MGUzNTg4NGM1YmMzMGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EktLaRzBXkZXRM2Q1-NVrvbaahGa8rydUET0yngQ2gg",
		},
	};

	const response = await axios.get(url, options);
	return response;
};



