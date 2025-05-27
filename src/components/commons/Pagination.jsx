function Pagination({ page, totalPages, prev, next }) {
	return (
		<div className="display flex gap-10 justify-center align-center">
			<button
				onClick={prev}
				disabled={page === 1}
				className="px-5  font-bold text-black bg-lime-400 border-2 border-lime-600 rounded-full shadow-md hover:bg-lime-500 hover:shadow-lg transition transform hover:scale-105"
			>
				prev
			</button>
			<p className="text-lime-500 drop-shadow-md">
				{page} of {totalPages}
			</p>
			<button
				onClick={next}
				disabled={page === totalPages}
				className="px-5  font-bold text-black bg-lime-400 border-2 border-lime-600 rounded-full shadow-md hover:bg-lime-500 hover:shadow-lg transition transform hover:scale-105"
			>
				next
			</button>
		</div>
	);
}
export default Pagination;
