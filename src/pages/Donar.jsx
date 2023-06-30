import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Donar = () => {
return (
<main className='Donar container' id="main" tabIndex={-1}>
<h1 className="display-4">Contribuye con nuestro proyecto</h1>
<p className="lead">Puedes contribuir de diversas maneras para que nuestro proyecto siga creciendo.</p>
<h2>Realiza una donación</h2>
<p>Con tu generosa donación, nos estarás brindando el apoyo necesario para seguir creando contenido que motive e inspire a un mayor número de personas, al tiempo que trabajamos para construir un mundo mejor para las generaciones futuras. Además, también nos permite desarrollar herramientas accesibles y recursos adaptados para personas con diversas discapacidades.</p>
<p className="lead">Juntos, podemos lograr grandes cosas y crear un impacto positivo en la vida de muchas personas.</p>
<a href="https://www.paypal.com/donate/?hosted_button_id=5ZV23UDDJ4C5U" target='_blank'>¡Gracias por tu apoyo!</a>
<h2>Adquiere nuestro librojuego para móviles.</h2>
<p className="lead">¡Descubre un emocionante librojuego para móviles producido completamente por personas ciegas y contribuye con nuestro proyecto al adquirirlo!</p>
<p>Te invitamos a sumergirte en una increíble aventura interactiva que ha sido creada de manera única.</p><br/>
<p>Al adquirir este librojuego, no solo disfrutarás de una gran historia y vivirás emocionantes momentos, sino que también estarás apoyando directamente a nuestro proyecto. Tu compra ayudará a continuar creando contenido accesible y de calidad para un público más amplio.</p>
<Link to='/galadia'>¡Gracias por unirte a nosotros en esta emocionante aventura!</Link>
<h2>Comparte uno de nuestros videos.</h2>
<p>Sabemos que no todo el mundo puede hacer una donación, pero eso no significa que no puedas contribuir de otras maneras. Una forma sencilla pero poderosa de apoyarnos es compartiendo uno de nuestros videos de nuestro canal. Al hacerlo, estarás ayudando a difundir nuestro mensaje , a llegar a un público más amplio y ayudarás a que más personas conozcan nuestro proyecto y se sumen a nuestra causa.</p>
<p className="lead">Puedes compartir el video en tus redes sociales, enviarlo por correo electrónico a tus amigos y familiares, o incluso hablar sobre él en tu comunidad en línea. Cada acción cuenta y tu apoyo en la difusión es fundamental para expandir nuestro alcance y encontrar a más personas dispuestas a ayudarnos.</p>
<a href='https://www.youtube.com/@4everZyanya/' target='_blank'>¡Gracias por tu apoyo y por ser parte de nuestra comunidad!</a>
</main>
);}

export default Donar;