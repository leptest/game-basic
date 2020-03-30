import MONSTER_TYPES from '../constants/monster-types';

const Mob = (id, type, level) => {
	console.log('new mob');

	const mobType = MONSTER_TYPES.filter((m) => m.name === type)[0];

	// const newVariance = Math.random() < 0.5 ? 1 - mobType.scalers.variance : 1 + mobType.scalers.variance;
	const newVariance = 1;

	return {
		id,
		icon: `/images/monsters/${type}.svg`,
		name: type,
		level,
		exp: Math.ceil(5 * mobType.scalers.exp * level * newVariance),
		maxHealth: Math.ceil(10 * mobType.scalers.health * level * newVariance),
		health: Math.ceil(10 * mobType.scalers.health * level * newVariance),
		strength: Math.ceil(1 * mobType.scalers.strength * level * newVariance),
		isDead: false,
		slots: [],
	};
};

export default Mob;
