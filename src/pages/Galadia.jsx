import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Galadia = () => {

	const handleDownload = () => {
		if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			window.location.href = 'https://apps.apple.com/us/app/galadia/id6473560423';
		} else {
			window.location.href = 'https://play.google.com/store/apps/details?id=com.fusion11.brokilawn';
		}
	};


	return (
		<main className='Galadia container' id="main" tabIndex={-1}>
			<h1 className='mb-4'>Galadia: nuestro primer juego para móviles</h1>
			<h2>Descripción</h2>
			<p className='lead'>
				Bienvenido al bosque de brokilawn, la entrada a un nuevo mundo lleno de posibilidades para ti. Si disfrutas la lectura, la fantasía y las buenas historias, Esta app no solo es la indicada, sino que es la mejor.<br /><br />
				Descubre a los Gnanin, una raza rechazada y desterrada del otro lado de las montañas, donde deben luchar por su supervivencia en un lugar donde solo las bestias se atreven a merodear.<br />
				Has sido elegido para esta importante misión. Deberás atravesar las montañas que dividen ambos lados del mundo y volver con el mensaje de esperanza a tu pueblo. ¿Serás capaz de cambiar el destino de tu raza o morirás en el intento?<br />
				En este librojuego podrás acceder a dos posibilidades, el modo historia que te permitirá tomar decisiones y construir tu propia aventura y el modo combate que añade la posibilidad de pelear contra tus adversarios que irán apareciendo conforme avance el juego.<br />
				¡buena suerte!<br />
				puedes descargar nuestra app pinchando en el botón de abajo:
			</p>
			<button className="btn btn-primary" onClick={handleDownload}>
				Descargar en
				{/(ipod|iphone|ipad)/i.test(navigator.userAgent) ? ' App Store' : ' Google Play'}
			</button>
			<h2>Política de privacidad.</h2>
			<p className='lead'>
				galadia no requiere conexiónn a internet ni accede a ningún permiso sencible, tales como el micrófono la cámara o las llamadas.
				para mas información, puedes entrar <a href="gprivacy.html">aquí</a>			</p>
			<h2>Sobre Galadia</h2>
			<p className='lead'>
				puedes ver como surgió la idea de crear esta app pulsando <Link to='/Gabouth'>Aquí</Link>.</p>
		</main>
	);
}

export default Galadia;