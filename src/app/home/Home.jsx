import Form from './components/Form';
import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
				<h2 className=" home__title text-3xl font-bold text-center mb-4 text-red-500 md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
					¡Hola entrenador!
				</h2>

				<p className=" home__subtitle text-lg text-center mb-6 md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 text-gray-700 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto">
					Para poder comenzar, dame un nombre
				</p>
			</div>
			{/* <Form /> */}
			<Form />
		</div>
	);
}

export default Home;
