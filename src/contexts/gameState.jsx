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
	handleKey = e => {
		let key = e.code;
		let player = this.state.keys[key];

		player && this.toggleCP(player);

		key === 'Space' && this.toggleRunning();
	};

	toggleRunning = () => {
		if (this.state.running) {
			this.setState({
				running: null,
			});
		} else if (this.state.started) {
			this.setState({
				running: this.state.CP,
			});
		}
	};
	toggleCP = player =>
		this.setState({
			CP: player,
			started: true,
			running: player,
		});

	render() {
		return (
			<gameState.Provider value={{ ...this.state, handleKey: this.handleKey }}>
				{this.props.children}
			</gameState.Provider>
		);
	}
}

export { gameState };
export default GameStateProvider;
