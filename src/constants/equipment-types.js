const EQUIPMENT_TYPES = {
	weapons: [
		{
			equipmentid: 1001,
			equipmentname: 'Bone Sword',
			// zone: 'Graveyard',
			attack: 2,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// block: 5,
			// parry: 5,
			// durability: 10,
		},
		{
			equipmentid: 1002,
			equipmentname: 'Steel Sword',
			// zone: 'Valhalla',
			attack: 6,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// block: 5,
			// parry: 5,
			// durability: 100,
		},
		{
			equipmentid: 1003,
			equipmentname: 'Magma Sword',
			// zone: 'Volcano',
			attack: 28,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// block: 5,
			// parry: 5,
			// special: 'increase firedamage',
			// durability: '1000',
		},
		{
			equipmentid: 1888,
			equipmentname: 'Magic Sword',
			// zone: 'Rainbow',
			attack: 50,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// block: 5,
			// parry: 5,
			// special: 'infinite mana' '100% block/parry' 'unblockable',
			// durability: '1000000000000000000',
		},
		{
			equipmentid: 2001,
			equipmentname: 'Bone Hammer',
			// zone: 'Graveyard',
			attack: 5,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// durability: '25',
		},
		{
			equipmentid: 2002,
			equipmentname: 'Steel Hammer',
			// zone: 'Valhalla',
			attack: 10,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// durability: '150',
		},
		{
			equipmentid: 2003,
			equipmentname: 'Magma Hammer',
			// zone: 'volcano',
			attack: 36,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// special: 'increase firedamage'
			// durability: '3000',
		},
		{
			equipmentid: 2888,
			equipmentname: 'Magic Hammer',
			// zone: 'Rainbow',
			attack: 60,
			strength: 5,
			agility: 5,
			intelligence: 5,
			// special: 'infinite mana' '100% block/parry' 'unblockable'
			// durability: '1000000000000000000',
		},
		{
			equipmentid: 3001,
			equipmentname: 'Bone Bow',
			attack: 9,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 3002,
			equipmentname: 'Steel Bow',
			attack: 16,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 3003,
			equipmentname: 'Magma Bow',
			attack: 36,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 3888,
			equipmentname: 'Magic Bow',
			attack: 60,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 4001,
			equipmentname: 'Bone Staff',
			attack: 11,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 4002,
			equipmentname: 'Steel Staff',
			attack: 24,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 4003,
			equipmentname: 'Magma Staff',
			attack: 40,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 4888,
			equipmentname: 'Magic Staff',
			attack: 60,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
	],
	armour: [
		{
			equipmentid: 5001,
			equipmentname: 'Bone Helmet',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 5002,
			equipmentname: 'Steel Helmet',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 5003,
			equipmentname: 'Magma Helmet',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 5888,
			equipmentname: 'Magic Helmet',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 6001,
			equipmentname: 'Bone Boots',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 6002,
			equipmentname: 'Steel Boots',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 6003,
			equipmentname: 'Magma Boots',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 6888,
			equipmentname: 'Magic Boots',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 7001,
			equipmentname: 'Bone Legs',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 7002,
			equipmentname: 'Steel Legs',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 7003,
			equipmentname: 'Magma Legs',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 7888,
			equipmentname: 'Magic Legs',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 8001,
			equipmentname: 'Bone Armour',
			armour: 9,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 8002,
			equipmentname: 'Steel Armour',
			armour: 14,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 8003,
			equipmentname: 'Magma Armour',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 8888,
			equipmentname: 'Magic Armour',
			armour: 17,
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
	],
	trinkets: [
		{
			equipmentid: 9001,
			equipmentname: 'Glacier Amulet',
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 9011,
			equipmentname: 'Garlic Necklace',
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
		{
			equipmentid: 9002,
			equipmentname: 'Platinum Amulet',
			strength: 5,
			agility: 5,
			intelligence: 5,
		},
	],
};

export default EQUIPMENT_TYPES;
/* {
	id: ,
	equipmentname: '',
	attack: ,
}, */

// Carlin Sword
// Dagger
