const SPELL_TYPES = [
	{
		id: 1,
		name: 'Fireball',
		targetType: 'single',
		damageType: 'magic',
		manaCost: 3,
		cooldown: 3.0,
		duration: 1,
		damage: 3,
	},
	{
		id: 3,
		name: 'agi attack',
		targetType: 'single',
		damageType: 'magic',
		manaCost: 2,
		cooldown: 1.0,
		duration: 1,
		damage: 2,
	},
	{
		id: 5,
		name: 'str attack',
		targetType: 'single',
		damageType: 'physical',
		manaCost: 1,
		cooldown: 1.0,
		duration: 1,
		damage: 1,
	},
	{
		id: 6,
		name: 'Exura Gran',
		targetType: 'single',
		damageType: 'heal',
		manaCost: 3,
		cooldown: 5.0,
		damage: 20,
	},
];

export default SPELL_TYPES;
