import React, { Component } from 'react';
import { gameState } from '../contexts/gameState';
import KeyChanger from './keyChanger';
class NKOverlay extends Component {
	static contextType = gameState;
	render() {
		return (
			<div className={(this.context.isOpenNKO ? 'NKOActive ' : '') + 'NKO'}>
				<div className="NK-a">
					<input
						type="text"
						name="player's 1 name"
						id="N-a"
						onChange={e => this.context.updateNK('a', e)}
					/>
					<KeyChanger i="a"></KeyChanger>
				</div>
				<div className="NK-b">
					<input
						type="text"
						name="player's 2 name"
						id="N-b"
						onChange={e => this.context.updateNK('b', e)}
					/>
					<KeyChanger i="b"></KeyChanger>
				</div>
			</div>
		);
	}
}

export default NKOverlay;
