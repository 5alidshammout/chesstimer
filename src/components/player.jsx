import React, { Component } from 'react';
import msConvertor from '../helpers/msConvertor';
import { gameState } from '../contexts/gameState';

class player extends Component {
	static contextType = gameState;
	state = { timer: 5 * 60000 };
	render() {
		const { CP, started } = this.context;
		return (
			<div
				className="player"
				style={
					started && CP === this.props.i
						? { backgroundColor: '#ffc800', color: '#3c3c3c' }
						: { backgroundColor: '#3c3c3c', color: '#ffc800' }
				}
			>
				<h1>{this.props.name}</h1>
				<h1>{msConvertor(this.state.timer)}</h1>
			</div>
		);
	}
}

export default player;
