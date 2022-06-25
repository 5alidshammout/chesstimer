import React, { Component } from 'react';
import { useContext } from 'react';
import { gameState } from '../contexts/gameState';

const Paused = _ => {
	const state = useContext(gameState);
	let unit = state.flexDirection === 'row' ? 'vw' : 'vh';
	return (
		<svg viewBox="0 0 1 1" width={'5' + unit} height={'5' + unit}>
			<polygon points="0,0 0.35,0 0.35,1 0,1" />
			<polygon points="0.65,0 1,0 1,1 0.65,1" />
		</svg>
	);
};

const Resumed = _ => {
	const state = useContext(gameState);
	let unit = state.flexDirection === 'row' ? 'vw' : 'vh';
	return (
		<svg viewBox="0 0 1 1" width={'5' + unit} height={'5' + unit}>
			<polygon points="0,0 1,0.5 0,1" />
		</svg>
	);
};

class PauseBtn extends Component {
	static contextType = gameState;
	render() {
		return (
			<div
				onClick={this.context.toggleRunning}
				className={'pause-btn pb-' + this.context.flexDirection}
			>
				{this.context.running ? <Paused /> : <Resumed />}
			</div>
		);
	}
}

export default PauseBtn;
