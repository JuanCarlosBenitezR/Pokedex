import Form from './components/Form';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<h2>Pokedex</h2>
				<h2>Hola entrenador </h2>
				<p>Para poder comenzar, dame un nombre</p>

				{/* <Form /> */}
				<Form />
			</div>
		</div>
	);
}

export default Home;
