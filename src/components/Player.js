import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';
import HealthBar from './HealthBar';
import ManaBar from './ManaBar';
// import SpeedBar from './SpeedBar';
import LevelBar from './LevelBar';
import SpellBar from './SpellBar';
import Items from './Items';

import './Player.scss';

const ConnectedPlayer = (props) => {
	// console.log(props);
	const {
		player,
		// attackEnemy,
		isEnemey,
		levelUps,
		nextBracket,
		targetPlayer,
		targetedPlayer,
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
		// speed,
		strength,
		agility,
		intelligence,
		// isDead,
		exp,
		icon,
		spells,
	} = player;

	// const attack = () => {
	// 	attackEnemy({ id });
	// };

	let charClass = 'character';

	if (targetedPlayer === id) {
		charClass += ' is-targeted';
	}

	return (
		<div className={charClass} onClick={() => { if (isEnemey) { targetPlayer({ id }); } }}>
			<div className="name-plate">
				<img className="character__icon" src={icon} alt="" />
				<HealthBar health={health} maxHealth={maxHealth} />
				<ManaBar mana={mana} maxMana={maxMana} />
				<p className="character__name"><strong>{name} - Lvl {level}</strong></p>
			</div>
			{!isEnemey ? (
				<LevelBar exp={exp} maxExp={nextBracket} levelUps={levelUps} />
			) : null }
			<br />
			{/* <SpeedBar speed={speed} maxSpeed={2000} /> */}
			<div className="player-stats">
				<p>Str: {strength}</p>
				<p>Agi: {agility}</p>
				<p>Int: {intelligence}</p>
				{/* <p>Spd: {speed}</p> */}
				<p>Exp: {exp}</p>
			</div>

			{/* {!isDead ? (
				isEnemey ? (
					<button type="button" onClick={attack}>Attack</button>
				) : null
			) : 'Dead' } */}

			{/* ITEMS */}
			{!isEnemey ? (
				<div className="player-items">
					{spells && spells.length ? (
						<SpellBar spells={spells} />
					) : null}
					<p>Potions:</p>
					<Items />
					<br />
					<p>Items:</p>
					<p>...</p>
				</div>
			) : null}

		</div>
	);
};

const mapDispatchToProps = {
	...allActions,
};

const mapStateToProps = (state) => ({
	// player: state.player,
	// enemy: state.enemy,
	// levelUps: state.levelUps,
	targetedPlayer: state.rootReducer.targetedPlayer,
});

const Player = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedPlayer);

export default Player;
