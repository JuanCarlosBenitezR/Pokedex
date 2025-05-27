import { useState } from 'react';

export function usePagination(array = [], pageItems) {
	const [page, setPage] = useState(1);
	const itemsPerPage = pageItems || 20;

	const prev = () => {
		// if (page === 1) return
		setPage(page - 1);
	};

	const next = () => {
		// if (page === totalPages) return
		setPage(page + 1);
	};
	const totalPages = Math.ceil(array.length / itemsPerPage);

	const items = array.slice((page - 1) * itemsPerPage, page * itemsPerPage);

	return {
		page,
		totalPages,
		items,
		prev,
		next,
		itemsPerPage,
	};
}
