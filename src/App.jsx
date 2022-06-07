import React, { useCallback, useEffect } from 'react';
import './styles/index.css';
import GameStateProvider, { gameState } from './contexts/gameState';
import Player from './components/player';

function App() {
	const handleKeyUp = useCallback(e => console.log(gameState.toggleCP), []);

	useEffect(
		() => document.addEventListener('keyup', handleKeyUp),
		[handleKeyUp]
	);

	return (
		<GameStateProvider>
			<div className="playerContainer" onKeyUp={gameState.toggleCP}>
				<Player name="5alidshammout" i="a" />
				<Player name="opponent" i="b" />
			</div>
		</GameStateProvider>
	);
}

export default App;
