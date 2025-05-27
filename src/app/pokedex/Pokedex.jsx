import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './components/List';
import Form from './components/Form';
import './pokedex.css';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=649';
function Pokedex() {
	const [pokemons, setPokemons] = useState(null);
	const [search, setSearch] = useState('');
	const [type, setType] = useState('');
	const [typeFiltered, setTypeFiltered] = useState([]);

	useEffect(() => {
		axios.get(url).then(({ data }) => setPokemons(data.results));
	}, []);

	if (!pokemons) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	const filteredPokemons = (type ? typeFiltered : pokemons).filter((pokemon) =>
		pokemon.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className="pokedex">
			<Form
				stock={pokemons}
				value={search}
				type={type}
				onSearch={setSearch}
				onType={setType}
				onFiltered={setTypeFiltered}
			/>

			<List pokemons={filteredPokemons} />
		</div>
	);
}

export default Pokedex;
