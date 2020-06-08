import MONSTER_TYPES from '../constants/monster-types';

const Mob = (id, type, level) => {
	const mobType = MONSTER_TYPES.filter((m) => m.name === type)[0];

	// const newVariance = Math.random() < 0.5 ? 1 - mobType.scalers.variance : 1 + mobType.scalers.variance;
	const newVariance = mobType.scalers.variance;

	return {
		id,
		icon: `/images/monsters/${type}.gif`,
		name: type,
		level,
		exp: Math.ceil(mobType.base.exp * mobType.scalers.exp * level * newVariance),
		maxHealth: Math.ceil(mobType.base.health * mobType.scalers.health * level * newVariance),
		health: Math.ceil(mobType.base.health * mobType.scalers.health * level * newVariance),
		maxMana: Math.ceil(mobType.base.mana * mobType.scalers.mana * level * newVariance),
		mana: Math.ceil(mobType.base.mana * mobType.scalers.mana * level * newVariance),
		strength: Math.ceil(mobType.base.strength * mobType.scalers.strength * level * newVariance),
		agility: Math.ceil(mobType.base.agility * mobType.scalers.agility * level * newVariance),
		intelligence: Math.ceil(mobType.base.intelligence * mobType.scalers.intelligence * level * newVariance),
		speed: Math.ceil(mobType.base.speed * mobType.scalers.speed * level * newVariance),
		isDead: false,
		slots: [],
	};
};

export default Mob;
