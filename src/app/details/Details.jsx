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
			<div className="go-back">
				<Link
					to="/pokedex"
					className="details__back text-red-500 font-bold hover:underline hover:text-red-700 "
				>
					Volver a pokedex
				</Link>
			</div>
			<div className="details__container flex flex-col items-center justify-center shadow-lg rounded-lg p-6 bg-gray-200 max-w-md mx-auto">
				<div className="details__content">
					<div className="details__image">
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={pokemon.name}
						/>
					</div>
				</div>
				<div className="details__header flex flex-col items-center mt-4">
					<h2 className="details__name">{pokemon.name}</h2>
					<p className="details__id">
						N° {pokemon.id.toString().padStart(3, '0')}
					</p>
				</div>
				<div className="type-pokemon ">
					<p className="details__types">
						{pokemon.types.map((t) => (
							<span
								key={t.type.name}
								className="details__type rounded-full px-3 py-1 mr-2 mb-2 text-sm font-semibold text-black"
							>
								{t.type.name}{' '}
							</span>
						))}
					</p>
				</div>
				<div className="details__abilities">
					<p className="details__abilities-title">Habilidades:</p>
					<ul className="details__abilities-list">
						{pokemon.abilities.map((ability) => (
							<li key={ability.ability.name} className="details__ability">
								{ability.ability.name}
							</li>
						))}
					</ul>
				</div>
				<div className=" details__stats grid grid-cols-2 gap-4 mt-4">
					{pokemon.stats.map((stat) => (
						<div key={stat.stat.name} className="details__stat">
							<span className="details__stat-name">
								{stat.stat.name.replace('-', ' ')}
							</span>
							<span className="details__stat-value">{stat.base_stat}</span>
						</div>
					))}
				</div>
				<div className="details__moves mt-4">
					<p className="details__moves-title">Movimientos:</p>
					<ul className="details__moves-list">
						{pokemon.moves.slice(0, 5).map((move) => (
							<li key={move.move.name} className="details__move">
								{move.move.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Details;
