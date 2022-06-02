import React from 'react';
import './styles/index.css';
import GameStateProvider from './contexts/gameState';
import Player from './components/player';

function App() {
	return (
		<GameStateProvider>
			<div className="playerContainer">
				<Player name="5alidshammout" />
				<Player name="opponent" />
			</div>
		</GameStateProvider>
	);
}

export default App;
