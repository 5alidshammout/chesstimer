import React, { Component } from 'react';
import { gameState } from '../contexts/gameState';

class Burger extends Component {
	static contextType = gameState;
	state = {
		isOpen: false,
	};
	render() {
		return (
			<div
				className={(this.state.isOpen ? 'activeBurger ' : '') + 'burger'}
				onClick={_ => this.toggleC()}
				onKeyUp={e => this.toggleK(e)}
				tabIndex="0"
			>
				<div className="dash"></div>
				<div className="dash"></div>
				<div className="dash"></div>
			</div>
		);
	}
	toggleC() {
		this.setState({ isOpen: !this.state.isOpen });
		this.context.toggleNKO();
	}
	toggleK(e) {
		if (e.code === 'Enter' || e.code === 'Space') {
			this.setState({ isOpen: !this.state.isOpen });
			this.context.toggleNKO();
		}
	}
}

export default Burger;
