import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import emailjs from 'emailjs-com';

const Contact = () => {

	(function () {
		emailjs.init('6EiIlslEAIyoN4YY7');
	})();
	function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_9d9mrlt', 'contactform', e.target)
			.then((result) => {
				console.log(result.text);
				document.getElementById('mensaje_send_failed').textContent = '¡Su mensaje fue enviado con éxito!';
				document.getElementById('mensaje_send_failed').classList.add('alert-success');
				document.getElementById('contactform').reset();
				setTimeout(() => {
					document.getElementById('mensaje_send_failed').classList.remove('alert', 'alert-success');
					document.getElementById('mensaje_send_failed').textContent = '';
				}, 5000);
			}, (error) => {
				console.log(error.text);
				document.getElementById('mensaje_send_failed').textContent = '¡Ha ocurrido un error al enviar el mensaje!';
				document.getElementById('mensaje_send_failed').classList.add('alert-danger');
				setTimeout(() => {
					document.getElementById('mensaje_send_failed').classList.remove('alert', 'alert-danger');
					document.getElementById('mensaje_send_failed').textContent = '';
				}, 5000);
			});
	};

	return (
		<main className='Contact container' id="main" tabIndex={-1}>
			<div className="container">
				<h1 className="mb-4">Contáctanos aquí</h1>
				<p id="mensaje_send_failed" className="alert" role="alert"></p>
				<form id="contactform" onSubmit={sendEmail} role='form' aria-label='Formulario de contacto'>
					<div className="mb-3">
						<label className="form-label" htmlFor="user_name">* Escriba su nombre</label>
						<input type="text" className="form-control" id="user_name" name="user_name" required focus/>
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="user_email">* Escriba su correo electrónico</label>
						<input type="email" className="form-control" id="user_email" name="user_email" required />
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="asuntito">* Escriba el motivo de su consulta</label>
						<input type="text" className="form-control" id="asuntito" name="asunto" required />
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="message">Escriba su mensaje aquí</label>
						<textarea className="form-control" id="message" name="message"></textarea>
					</div>
					<input type="submit" className="btn btn-primary" value="Enviar" />
				</form>
			</div>
		</main>
	);
}

export default Contact;