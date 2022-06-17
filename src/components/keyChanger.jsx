import React, { Component } from 'react';
import { gameState } from '../contexts/gameState';

class KeyChanger extends Component {
	static contextType = gameState;
	render() {
		return (
			<button onKeyUp={e => this.setKey(e)} className="btn">
				{this.context.keys[this.props.i]}
			</button>
		);
	}

	setKey(e) {
		if (e.key !== 'Tab' && !e.key.includes('Alt')) {
			this.context.setKeys(e.code, this.props.i);
		}
	}
}

export default KeyChanger;
