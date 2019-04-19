import React from 'react';
import './style.scss';
import Navbar from './navbar';
import brochure from '../files/Revolve-Farms-Web-Brochure.pdf';

const HomeHeader = () => (
	<section id="home-freshcycle" className="hero is-fullheight">
		<Navbar />
		<div className="hero-body">
			<div id="top-header" className="is-overlay has-text-centered single-spaced">
				<h1 className="subtitle is-4 has-text-white has-text-weight-light">Revolve Farms</h1>
				<h2 className="title is-1 has-text-white">freshCycle Greenhouse</h2>
				<p id="description" className="is-overlay has-text-centered has-text-white">An energy efficient greenhouse designed for the Midwest.</p>
			</div>
		</div>
		<main className="hero-foot center">
			<div className='bottom-hero-grid'>
			<div className='center-column'>
				<a href="./lets-talk" id="inquire-btn" className="button is-danger is-rounded">
					Inquire
				</a>
			</div>
			<div className='center-column'>
				<a href={brochure} id="learn-more-btn" className="button is-danger is-inverted is-outlined is-rounded">
					Learn More
				</a>
			</div>
			</div>
		</main>
	</section>
);

export default HomeHeader;
