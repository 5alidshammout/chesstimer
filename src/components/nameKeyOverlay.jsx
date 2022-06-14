import React, { Component } from 'react';
import { gameState } from '../contexts/gameState';

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
				</div>
				<div className="NK-b">
					<input
						type="text"
						name="player's 2 name"
						id="N-b"
						onChange={e => this.context.updateNK('b', e)}
					/>
				</div>
			</div>
		);
	}
}

export default NKOverlay;
