import { Component, createContext } from 'react';

let gameState = createContext();
class GameStateProvider extends Component {
	state = {
		CP: null,
		running: null,
		started: false,
		keys: {
			KeyC: 'a',
			KeyM: 'b',
		},
	};
	toggleCP = e => {
		let player = this.state.keys[e.code];
		player &&
			this.setState({
				CP: player,
				started: true,
				running: player,
			});
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
