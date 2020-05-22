const EQUIPMENT_TYPES = {
	weapons: [
		{
			id: 1,
			name: 'Bone Sword',
			attack: 2,
		},
		{
			id: 2,
			name: 'Dragon Hammer',
			attack: 5,
		},
		{
			id: 3,
			name: 'Royal Axe',
			attack: 9,
		},
	],
	armour: [
		{
			id: 4,
			name: 'Plate Armour',
			armour: 9,
			resistances: [
				{
					type: 'fire',
					value: 3,
				},
			],
		},
		{
			id: 5,
			name: 'Golden Armour',
			armour: 14,
			resistances: [
				{
					type: 'poison',
					value: 5,
				},
				{
					type: 'ice',
					value: 1,
				},
			],
		},
		{
			id: 6,
			name: 'Magic Plate Armour',
			armour: 17,
			resistances: [],
		},
	],
	trinkets: [
		{
			id: 7,
			name: 'Ring of Wisdom',
			stat: [
				{
					type: 'intelligence',
					modifier: 'increase',
					value: 3,
					unit: 'flat',
				},
				{
					type: 'critChance',
					modifier: 'decrease',
					value: 5,
					unit: 'percent',
				},
			],
		},
		{
			id: 8,
			name: 'Brass Knuckles',
			stat: [
				{
					type: 'strength',
					modifier: 'increase',
					value: 7,
					unit: 'flat',
				},
			],
		},
		{
			id: 9,
			name: 'Mending Charm',
			stat: [
				{
					type: 'magic',
					modifier: 'increase',
					value: 20,
					unit: 'percent',
				},
			],
		},
	],
};


export default EQUIPMENT_TYPES;

// Carlin Sword
// Dagger
