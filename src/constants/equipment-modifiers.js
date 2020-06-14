// int = ilvl * levelScaler * scaler * rand(rangeUpper, rangeLower)
// when random modifier is rolled, save ID and rand(rangeUpper, rangeLower) value

const EQUIPMENT_MODIFIERS = {
	prefix: [
		{
			id: 1001,
			prename: 'frosted',
			type: 'zone-cold',
			// modifier: 'increase',
			unit: 'percentage',
			scaler: 1,
			rangeLower: 1,
			rangeUpper: 100,
		},
	],
	suffix: [
		{
			id: 2001,
			sufname: 'inuit',
			type: 'mob-cold',
			// modifier: 'increase',
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


export default EQUIPMENT_MODIFIERS;
