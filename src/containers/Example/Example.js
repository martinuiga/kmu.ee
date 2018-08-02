import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import * as actions from '../../store/actions/index';
import './Example.css';
import lever from '../../assets/images/Lever_stick-01.svg';
import wall from '../../assets/images/Lever_wall.svg';

class Example extends Component {

	render() {
		return (
			<ReactCSSTransitionGroup
								  transitionName="next"
								  transitionAppear={true}
								  transitionEnter={false}
								  transitionLeave={false}
								  transitionAppearTimeout={500}>

				<div className="Lever">
					<img src={lever} className="Lever-pull" alt="logo"/>
					<img src={wall} className="Lever-wall" alt="logo"/>
				</div>

				<div className="container">
					<svg viewBox="0 20 900 120" version="1.1" xmlns="http://www.w3.org/2000/svg">

							<text className="myName">
								<tspan>
									<tspan>K</tspan>
									<tspan>A</tspan>
									<tspan>R</tspan>
									<tspan>L</tspan>
									<tspan>-</tspan>
									<tspan>M</tspan>
									<tspan>A</tspan>
									<tspan>R</tspan>
									<tspan>T</tspan>
									<tspan>I</tspan>
									<tspan>N</tspan>
									<tspan> </tspan>
									<tspan>U</tspan>
									<tspan>I</tspan>
									<tspan>G</tspan>
									<tspan>A</tspan>
								</tspan>
							</text>

					</svg>
				</div>
			</ReactCSSTransitionGroup>
		)
	}

}

const mapStateToProps = state => {
	return {
		name: state.example.name,
		age: state.example.age,
		isHuman: state.example.isHuman
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSetLeverPulled: (isLeverPulled) => dispatch(actions.setLeverPulled(isLeverPulled))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
