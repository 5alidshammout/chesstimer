import React from 'react';
import './index.css';
import GameStateProvider from './contexts/gameState';
import Player from './components/player';

function App() {
	return (
		<GameStateProvider>
			<Player name="5alidshammout" />
			<Player name="opponent" />
		</GameStateProvider>
	);
}

export default App;
