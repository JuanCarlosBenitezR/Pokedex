import { usePagination } from '../../../hooks/usePagination';
import { Link } from 'react-router';
import Item from './Item';
import Pagination from '../../../components/commons/Pagination';
import './List.css';

function List({ pokemons }) {
	const { pageItems, page, totalPages, next, prev, itemsPerPage } =
		usePagination(pokemons, 20);

	return (
		<div className="list">
			<div className="list__container">
				<div className="list__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{pageItems.map((pokemon) => (
						<Link key={pokemon.name} to={`/pokedex/${pokemon.name}`}>
							<Item url={pokemon.url} />
						</Link>
					))}
				</div>

				{pageItems.length === 0 && (
					<p className="list__empty">No hay resultados</p>
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
