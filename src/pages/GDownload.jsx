import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function GDownload() {

	return (
		<main className="GDownload container" id="main" tabIndex={-1}>
			<h1 className="mb-4">Nuestros proyectos y aplicaciones accesibles</h1>
			<h2 className="mb-4">Galadia: nuestro primer juego para móviles</h2>
			<p className="lead">
				Bienvenido a el bosque de brokilawn, la entrada a un nuevo mundo lleno de posibilidades para ti. Si disfrutas la lectura, la fantasía y las buenas historias, Esta app no solo es la indicada, sino que es la mejor.<br></br>
				si deseas mas información sobre este librojuego entra <Link to="/Galadia">aquí</Link><br></br>
			</p>
			<h2 className="mb-4">VeTube: lee y administra los chats de tus streams.</h2>
			<p className="lead">
				creado para ayudar a las personas ciegas a Leer y gestionar de manera accesible el chat de youtube y twitch en tus directos.<br />
				puedes ver una demostración de este programa <a href='https://youtu.be/4XawJoBymPs'>aquí.</a><br />
				este programa es de código libre y puedes aportar sugerencias o enviar propuestas de codificación desde su <a href='https://github.com/metalalchemist/VeTube'>repositorio de github.</a><br />
				puedes reportar errores desde <a href='https://github.com/metalalchemist/VeTube/issues'>aquí.</a><br />
				puedes descargar la versión mas reciente desde<a href='				https://github.com/metalalchemist/VeTube/releases'> aquí.</a>
			</p>
			<h2 className="mb-4">Device Changer: administra tus dispositivos de audio desde cualquier ventana.</h2>
			<p className="lead">
				este programa te permitirá poder administrar tus dispositivos de audio desde cualquier ventana.
				si deseas mas información de este programa, entra <Link to="/Changer">aquí</Link>
			</p>
		</main>
	);
}

export default GDownload;