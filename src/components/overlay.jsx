import React, { Component } from 'react';
import { gameState } from '../contexts/gameState';

class Overlay extends Component {
	static contextType = gameState;
	render() {
		const { running, started } = this.context;
		return (
			<div
				className="overlay"
				style={{ opacity: started ? (running ? 0 : 0.8) : 0 }}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Overlay;
