import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import { ProgressBar } from "react-loader-spinner";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
	import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReview = lazy(() => import("./components/MovieReviews/MovieReview"));


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
						top: 40,
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
				<Suspense fallback= {<ProgressBar/>}>
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
						<Route
							path='*'
							element={<NotFoundPage />}
						/>
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App
