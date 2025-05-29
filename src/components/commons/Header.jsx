import React from 'react';

function Header() {
	return (
		<div className="w-full h-1/10 flex items-center justify-center bg-red-500 shadow-lg mb-6">
			<img
				src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
				alt="Encabezado de Pokedex"
				className="my-2"
			/>
		</div>
	);
}

export default Header;
