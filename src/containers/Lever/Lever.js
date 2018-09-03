import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Lever.css';
import lever from '../../assets/images/Lever_stick-01.svg';
import wall from '../../assets/images/Lever_wall.svg';
import SocialBar from '../SocialBar/SocialBar';
import KMU from '../KMU/KMU';


class Lever extends Component {

	pullLever() {
		let leverImage = document.getElementsByClassName("Lever-pull")[0];
		if(leverImage) {
			leverImage.className = "Lever-pull-active";
		}
		this.props.onSetLeverPulled(true);
	}

	render() {
		return (
				<div>
					<div className="Lever">
						<img src={lever} className="Lever-pull" alt="logo" onClick={() => this.pullLever()}/>
						<img src={wall} className="Lever-wall" alt="logo"/>
					</div>

					<div className="nameContainer">
						<KMU />
					</div>


					{this.props.isLeverPulled ? <SocialBar/> : ""}
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
