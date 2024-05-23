import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Changer = () => {
	return (
		<main className='Changer container' id="main" tabIndex={-1}>
			<h1 className='mb-4'>Device Changer, administra cómodamente tus dispositivos de audio.</h1>
			<h2>Descripción</h2>
			<p className='lead'>
				este programa nos permite cambiar rápidamente entre un dispositivo sin tener que ir al administrador de osnidos.
				podrás cambiar de dispositivo de audio y de micrófono, subir y bajar el volumen de cualquier dispositivo, mutear y desmutear cualquier dispositivo y si conectaste un nuevo dispositivo, no te preocupes. Porque también podrás actualizar la lista de dispositivos y todo con un comando de teclado global.
				este programa por supuesto tiene un editor de teclado totalmente personalizado a tu gusto.</p>
				<h3 className="mb-4">comandos de teclado.</h3>
				<table>
  <thead>
    <tr>
      <th>acción</th>
      <th>combinación de teclas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>altavoz anterior</td>
      <td>alt shift flecha izquierda</td>
    </tr>
    <tr>
      <td>altavoz siguiente</td>
      <td>alt shift flecha derecha</td>
    </tr>
    <tr>
      <td>micrófono anterior</td>
      <td>alt shift flecha arriba</td>
    </tr>
    <tr>
      <td>micrófono siguiente</td>
      <td>alt shift flecha abajo</td>
    </tr>
    <tr>
      <td>mutear o desmutear el altavoz actual</td>
      <td>alt shift s</td>
    </tr>
    <tr>
      <td>mutear o desmutear el micrófono actual</td>
      <td>alt shift m</td>
    </tr>
    <tr>
      <td>actualizar dispositivos</td>
      <td>alt shift u</td>
    </tr>
    <tr>
      <td>subir volumen del altavoz actual</td>
      <td>alt shift d</td>
    </tr>
    <tr>
      <td>bajar volumen del altavoz actual</td>
      <td>alt shift f</td>
    </tr>
    <tr>
      <td>subir volumen del micrófono actual</td>
      <td>alt shift e</td>
    </tr>
    <tr>
      <td>bajar volumen del micrófono actual</td>
      <td>alt shift r</td>
    </tr>
    <tr>
      <td>invocar el editor de teclado</td>
      <td>alt shift k</td>
    </tr>
  </tbody>
</table>
				puedes descargar el programa desde <a href="https://dl.dropbox.com/scl/fi/8khd9nvlopd106qwa1rcv/device-changer.zip?rlkey=gaz3is7fod72cnwmdoozyjl92&dl=0">aquí</a>, sin embargo cada licencia tiene un costo de 25 USD. la cual puedes adquirir desde paypal.
				una ves adquirida la licencia, compártenos en el formulario de contacto la siguiente clave que te a proporcionado el programa al momento de ejecutar el mismo y te enviaremos  la clave que tendrás que pegar en el cuadro de edición del programa para su funcionamiento en 2 o 3 días hábiles.
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="XA7BR9AZKSJL4" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal es una forma segura y fácil de pagar en línea." alt="Comprar ahora" />
      </form>
		</main>
	);
}
export default Changer;