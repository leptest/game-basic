const MONSTER_TYPES = [
	{
		name: 'The Sausage King',
		base: {
			exp: 20,
			health: 100,
			mana: 250,
			strength: 10,
			agility: 10,
			intelligence: 10,
			speed: 1000,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: .5,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Merry',
		base: {
			exp: 666,
			health: 666,
			mana: 666,
			strength: 666,
			agility: 666,
			intelligence: 666,
			speed: 666,
		},
		scalers: {
			variance: 1,
			exp: .5,
			health: .5,
			mana: .5,
			strength: .5,
			agility: .5,
			intelligence: .5,
			speed: .5,
		},
	},
	{
		name: 'Demon',
		base: {
			exp: 5,
			health: 40,
			mana: 100,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 50,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Ghost',
		base: {
			exp: 4,
			health: 20,
			mana: 5,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 100,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Bat',
		base: {
			exp: 3,
			health: 10,
			mana: 10,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 150,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'rat',
		base: {
			exp: 2,
			health: 5,
			mana: 5,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 200,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Seadevil',
		base: {
			exp: 2,
			health: 5,
			mana: 5,
			strength: 3,
			agility: 5,
			intelligence: 1,
			speed: 200,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Clyde E.T.',
		base: {
			exp: 20,
			health: 55,
			mana: 200,
			strength: 4,
			agility: 5,
			intelligence: 6,
			speed: 500,
		},
		scalers: {
			variance: 1,
			exp: 1,
			health: 1,
			mana: 1,
			strength: 1,
			agility: 1,
			intelligence: 1,
			speed: 1,
		},
	},
	{
		name: 'Alex',
		base: {
			exp: 10,
			health: 100,
			mana: 100,
			strength: 10,
			agility: 10,
			intelligence: 10,
			speed: 10,
		},
		scalers: {
			variance: 1,
			exp: .5,
			health: .5,
			mana: .5,
			strength: .5,
			agility: .5,
			intelligence: .5,
			speed: .5,
		},
	},
		{
			name: 'Alice',
			base: {
				exp: 10,
				health: 100,
				mana: 100,
				strength: 10,
				agility: 10,
				intelligence: 10,
				speed: 10,
			},
			scalers: {
				variance: 1,
				exp: .5,
				health: .5,
				mana: .5,
				strength: .5,
				agility: .5,
				intelligence: .5,
				speed: .5,
			},
		},
			{
				name: 'Alison',
				base: {
					exp: 10,
					health: 100,
					mana: 100,
					strength: 10,
					agility: 10,
					intelligence: 10,
					speed: 10,
				},
				scalers: {
					variance: 1,
					exp: .5,
					health: .5,
					mana: .5,
					strength: .5,
					agility: .5,
					intelligence: .5,
					speed: .5,
				},
			},
				{
					name: 'Allan',
					base: {
						exp: 10,
						health: 100,
						mana: 100,
						strength: 10,
						agility: 10,
						intelligence: 10,
						speed: 10,
					},
					scalers: {
						variance: 1,
						exp: .5,
						health: .5,
						mana: .5,
						strength: .5,
						agility: .5,
						intelligence: .5,
						speed: .5,
					},
				},
					{
						name: 'Amari',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Ann',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Aycvan',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Bass',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Brad',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Brendon',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Casey',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Chris',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Clive',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Code Name',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Cooper',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Dane',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Dean',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Domrex',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Ellie',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Eva',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Fiona',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Gina',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Gunnar',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Heidy',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Jack',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'James',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Jaydin',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Johnson',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Joslyn',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Kassidy',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Kay',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'kaylin',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Langlong',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Larry',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Lee',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Leland',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Lizbeth',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Malcolm',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Mallory',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Marina',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Messiah',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Morgan',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Nickra',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Nola',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Paige',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Paul',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Rah Heed',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Ramo',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Raphael',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Ray',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Rita',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Robert',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Sally',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Savanna',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Seal',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Shah',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Sofia',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Soren',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Taryn',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Thomas',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Tina',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Tom',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Tomas',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Treal',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Trevour',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Trez',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Trip',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Valeria',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Vel',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Walter',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
					{
						name: 'Willy',
						base: {
							exp: 10,
							health: 100,
							mana: 100,
							strength: 10,
							agility: 10,
							intelligence: 10,
							speed: 10,
						},
						scalers: {
							variance: 1,
							exp: .5,
							health: .5,
							mana: .5,
							strength: .5,
							agility: .5,
							intelligence: .5,
							speed: .5,
						},
					},
];

export default MONSTER_TYPES;
