// int = ilvl * levelScaler * scaler * rand(rangeUpper, rangeLower)
// when random modifier is rolled, save ID and rand(rangeUpper, rangeLower) value

const EQUIPMENT_MODIFIERS_PREFIX = {
	cold: [
		{
			prefix: 'Frosted',
			prefixid: 11,
			type: 'cold',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Chilled',
			prefixid: 12,
			type: 'cold',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Icy',
			prefixid: 13,
			type: 'cold',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Frigid',
			prefixid: 14,
			type: 'cold',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Freezing',
			prefixid: 15,
			type: 'cold',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
	],

	fire: [
		{
			prefix: 'Heated',
			prefixid: 21,
			type: 'fire',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Glowing',
			prefixid: 22,
			type: 'fire',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Melting',
			prefixid: 23,
			type: 'fire',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Molten',
			prefixid: 24,
			type: 'fire',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
		{
			prefix: 'Lava',
			prefixid: 25,
			type: 'fire',
			modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
	],
};


/*	{
		id: 1,
		type: 'resistance-fire',
		modifier: 'increase',
		unit: 'percentage',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 100,
	},
	{
		id: 2,
		type: 'resistance-ice',
		modifier: 'increase',
		unit: 'percentage',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 100,
	},
	{
		id: 3,
		type: 'armour',
		modifier: 'increase',
		unit: 'percentage',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 100,
	},
	{
		id: 4,
		type: 'strength',
		modifier: 'increase',
		unit: 'flat',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 10,
	},
	{
		id: 5,
		type: 'intelligence',
		modifier: 'increase',
		unit: 'flat',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 10,
	},
	{
		id: 6,
		type: 'agility',
		modifier: 'increase',
		unit: 'flat',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 10,
	},
	{
		id: 7,
		type: 'damage',
		modifier: 'increase',
		unit: 'percent',
		levelScaler: 1,
		scaler: 1,
		rangeLower: 1,
		rangeUpper: 100,
	}, */


export default EQUIPMENT_MODIFIERS_PREFIX;
