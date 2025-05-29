import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useName } from '../../../hooks/UseName';
import { SETNAME } from '../../../providers/NameProvider';

function Form() {
	const inputRef = useRef(null);
	const [error, setError] = useState(false);
	const [, dispatch] = useName();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false);
		const value = inputRef.current.value;
		if (value.trim() === '') {
			setError('El nombre no puede estar vacío');
			return;
		}
		dispatch({ type: SETNAME, payload: value });
		navigate('/pokedex');
		inputRef.current.value = '';
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="form mb-6 bg-white p-6 rounded-lg shadow-xl w-full max-w-sm mx-auto flex flex-col gap-4 "
		>
			<input
				type="text"
				placeholder="Tu nombre"
				ref={inputRef}
				className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
			/>
			<button
				type="submit"
				className=" bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors duration-300"
			>
				Enviar
			</button>

			{error && (
				<p className="text-red-500 text-base md:text-xl xl:text-3xl  mt-2 text-center ">
					{error}
				</p>
			)}
		</form>
	);
}

export default Form;
