import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameStateProvider from './contexts/gameState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GameStateProvider>
			<App />
		</GameStateProvider>
	</React.StrictMode>
);
reportWebVitals();
