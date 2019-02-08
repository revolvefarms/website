import React from 'react';
import logo from '../images/revolve-farms-main-logo.png';
import { Link } from 'gatsby';
// import { FaBars } from 'react-icons/fa';
import './style.scss';

const Navbar = () => (
	<div className="hero-head">
		<div className="columns is-mobile is-marginless heading has-text-weight-bold">
			<div className="column left navbar-brand">
				<a href="/" className="navbar-item">
					<img id="rf-logo" src={logo} alt="Revolve Farms"/>
				</a>
			</div>
			{/* <div className="column center desktop">
				<Link to="/" className="navbar-item has-text-black">About</Link>
				<Link to="/" className="navbar-item has-text-black">Greenhouse</Link>
				<Link to="/" className="navbar-item has-text-black">Cold Frame</Link>
				<Link to="/" className="navbar-item has-text-black">Blog</Link>
			</div> */}
			<div className="column right">
				<Link to="lets-talk" className="navbar-item has-text-black">Let's Talk</Link>
				{/* <p className="navbar-item has-text-black center"><FaBars /></p> */}
			</div>
		</div>
	</div>
);

export default Navbar;