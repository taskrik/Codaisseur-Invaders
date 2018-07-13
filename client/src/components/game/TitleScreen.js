import React, { Component } from 'react';
import Picture from './Picture';
import Picture2 from './Picture2';


export default class TitleScreen extends React.Component {
	render() {
		return (
			<div>
				
				<span className="centerScreen title">Codaisseur Invaders</span>
				<span className="centerScreen pressSpace">Press Enter to start the game!</span>
				<div className="test">
				<Picture />
				<Picture2 />
				</div>
				
			</div>
			);
	}
}
