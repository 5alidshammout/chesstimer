import React, { useEffect, useContext } from 'react';
import './styles/index.css';
import { gameState } from './contexts/gameState';
import Player from './components/player';
import Overlay from './components/overlay';
import NKOverlay from './components/nameKeyOverlay';
import Burger from './components/burger';

function App() {
	const { handleKey } = useContext(gameState);

	useEffect(() => document.addEventListener('keyup', handleKey), [handleKey]);

	return (
		<div className="App">
			<div className="playerContainer">
				<Player name="a" i="a" />
				<Player name="b" i="b" />
			</div>
			<Burger></Burger>
			<Overlay></Overlay>
			<NKOverlay></NKOverlay>
		</div>
	);
}

export default App;
