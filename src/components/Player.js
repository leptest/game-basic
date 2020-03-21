import React from 'react';

const Player = (props) => {
	const { player } = props;
	const {
		name,
		level,
		health,
		isDead,
		exp,
	} = player;

	const attack = () => {
		console.log('attack!');
	};

	return (
		<div>
			{name} - Level {level} - HP {health} - Exp {exp} - {isDead ? 'dead' : 'alive'} - <button type="button" onClick={attack}>Attack</button>
		</div>
	);
};

export default Player;
