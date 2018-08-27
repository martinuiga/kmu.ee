import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { SocialIcon } from 'react-social-icons';

class SocialBar extends Component {

	render() {
		return (
			<div>
				<SocialIcon url="http://linkedin.com/in/jaketrent" />
			</div>
		)
	}
}

export default SocialBar;
