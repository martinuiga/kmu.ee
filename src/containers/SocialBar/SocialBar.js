import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { SocialIcon } from 'react-social-icons';
import './SocialBar.css';
import SocialMediaIcons from 'react-social-media-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faLinkedin, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';


class SocialBar extends Component {

	render() {
		const socialMediaIcons = [
			{
				url: 'https://github.com/andrewgbliss',
				className: 'github-square',
			},
			{
				url: 'https://gitlab.com/andrewgbliss',
				className: 'gitlab',
			},
			{
				url: 'https://www.npmjs.com/~andrewgbliss',
				className: 'npm',
			},
		];
		return (
			<div className="container">
				{console.log("here")}

				<FontAwesomeIcon icon={faFacebookF} size="2x" color="#6B4212" onClick="https://www.facebook.com/karlmartin.uiga" spin/>
			</div>
		)
	}
}

export default SocialBar;
