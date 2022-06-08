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
		console.log(e.code, this.state.keys[e.code]);
		this.state.keys[e.code] !== null &&
			this.setState({
				CP: this.state.keys[e.code] ?? this.state.CP,
				started: true,
			});
		console.log(this.state);
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
