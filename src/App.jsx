import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import Navigation from "./components/Navigation/Navigation";



const App = () => {
	
	return (
		<div>
			<header>
				<Navigation />
			</header>
			<main>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/movies'
						element={<MoviesPage />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App
