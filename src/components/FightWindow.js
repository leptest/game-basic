import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import Player from './Player';

class ConnectedFightWindow extends Component {
	attack = (event) => {
		event.preventDefault();
		console.log('attack, this.props', this.props);
		const { attackEnemy, enemy } = this.props;
		attackEnemy(enemy);
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
		const { player, enemy, hasLevelToSpend } = this.props;

		return (
			<div>
				<h1>RPG Game</h1>
				<Player player={player} />
				<p>vs</p>
				<Player player={enemy} />
				<button onClick={this.attack} type="button">Fight</button>
				{hasLevelToSpend ? (
					<div>
						<button onClick={this.levelUpHealth} type="button">Health</button>
						<button onClick={this.levelUpStrength} type="button">Strength</button>
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
	player: state.player,
	enemy: state.enemy,
	isLevelUp: state.isLevelUp,
	hasLevelToSpend: state.hasLevelToSpend,
});

const FightWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedFightWindow);

export default FightWindow;
