import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './FightWindow.scss';

import Player from './Player';

class ConnectedFightWindow extends Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	// console.log('ConnectedFightWindow props', props);
	//
	// 	// props.newBattle();
	// }

	levelUpHealth = (event) => {
		event.preventDefault();
		console.log('levelUpHealth, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ health: 15 });
	}

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
			newBattle,
		} = this.props;

		return (
			<div className="fight-window">
				<header>
					<br />
					<h1>Battle!</h1>
				</header>

				<div className="characters characters--player">
					<Player player={player} levelUps={levelUps} />
				</div>

				<div className="characters characters--enemies">
					{enemies && enemies.length ? enemies.map((enemy) => (
						<Player key={enemy.id} player={enemy} isEnemey />
					)) : null }
				</div>

				{levelUps ? (
					<div className="level-ups">
						<p>You have {levelUps} new levels to spend!</p>
						<button className="button" onClick={this.levelUpHealth} type="button">Health ({player.health})</button>
						<button onClick={this.levelUpStrength} type="button">Strength ({player.strength})</button>
						<button onClick={this.levelUpagility} type="button">agility ({player.agility})</button>
						<button onClick={this.levelUpintelligence} type="button">intelligence ({player.intelligence})</button>

					</div>
				) : null }

				<footer>
					<button className="button" style={{ float: 'right' }} onClick={newBattle} type="button">Next Fight</button>
				</footer>
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
});

const FightWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedFightWindow);

export default FightWindow;
