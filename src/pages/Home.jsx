import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
	return (
		<main className='Home container' id="main" tabIndex={-1}>
			<section className='text-center'>
				<h1 className='mb-4'>Bienvenidos a 4everzyanya</h1>
				<p className='lead mb-5'>
					Un espacio dedicado a sembrar semillas de pensamiento y demostrar que no existen límites ni barreras.
				</p>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<p className='mb-4'>
							Nuestra página ha sido creada por personas ciegas, con el propósito de compartirte nuestras experiencias.
						</p>
          <p>
            Nuestra misión es llegar a la mayor cantidad de personas posibles para cambiar la percepción que tienen sobre nosotros. Queremos mostrar que llevamos una vida plena y normal, que podemos formar familias y realizar actividades cotidianas. A través de nuestros videos, compartimos de manera positiva y sincera cómo nos desenvolvemos en la vida diaria. Brindamos a aquellos que nunca han interactuado con alguien con discapacidad la oportunidad de observar y ser testigos de cómo es realmente la vida de personas como nosotros, en este caso, viviendo con ceguera, sin romantizar ni victimizar la discapacidad.
          </p>
						<p>
							Adéntrate en nuestras experiencias, explora nuestro espacio y déjate llevar.
						</p>
					</div>
				</div>
			</section>
		</main>

);
};

export default Home;