import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {

	componentWillAppear(callback) {
		console.log("stuck siin");
		callback();
		console.log('will appear EXAMPLE');
	}

	componentWillEnter(callback) {
		console.log("vb siin");
		callback();
		console.log('will enter');
	}

	componentDidEnter() {
		console.log('did appear');
	}

	componentDidMount() {
		console.log("Supp");
	}


	componentDidAppear() {
		console.log('did appear EXAMPLE');
	}


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
