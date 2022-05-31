import { Component, createContext } from 'react';

let gameState = createContext();

class GameStateProvider extends Component {
	state = { CP: 0, started: false, finished: false };
	render() {
		return (
			<gameState.Provider value={this.state.CP}>
				{this.props.children}
			</gameState.Provider>
		);
	}
}

export default GameStateProvider;
