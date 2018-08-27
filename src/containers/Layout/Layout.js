import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Layout.css';
import { connect } from 'react-redux';
import Lever from '../Lever/Lever';
import SocialBar from '../SocialBar/SocialBar';

class Layout extends Component {

	render() {

		return (
			<div className="App">
				<ReactTransitionGroup transitionName="example"
									  transitionEnterTimeout={500}
									  transitionLeaveTimeout={300}>
					<Lever/>
				</ReactTransitionGroup>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		isLeverPulled: state.example.leverPulled
	}
};


export default connect(mapStateToProps) (Layout);
