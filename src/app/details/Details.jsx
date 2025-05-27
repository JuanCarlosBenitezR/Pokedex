import { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';
import { Link, useParams } from 'react-router';

function Details() {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState(null);
	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(({ data }) => {
			setPokemon(data);
		});
	}, [name]);
	if (!pokemon) {
		return <div>Cargando detalles...</div>;
	}

	return (
		<div className="details">
			<div className="details__container">
				<div className="details__header">
					<Link to="/pokedex" className="details__back">
						Volver
					</Link>
					<h2 className="details__name">{pokemon.name}</h2>
					<p className="details__id">
						N° {pokemon.id.toString().padStart(3, '0')}
					</p>
				</div>
				<div className="details__content">
					<div className="details__image">
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={pokemon.name}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Details;
