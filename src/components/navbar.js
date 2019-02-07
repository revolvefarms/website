import React from 'react';
import logo from '../images/revolve-farms-main-logo.png';
import { Link } from 'gatsby';
// import { FaBars } from 'react-icons/fa';
import './style.scss';

const Navbar = () => (
	<div className="hero-head">
		<div className="columns is-mobile is-marginless heading has-text-weight-bold">
			<div className="column left navbar-brand">
				<a href="/" className="navbar-item image">
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

// import React from 'react';
// import { Link } from 'gatsby';
// import logo from '../images/revolve-farms-main-logo.png';

// const Navbar = class extends React.Component {

//   componentDidMount() {
//     // Get all "navbar-burger" elements
//    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
//     // Check if there are any navbar burgers
//    if ($navbarBurgers.length > 0) {
 
//      // Add a click event on each of them
//      $navbarBurgers.forEach( el => {
//        el.addEventListener('click', () => {
 
//          // Get the target from the "data-target" attribute
//          const target = el.dataset.target;
//          const $target = document.getElementById(target);
 
//          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//          el.classList.toggle('is-active');
//          $target.classList.toggle('is-active');
 
//        });
//      });
//    }
//  }
 
//  render() {
//    return (
  
// 	   <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
// 		   <div className="container">
// 			   <div className="navbar-brand">
// 				   <Link to="/" className="navbar-item" title="Logo">
// 					   <img src={logo} alt="Revolve Farms" />
// 				   </Link>
// 				   {/* Hamburger menu */}
// 				   <div className="navbar-burger burger" data-target="navMenu">
// 					   <span></span>
// 					   <span></span>
// 					   <span></span>
// 				   </div>
// 			   </div>
// 				<div id="navMenu" className="navbar-menu">
// 					<div className="navbar-start has-text-centered">
// 						<Link className="navbar-item" to="/">
// 							About
//         				</Link>
// 						<Link className="navbar-item" to="/products">
// 							freshCycle
//     					</Link>
// 						<Link className="navbar-item" to="/contact">
// 							Blog
// 						</Link>
// 					</div>
// 					<div className="navbar-end has-text-centered">
// 						<Link className="navbar-item" to="/lets-talk">
// 						   Let's Talk
// 						</Link>
// 					</div>
// 				</div>
// 		   </div>
// 	   </nav>
//   )}
// }

// export default Navbar