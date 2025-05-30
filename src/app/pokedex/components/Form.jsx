import { useEffect } from 'react';
import axios from 'axios';
import './Form.css';
import { defaultTypeEs } from '../../../lib/utils.js';

function Form({ value, onSearch, type, onType, stock, onFiltered }) {
	useEffect(() => {
		if (!type) {
			onFiltered([]);
			return;
		}
		axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(({ data }) => {
			const results = data.pokemon.map((p) => p.pokemon.name);
			onFiltered(stock.filter((p) => results.includes(p.name)));
		});
	}, [type, stock]);

	return (
		<div className="form mb-6">
			<div className="form__container bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-auto flex flex-col gap-4">
				<input
					type="text"
					placeholder="Buscar"
					className="form__input border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
					value={value}
					onChange={(e) => onSearch(e.target.value)}
				/>
				<select
					className="form__select border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
					value={type}
					onChange={(e) => onType(e.target.value)}
				>
					<option value="">Todos</option>

					{Object.keys(defaultTypeEs).map((type) => (
						<option key={type} value={type}>
							{defaultTypeEs[type]}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default Form;
