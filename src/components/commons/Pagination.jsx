function Pagination({ page, totalPages, prev, next }) {
	return (
		<div className="display flex gap-10 justify-center align-center my-5">
			<button
				onClick={prev}
				disabled={page === 1}
				className="px-5 text-white bg-red-500 flex items-center justify-center w-25 h-15 rounded-full border-4 border-black hover:shadow-lg transition transform hover:scale-105"
			>
				previo
			</button>
			<p className="mx-2 font-bold text-black bg-yellow-200 rounded px-3 py-1 border-2 border-yellow-400 shadow">
				{page} of {totalPages}
			</p>
			<button
				onClick={next}
				disabled={page === totalPages}
				className="px-5 text-white bg-red-500  flex items-center justify-center w-25 h-15 rounded-full border-4 border-black hover:shadow-lg transition transform hover:scale-105"
			>
				Siguiente
			</button>
		</div>
	);
}
export default Pagination;
