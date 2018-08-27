import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
	render() {
		return (
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={500}>
				<h1>Fading at Initial Mount2</h1>
			</ReactCSSTransitionGroup>
		);
	}
}

export default TodoList;
