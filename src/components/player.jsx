import React, { Component } from 'react';
import msConvertor from '../helpers/msConvertor';

class player extends Component {
	state = { timer: 5 * 60000 };
	render() {
		return (
			<div className="player">
				<h1>{this.props.name}</h1>
				<h1>{msConvertor(this.state.timer)}</h1>
			</div>
		);
	}
}

export default player;
