import { Component, createContext } from 'react';

let gameState = createContext();
class GameStateProvider extends Component {
	state = {
		CP: null,
		running: null,
		started: false,
		isOpenNKO: false,
		keys: {
			a: 'KeyV',
			b: 'KeyN',
		},
		names: {
			a: 'a',
			b: 'b',
		},
	};
	handleKey = e => {
		if (this.state.isOpenNKO) return;
		let key = e.code;
		let player = null;
		let keys = this.state.keys;
		for (let i in keys) {
			if (keys[i] === key) {
				player = i;
			}
		}

		player && this.toggleCP(player);

		key === 'Space' && this.toggleRunning();
	};

	updateNK = (player, e) => {
		let value = e.target.value;
		let names = this.state.names;
		names[player] = value;
		this.setState({ names });
	};

	toggleNKO = () => {
		this.setState({ isOpenNKO: !this.state.isOpenNKO });
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
			<gameState.Provider
				value={{
					...this.state,
					handleKey: this.handleKey,
					updateNK: this.updateNK,
					toggleNKO: this.toggleNKO,
				}}
			>
				{this.props.children}
			</gameState.Provider>
		);
	}
}

export { gameState };
export default GameStateProvider;
