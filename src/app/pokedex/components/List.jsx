import { usePagination } from '../../../hooks/usePagination';
import { Link } from 'react-router';
import Item from './Item';
import Pagination from '../../../components/commons/Pagination';
import './List.css';
import { useState } from 'react';

function List({ pokemons }) {
	const [elementsPerPage, setElementsPerPage] = useState(20);
	const { pageItems, page, totalPages, next, prev, itemsPerPage } =
		usePagination(pokemons, elementsPerPage);

	return (
		<div className="list">
			<div className=" text-black p-4 ">
				Elementos a mostrar:
				<input
					min={1}
					max={649}
					type="number"
					value={elementsPerPage}
					onChange={(e) => {
						setElementsPerPage(e.target.value);
						if (value > 0) {
							usePagination(pokemons, value);
						}
					}}
					className="ml-2 p-1 border border-gray-300 rounded"
				/>
			</div>
			<div className="list__container  flex flex-col items-center">
				<div className="list__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{pageItems.map((pokemon) => (
						<Link key={pokemon.name} to={`/pokedex/${pokemon.name}`}>
							<Item url={pokemon.url} />
						</Link>
					))}
				</div>

				{pageItems.length === 0 && (
					<p className=" text-gray-500 text-center mt-4 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:font-extrabold md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-16 2xl:mb-20 2xl:px-20 2xl:py-10 2xl:bg-white rounded-lg shadow-lg p-4 mb-4 md:mb-8 lg:mb-12 xl:mb-16 xl:px-8 xl:py-6 xl:bg-gray-100 md:bg-gray-200 lg:bg-gray-300 xl:bg-gray-400 2xl:bg-gray-500">
						No hay resultados
					</p>
				)}
				{itemsPerPage < pokemons.length && (
					<Pagination
						page={page}
						totalPages={totalPages}
						next={next}
						prev={prev}
					/>
				)}
			</div>
		</div>
	);
}

export default List;
