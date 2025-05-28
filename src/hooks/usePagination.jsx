import { useEffect, useState } from 'react';

export function usePagination(array = [], itemsPerPage = 5) {
	const [page, setPage] = useState(1);

	useEffect(() => {
		setPage(1);
	}, [array]);
	const totalPages = Math.ceil(array.length / itemsPerPage);

	const prev = () => {
		// if (page === 1) return
		setPage(page - 1);
	};

	const next = () => {
		// if (page === totalPages) return
		setPage(page + 1);
	};

	const pageItems = array.slice((page - 1) * itemsPerPage, page * itemsPerPage);

	return {
		page,
		totalPages,
		prev,
		next,
		pageItems,
		itemsPerPage,
	};
}
