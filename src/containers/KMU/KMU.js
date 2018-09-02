import React, { Component } from 'react';
import './KMU.css'
import { connect } from 'react-redux';


class KMU extends Component {

	render() {

		if (this.props.isLeverPulled) {
			let textElement = document.getElementsByClassName("text hidden")[0];
			textElement.className = "text";
		}

		return (
				<ul className="text hidden">
					<li>k</li>
					<li className="ghost">a</li>
					<li className="ghost">r</li>
					<li className="ghost">l</li>
					<li className="ghost">-</li>
					<li>m</li>
					<li className="ghost">a</li>
					<li className="ghost">r</li>
					<li className="ghost">t</li>
					<li className="ghost">i</li>
					<li className="ghost">n</li>
					<li className="spaced">u</li>
					<li className="ghost">i</li>
					<li className="ghost">g</li>
					<li className="ghost">a</li>
				</ul>
		)
	}

}

const mapStateToProps = state => {
	return {
		isLeverPulled: state.example.leverPulled
	}
};

export default connect(mapStateToProps)(KMU);
