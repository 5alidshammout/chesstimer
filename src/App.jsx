import React, { useCallback, useEffect, useContext } from 'react';
import './styles/index.css';
import { gameState } from './contexts/gameState';
import Player from './components/player';
import Overlay from './components/overlay';

function App() {
	const { handleKey } = useContext(gameState);
	const handleKeyUp = useCallback(e => handleKey(e), [handleKey]);

	useEffect(
		() => document.addEventListener('keyup', handleKeyUp),
		[handleKeyUp]
	);

	return (
		<div className="App">
			<div className="playerContainer">
				<Player name="5alidshammout" i="a" />
				<Player name="opponent" i="b" />
			</div>
			<Overlay></Overlay>
		</div>
	);
}

export default App;
