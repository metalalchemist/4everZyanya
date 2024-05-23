import { useEffect } from 'react';
import { HashRouter as Router, NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';
import { addKeyboardEvent, removeKeyboardEvent } from './Functions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
// importar el logo
import logo from './assets/logo.png';

import Donar from './pages/Donar';
import About from './pages/About';
import Gabouth from './pages/Gabouth';
import Contact from './pages/Contact';
import GDownload from './pages/GDownload';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Galadia from './pages/Galadia';
import Changer from './pages/Changer';

const navLinkProps = {
	exact: true,
	activeClassName: 'active',
	className: 'nav-link',
	ariaCurrent: 'page',
};

function Principal() {
	const location = useLocation();

	useEffect(() => {
		document.title = `4everzyanya - ${getPageTitle(location.pathname)}`;
		// enfocar el encabezado cuando se cambia de página
		document.getElementById('main').focus();
	}, [location]);

	function getPageTitle(pathname) {
		return pathname==='/' ? 'inicio' : pathname==='/gdownload' ? 'nuestros proyectos' : pathname==='/about' ? 'quienes somos' : pathname==='/contact' ? 'contáctanos' : pathname==='/Galadia' ? 'Galadia' : pathname==='/Gabouth' ? 'Sobre nosotros' : pathname==='/Donar' ? 'contribuye con nuestro proyecto' : pathname==='/Changer' ? 'Device Changer, tu administrador de dispositivos de audio.' : '404';
	}	
	
	// ejecuta la función addKeyboardEvent() cuando se monta el componente
	useEffect(() => {
		addKeyboardEvent();
		// ejecuta la función removeKeyboardEvent() cuando se desmonta el componente
		return () => removeKeyboardEvent();
	}, []);

	return (
		<header className="mb-5">
			{/* crear un enlace invisible para que los lectores de pantalla puedan saltar al contenido principal */}
			<a href="#main" className="visually-hidden focusable">Ir al contenido principal</a>
			<h1>4everzyanya: Por un mundo donde la visión está en el corazón.</h1>
			<Link to="/" className="navbar-brand">
			<img width="30" height="24" className="d-inline-block align-text-top" alt="Si yo puedo tu mas." src={logo} />
					</Link>
			<nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Main navigation">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav" id="menu">
							<li className="nav-item">
								<NavLink to="/" {...navLinkProps}>
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/gdownload" {...navLinkProps}>
									Nuestros proyectos
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" {...navLinkProps}>
									¿quienes somos?
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Donar" {...navLinkProps}>
									Contribuye con nuestro proyecto.
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/contact" {...navLinkProps}>
									Contacto
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

function App() {
	return (
		<Router>
			<Principal />

			<div className="container py-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gdownload" element={<GDownload />} />
					<Route path="/donar" element={<Donar />} />
					<Route path="/about" element={<About />} />
					<Route path="/Gabouth" element={<Gabouth />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/Galadia" element={<Galadia />} />
					<Route path="/Changer" element={<Changer />} />
				</Routes>
				<Footer />	
			</div>
		</Router>
	);
}

export default App;