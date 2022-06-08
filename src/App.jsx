import React, { useCallback, useEffect, useContext } from 'react';
import './styles/index.css';
import { gameState } from './contexts/gameState';
import Player from './components/player';

function App() {
	const { toggleCP } = useContext(gameState);
	const handleKeyUp = useCallback(e => toggleCP(e), [toggleCP]);

	useEffect(
		() => document.addEventListener('keyup', handleKeyUp),
		[handleKeyUp]
	);

	return (
		<div className="playerContainer">
			<Player name="5alidshammout" i="a" />
			<Player name="opponent" i="b" />
		</div>
	);
}

export default App;
