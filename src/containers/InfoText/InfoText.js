import React, { Component } from 'react';
import './InfoText.css';
import { connect } from 'react-redux';


class InfoText extends Component {
	constructor(props) {
		super(props);
		this.state = {skills: ["React", "Java", "SQL", "Redux"]};
	}

	componentDidMount = () => {
		let intervalId = setInterval(this.startSkillChange, 1500);
		this.setState({intervalId: intervalId});
	};

	componentWillUnmount = () => {
		clearInterval(this.state.intervalId);
	};

	startSkillChange = () => {
		let numberOfElement = Math.floor(Math.random() * this.state.skills.length);

		if(document.getElementById("letter").innerHTML === this.state.skills[numberOfElement]) {
			if(numberOfElement === this.state.skills.length-1) {
				document.getElementById("letter").innerHTML = this.state.skills[numberOfElement-1];
			} else {
				document.getElementById("letter").innerHTML = this.state.skills[numberOfElement+1];
			}
		} else {
			document.getElementById("letter").innerHTML = this.state.skills[numberOfElement];
		}


	};

	render() {
		return (
			<div className="infoText">
				<p>experienced in <b className="letter-changer" id="letter">React</b></p>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		isLeverPulled: state.example.leverPulled
	}
};

export default connect(mapStateToProps)(InfoText);
