import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './FightWindow.scss';

import Player from './Player';
import Stages from './Stages';

class ConnectedFightWindow extends Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	// console.log('ConnectedFightWindow props', props);
	//
	// 	// props.newBattle();
	// }

	levelUpStrength = (event) => {
		event.preventDefault();
		console.log('levelUpStrength, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ strength: 5 });
	}

	levelUpagility = (event) => {
		event.preventDefault();
		console.log('levelUpagility, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ agility: 5 });
	}

	levelUpintelligence = (event) => {
		event.preventDefault();
		console.log('levelUpintelligence, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ intelligence: 5 });
	}

	render() {
		const {
			player,
			enemies,
			levelUps,
			// newBattle,
			nextBracket,
			currentZone,
			currentStage,
		} = this.props;

		return (
			<div className="fight-window">
				<header>
					<h1>Battle Window</h1>
					<Stages />
					<h1>Zone {currentZone} - Stage {currentStage}</h1>
				</header>

				<div className="characters characters--player">
					<Player player={player} levelUps={levelUps} nextBracket={nextBracket} />
				</div>

				<div className="characters characters--enemies">
					{enemies && enemies.length ? enemies.map((enemy) => (
						<Player key={enemy.id} player={enemy} isEnemey />
					)) : null }

				</div>

				{levelUps ? (
					<div className="level-ups">
						<p>You have {levelUps} new levels to spend!</p>
						<button onClick={this.levelUpStrength} type="button">Strength ({player.strength})</button>
						<button onClick={this.levelUpagility} type="button">agility ({player.agility})</button>
						<button onClick={this.levelUpintelligence} type="button">intelligence ({player.intelligence})</button>
					</div>
				) : null }

			</div>
		);
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		fightEnemy: (enemy) => dispatch(attackEnemy(enemy)),
// 	};
// }

const mapDispatchToProps = {
	// attackEnemy: allActions.attackEnemy,
	...allActions,
};

const mapStateToProps = (state) => ({
	player: state.rootReducer.player,
	enemies: state.rootReducer.enemies,
	levelUps: state.rootReducer.levelUps,
	nextBracket: state.rootReducer.nextBracket,
	currentZone: state.rootReducer.currentZone,
	currentStage: state.rootReducer.currentStage,
});

const FightWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedFightWindow);

export default FightWindow;
