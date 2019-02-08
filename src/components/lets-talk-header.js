import React from 'react';
import './style.scss';
import Navbar from './navbar';

class LetsTalkHeader extends React.Component {
	
	render() {
		return (
			<section id="lets-talk-header" className="hero is-fullheight">
				<Navbar />
				<div className="hero-body">
					<div id="middle-header" className="is-overlay has-text-centered">
						<h2 className="title is-2 has-text-black">Contact Us</h2>
						<p id="lets-talk-p" className="has-text-black">
						We’re happy to answer any question you may have.
						Please reach out and we will get back to you as soon as we can.
						</p>
						<p><strong>Phone:</strong> (734) 623-9270</p>
						<p><strong>Email Address:</strong> info@revolvefarms.com</p>
					</div>
				</div>
			</section>
		)
	}
}

export default LetsTalkHeader;
