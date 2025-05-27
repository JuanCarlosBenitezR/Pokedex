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
			console.log('Nombre vacío');
			setError('El nombre no puede estar vacío');
			return;
		}
		dispatch({ type: SETNAME, payload: value });
		console.log('Nombre enviado:', value);
		navigate('/pokedex');
		inputRef.current.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Tu nombre" ref={inputRef} />
			<button type="submit">Enviar</button>

			{error && <p className="error">{error}</p>}
		</form>
	);
}

export default Form;
