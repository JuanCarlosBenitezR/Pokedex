import { Routes, Route } from 'react-router';
import Home from '../app/home/Home';
import Details from '../app/details/Details';
import Pokedex from '../app/pokedex/pokedex';
import Protected from './Protected';
import Header from '../components/commons/Header';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokedex" element={<Protected />}>
					<Route index element={<Pokedex />} />
					<Route path=":name" element={<Details />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
