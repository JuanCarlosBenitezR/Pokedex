import { usePagination } from '../../../hooks/usePagination';
import { Link } from 'react-router';
import Item from './Item';
import Pagination from '../../../components/commons/Pagination';
import './List.css';

function List({ pokemons }) {
	const { page, totalPages, items, prev, next, itemsPerPage } = usePagination(
		pokemons,
		20,
	);
	console.log('Items' + items.length);

	return (
		<div className="list">
			<div className="list__container">
				<div className="list__content">
					{items.map((pokemon) => (
						<Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
							<Item url={pokemon.url} />
						</Link>
					))}
				</div>
				{/* HACER LA PAGINACION POR SEPARADO */}
				<div>
					<button>Anterior</button>
					<button>Siguiente</button>
				</div>
				{items.length === 0 && <p className="list__empty">No hay resultados</p>}
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
