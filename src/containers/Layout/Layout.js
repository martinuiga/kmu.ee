import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Layout.css';
import { connect } from 'react-redux';

import TodoList from '../TodoList/TodoList';
import Lever from '../Lever/Lever';

class Layout extends Component {

	render() {
		return (
			<div className="App">
				<ReactTransitionGroup transitionName="example"
									  transitionEnterTimeout={500}
									  transitionLeaveTimeout={300}>
					{this.props.isLeverPulled ? <TodoList/> : <Lever/>}
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
