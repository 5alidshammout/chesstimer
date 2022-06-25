import React, { useEffect, useContext } from 'react';
import './styles/index.css';
import { gameState } from './contexts/gameState';
import Player from './components/player';
import Overlay from './components/overlay';
import NKOverlay from './components/nameKeyOverlay';
import Burger from './components/burger';
import PauseBtn from './components/pauseBtn';

function App() {
	const { handleKey, handleResize, flexDirection } = useContext(gameState);

	useEffect(() => document.addEventListener('keyup', handleKey), [handleKey]);
	useEffect(
		() => window.addEventListener('resize', handleResize),
		[handleResize]
	);
	useEffect(
		() => window.addEventListener('load', handleResize),
		[handleResize]
	);

	return (
		<div className="App">
			<div className={'PC' + flexDirection + ' playerContainer'}>
				<Player name="a" i="a" />
				<Player name="b" i="b" />
			</div>
			<Burger cn={'B' + flexDirection}></Burger>
			<Overlay></Overlay>
			<PauseBtn />
			<NKOverlay cn={'NKO' + flexDirection}></NKOverlay>
		</div>
	);
}

export default App;
