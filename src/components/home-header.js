import React from 'react';

import './style.scss';

import Navbar from './navbar';

const HomeHeader = () => (
	<section id="home-freshcycle" className="hero is-fullheight">
		<Navbar />
		<div className="hero-body">
			<div id="top-header" className="is-overlay has-text-centered single-spaced">
				<h1 className="subtitle is-4 has-text-white has-text-weight-light">Revolve Farms</h1>
				<h2 className="title is-1 has-text-white">freshCycle Greenhouse</h2>
			</div>
		</div>
		<main className="hero-foot center">
			<div className="center-column">
				<p id="description" className="is-overlay has-text-centered has-text-white">An energy efficient greenhouse designed for the Midwest.</p>
				<a href="./lets-talk" id="inquire-btn" className="button is-danger is-inverted is-rounded is-outlined">
					Inquire
				</a>
			</div>
		</main>
	</section>
);

export default HomeHeader;
