import { Component, createContext } from 'react';

let gameState = createContext();
class GameStateProvider extends Component {
	state = {
		CP: null,
		running: null,
		started: false,
		isOpenNKO: false,
		keys: {
			a: 'KeyA',
			b: 'KeyB',
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
		let v = e.target.value;
		let names = this.state.names;
		names[player] = v === '' ? player : v;
		this.setState({ names });
	};

	toggleNKO = () => {
		if (this.state.isOpenNKO && 'activeElement' in document) {
			document.activeElement.blur();
		}
		this.setState({ isOpenNKO: !this.state.isOpenNKO });
		if (this.state.running) {
			this.setState({
				running: null,
			});
		}
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

	setKeys = (key, player) =>
		this.setState({
			keys: {
				...this.state.keys,
				[player]: key,
			},
		});

	render() {
		return (
			<gameState.Provider
				value={{
					...this.state,
					handleKey: this.handleKey,
					updateNK: this.updateNK,
					toggleNKO: this.toggleNKO,
					setKeys: this.setKeys,
				}}
			>
				{this.props.children}
			</gameState.Provider>
		);
	}
}

export { gameState };
export default GameStateProvider;
