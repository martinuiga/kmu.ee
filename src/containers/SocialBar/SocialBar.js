import React, { Component } from 'react';
import './SocialBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';
import { connect } from 'react-redux';


class SocialBar extends Component {

	openLink = (link) => {
		window.open(link, '_blank');
	};

	render() {
		return (
			<div className="socialMediaContainer">
					<FontAwesomeIcon icon={faLinkedin} className={this.props.isLeverPulled ? "icon" : "icon-hidden"}  onClick={() =>
						this.openLink('https://www.linkedin.com/in/karl-martin-uiga-aa7131114/')}  />
					<FontAwesomeIcon icon={faGithub} className={this.props.isLeverPulled ? "icon" : "icon-hidden"} onClick={() =>
						this.openLink('https://github.com/martinuiga')} />
					<FontAwesomeIcon icon={faFacebookF}  className={this.props.isLeverPulled ? "icon" : "icon-hidden"} onClick={() =>
						this.openLink('https://www.facebook.com/karlmartin.uiga?ref=bookmarks')} />
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
