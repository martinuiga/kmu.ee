import React, { Component } from 'react';
import './SocialBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';
import { connect } from 'react-redux';


class SocialBar extends Component {

	render() {

		return (
			<div className="socialMediaContainer">
					<FontAwesomeIcon icon={faLinkedin} className={this.props.isLeverPulled ? "icon" : "icon-hidden"} />
					<FontAwesomeIcon icon={faGithub} className={this.props.isLeverPulled ? "icon" : "icon-hidden"}/>
					<FontAwesomeIcon icon={faFacebookF}  className={this.props.isLeverPulled ? "icon" : "icon-hidden"} />
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		isLeverPulled: state.example.leverPulled
	}
};

export default connect(mapStateToProps) (SocialBar);
