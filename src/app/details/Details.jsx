import { useEffect, useState } from 'react';
import axios from 'axios';
import './Details.css';
import { Link, useParams } from 'react-router';
import { defaultMovesEs } from '../../lib/utils';

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
		<div className="details text-sm md:text-base lg:text-lg xl:text-xl ">
			<div className="go-back">
				<Link
					to="/pokedex"
					className="details__back text-red-500 font-bold hover:underline hover:text-red-700 ml-4 "
				>
					Volver a pokedex
				</Link>
			</div>
			<div className="details__container flex flex-col items-center justify-center shadow-lg rounded-lg p-6  max-w-md mx-auto space-y-2">
				<div className="details__content">
					<div className="details__image">
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={pokemon.name}
						/>
					</div>
				</div>
				<div className="details__header flex flex-col items-center mt-4">
					<h2
						className="details__name font-bold text-3xl text-gray-800 mb-2 capitalize
					"
					>
						{pokemon.name}
					</h2>
					<p className="details__id  text-gray-600 text-lg mb-2">
						N° {pokemon.id.toString().padStart(3, '0')}
					</p>
				</div>
				<div className="type-pokemon mb-4 ">
					<p className="details__types">
						{pokemon.types.map((t) => (
							<span
								key={t.type.name}
								className="details__type rounded-full px-3 py-1  mb-2 text-center 
								font-semibold text-white bg-purple-600 capitalize mr-2 "
							>
								{t.type.name}{' '}
							</span>
						))}
					</p>
				</div>
				<div className="details__abilities space-y-2">
					<p className="details__abilities-title font-bold text-center  ">
						Habilidades
					</p>
					<ul className="details__abilities-list">
						{pokemon.abilities.map((ability) => (
							<li
								key={ability.ability.name}
								className="details__ability rounded-full px-3 py-1 mb-2 text-center font-semibold
								 text-white bg-blue-600  capitalize"
							>
								{ability.ability.name}
							</li>
						))}
					</ul>
				</div>
				<h2 className="font-bold w-full text-center mt-4">Estadisticas</h2>
				<div className=" details__stats grid grid-cols-2 gap-4 mt-4 p-2 bg-gray-100 rounded-4xl">
					{pokemon.stats.map((stat) => (
						<div
							key={stat.stat.name}
							className="details__stat  flex items-center"
						>
							<span className="font-semibold capitalize  rounded-full   text-black">
								{stat.stat.name.replace('-', ' ')}:
							</span>
							<span
								className="details__stat-value  bg-yellow-500 rounded-full px-3 py-2 ml-1 text-center font-semibold 
							 "
							>
								{stat.base_stat}
							</span>
						</div>
					))}
				</div>
				<div className="details__moves mt-4 w-full">
					<h2 className="font-bold w-full text-center mt-4">Movimientos:</h2>
					<ul className="details__moves-list grid grid-cols-2  md:grid-cols-3  gap-5 place-items-center mt-4">
						{pokemon.moves.slice(0, 6).map((move) => (
							<li
								key={move.move.name}
								className=" bg-stone-400 rounded-full px-4 py-2 size-auto mr-4 text-center font-semibold  capitalize "
							>
								{defaultMovesEs[move.move.name] || move.move.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Details;
