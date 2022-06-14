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
				onClick={e => this.toggle(e)}
			>
				<div className="dash"></div>
				<div className="dash"></div>
				<div className="dash"></div>
				<div className="dash"></div>
			</div>
		);
	}
	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
      this.context.toggleNKO();
	}
}

export default Burger;
