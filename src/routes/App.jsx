import { Routes, Route } from 'react-router';
import Home from '../app/home/Home';
import Details from '../app/details/Details';
import Pokedex from '../app/pokedex/pokedex';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/pokedex">
				<Route index element={<Pokedex />} />
				<Route path=":id" element={<Details />} />
			</Route>
		</Routes>
	);
}

export default App;
