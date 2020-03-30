import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import Player from './Player';

class ConnectedFightWindow extends Component {
	constructor(props) {
		super(props);

		console.log(props);

		// props.newBattle();
	}

	levelUpHealth = (event) => {
		event.preventDefault();
		console.log('levelUpHealth, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ health: 2 });
	}

	levelUpStrength = (event) => {
		event.preventDefault();
		console.log('levelUpStrength, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ strength: 2 });
	}

	render() {
		const {
			player, enemies, levelUps, newBattle,
		} = this.props;

		return (
			<div>
				<h1>RPG Game</h1>
				<button onClick={newBattle} type="button">New Battle</button>
				<div className="characters">
					{enemies && enemies.length ? enemies.map((enemy) => (<Player key={enemy.id} player={enemy} isEnemey />)) : null }
				</div>
				<p>vs</p>
				<div className="characters">
					<Player player={player} />
				</div>
				{levelUps ? (
					<div>
						<p>You have {levelUps} new levels to spend!</p>
						<button onClick={this.levelUpHealth} type="button">Health ({player.health})</button>
						<button onClick={this.levelUpStrength} type="button">Strength ({player.strength})</button>
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

const mapStateToProps = (state) => {
	console.log('rootReducer', state);
	return {
		player: state.rootReducer.player,
		enemies: state.rootReducer.enemies,
		levelUps: state.rootReducer.levelUps,
	};
};

const FightWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedFightWindow);

export default FightWindow;
