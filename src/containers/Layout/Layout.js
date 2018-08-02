import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import ReactTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './Layout.css';
import { connect } from 'react-redux';

import Example from '../Example/Example';
import TodoList from '../TodoList/TodoList';

class Layout extends Component {

	render() {
		return (
			<div className="App">
				<ReactTransitionGroup transitionName="example"
									  transitionEnterTimeout={500}
									  transitionLeaveTimeout={300}>
					{this.props.isLeverPulled ? <TodoList/> : <Example/>}
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
