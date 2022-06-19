import React, { Component } from 'react';
import msConvertor from '../helpers/msConvertor';
import { gameState } from '../contexts/gameState';
import pallete from '../helpers/pallete';

class player extends Component {
	static contextType = gameState;
	state = { timer: 5 * 60000 };
	render() {
		const { CP, started } = this.context;
		return (
			<div
				className="player"
				style={
					started && CP === this.props.i
						? { backgroundColor: pallete.vividSkyBlue, color: pallete.jet }
						: { backgroundColor: pallete.jet, color: pallete.vividSkyBlue }
				}
				onClick={_ => {
					this.context.toggleCP(this.props.i);
					this.context.setState({ running: this.props.i });
				}}
			>
				<h1>{this.context.names[this.props.i]}</h1>
				<h1>{msConvertor(this.state.timer)}</h1>
			</div>
		);
	}
	componentDidUpdate() {
		if (!this.timer && this.context.running === this.props.i) {
			this.startTimer();
		} else if (this.timer && this.context.running !== this.props.i) {
			this.stopTimer();
		}
	}
	startTimer() {
		if (!this.timer) {
			this.timer = setInterval(
				() => this.setState({ timer: this.state.timer - 4 }),
				4
			);
		}
	}
	stopTimer() {
		clearInterval(this.timer);
		this.timer = null;
	}
}

export default player;
