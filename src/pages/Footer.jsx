import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<h2 className='mb-4'>Pie de página</h2>
						<p className='mb-4'>Visítanos en nuestras diversas redes sociales donde podrás mantenerte al día de cualquier información sobre nuestro proyecto:</p>
						{/* la lista de redes sociales */}
						<ul className='list-unstyled' aria-label='Redes sociales'>
							{/* poner los logos de las redes sociales */}
							{/* canal de youtube */}
							<li>
								<a href="https://www.youtube.com/@4everZyanya" target='_blank'>
									<span className="iconify" data-icon="akar-icons:youtube-fill" data-inline="false">Youtube</span>
								</a>
							</li>
							{/* perfil de tiktok */}
							<li>
								<a href="https://www.tiktok.com/@4everzyanya" target='_blank'>
									<span className="iconify" data-icon="akar-icons:logo-tiktok" data-inline="false">Tictok</span>
								</a>
							</li>
							{/* perfil de instagram */}
							<li>
								<a href="https://www.instagram.com/4everzyanya" target='_blank'>
									<span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false">Instagram</span>
								</a>
							</li>
							{/* perfil de facebook */}
							<li>
								<a href="https://www.facebook.com/4everzyanya" target='_blank'>
									<span className="iconify" data-icon="akar-icons:facebook-fill" data-inline="false">Facebook</span>
								</a>
							</li>
						</ul>
						<p>Si deseas aportar alguna sugerencia o ponerte en contacto con nosotros, puedes hacerlo desde <Link to='/Contact'>Aquí</Link>.</p>
					</div>
					<div className='col-md-4'>
						<p className='mb-4'>
							&copy; Copyrigth {new Date().getFullYear()} - 4everzyanya
						</p>
					</div>
				</div>
			</div>
		</footer>

	);
};

export default Footer;