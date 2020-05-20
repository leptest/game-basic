import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';
import HealthBar from './HealthBar';
import ManaBar from './ManaBar';
import SpeedBar from './SpeedBar';
import LevelBar from './LevelBar';
import Items from './Items';

import './Player.scss';

const ConnectedPlayer = (props) => {
	// console.log(props);
	const {
		player, attackEnemy, isEnemey, levelUps,
	} = props;

	if (!player) return false;

	const {
		id,
		name,
		level,
		health,
		maxHealth,
		mana,
		maxMana,
		speed,
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
			<div className="name-plate">
				<img className="character__icon" src={icon} alt="" />
				<HealthBar health={health} maxHealth={maxHealth} />
				<ManaBar mana={mana} maxMana={maxMana} />
				<p className="character__name"><strong>{name} - Lvl {level}</strong></p>
			</div>

			<SpeedBar speed={speed} maxSpeed={2000} />
			<p>Str: {strength}</p>
			<p>Spd: {speed}</p>
			<p>Exp: {exp}</p>

			{!isEnemey ? (
				<LevelBar exp={exp} maxExp={level * 10} levelUps={levelUps} />
			) : (
				<p>Exp {exp}</p>
			)}

			{!isDead ? (isEnemey ? (<button type="button" onClick={attack}>Attack</button>) : null) : 'Dead' }

			{/* ITEMS */}
			{!isEnemey ? (
				<>
					<br />
					<p>Potions:</p>
					<Items />
					<br />
					<p>Items:</p>
					<p>...</p>
				</>
			) : null}

		</div>
	);
};

const mapDispatchToProps = {
	...allActions,
};

const mapStateToProps = () => ({
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
