import { Component, createContext } from 'react';

let gameState = createContext();
class GameStateProvider extends Component {
	state = {
		CP: null,
		running: false,
		started: false,
		keys: {
			KeyC: 'a',
			KeyM: 'b',
		},
	};
	toggleCP = e => {
		alert(e);
		// this.state.keys[e.code] !== null &&
		// 	this.setState({
		// 		CP: this.state.CP === this.state.keys[e.code],
		// 		started: true,
		// 	});
	};
	render() {
		return (
			<gameState.Provider value={{ ...this.state, toggleCP: this.toggleCP }}>
				{this.props.children}
			</gameState.Provider>
		);
	}
}

export { gameState };
export default GameStateProvider;
