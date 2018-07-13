import React, { Component } from 'react';
import logo from './inv.gif'

export default class GameOverScreen extends React.Component {
	constructor(args) {
		super(args);
		this.state = { score: args.score };
	}

	render() {
		return (
			<div>
				<span className="centerScreen title">GameOver!</span>
				<span className="centerScreen score">Score: { this.state.score }</span>
				<span className="centerScreen pressEnter">Press enter to continue!</span>
				<img className="centerScreen2" src={logo} alt="loading..." />
			</div>
			);
	}
}
