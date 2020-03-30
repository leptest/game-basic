import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';
import HealthBar from './HealthBar';

import './Player.scss';

const ConnectedPlayer = (props) => {
	// console.log(props);
	const { player, attackEnemy, isEnemey } = props;

	if (!player) return false;

	const {
		id,
		name,
		level,
		health,
		maxHealth,
		strength,
		isDead,
		exp,
		icon,
	} = player;

	const attack = () => {
		attackEnemy(id);
	};

	return (
		<div className="character">
			<img className="character__icon" src={icon} alt="" />
			<HealthBar health={health} maxHealth={maxHealth} />
			<p><strong>{name}</strong></p>
			<p>Lvl {level} - Str {strength} - Exp {exp}{!isEnemey ? (<>/{level * 10} </>) : null}</p>
			{!isDead ? (<button type="button" onClick={attack}>Attack</button>) : 'Dead' }
		</div>
	);
};

const mapDispatchToProps = {
	...allActions,
};

const mapStateToProps = (state) => ({
	// player: state.player,
	// enemy: state.enemy,
	// enemy2: state.enemy2,
	// levelUps: state.levelUps,
});

const Player = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedPlayer);

export default Player;
