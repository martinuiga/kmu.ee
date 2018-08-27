import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Lever.css';
import lever from '../../assets/images/Lever_stick-01.svg';
import wall from '../../assets/images/Lever_wall.svg';


class Lever extends Component {

	pullLever() {
		let leverImage = document.getElementsByClassName("Lever-pull")[0];
		if(leverImage) {
			leverImage.className = "Lever-pull-active";
		}
	}

	render() {
		return (
				<div className="Lever">
					<img src={lever} className="Lever-pull" alt="logo" onClick={() => this.pullLever()}/>
					<img src={wall} className="Lever-wall" alt="logo"/>
				</div>

		)
	}

}

const mapStateToProps = state => {
	return {
		isLeverPulled: state.example.leverPulled
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onSetLeverPulled: (isLeverPulled) => dispatch(actions.setLeverPulled(isLeverPulled))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Lever);
