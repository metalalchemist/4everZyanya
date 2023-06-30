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
							Nuestra página ha sido creada por personas ciegas, con el propósito de compartir testimonios de individuos destacados con diversas discapacidades.
						</p>
						<p className='mb-4'>
							A través de nuestras experiencias, buscamos crear conciencia y promover una sociedad incluyente.
						</p>
						<p className='mb-4'>
							4everzyanya es el testimonio de la fuerza del espíritu humano y la capacidad de trascender las limitaciones impuestas por el destino. Es una invitación a sembrar semillas de pensamiento en un mundo en constante cambio.
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