import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReview from "./components/MovieReviews/MovieReview";
import { Toaster } from "react-hot-toast";
// import Loader from "./components/Loader/Loader";



const App = () => {


	
	return (
		<div>
			<header>
				<Navigation />
			</header>
			<main>
				<Toaster
					position='top-center'
					containerStyle={{
						top: 100,
						left: 20,
						bottom: 20,
						right: 20,
					}}
					toastOptions={{
						style: {
							color: "red",
							backgroundColor: "rgb(119, 118, 118)",
						},
					}}
				/>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/movies'
						element={<MoviesPage />}
					/>
					<Route
						path='/movies/:topRatedMovieId'
						element={<MovieDetailsPage />}
					>
						<Route
							path='cast'
							element={<MovieCast />}
						/>
						<Route
							path='reviews'
							element={<MovieReview />}
						/>
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App
