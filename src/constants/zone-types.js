// TODO: moved isCompleted back to state, and just keep an array of completed IDs.

const ZONE_TYPES = [
	{
		title: 'Zone 1 - The Eternal Blaze',
		zone: 1,
		isCompleted: true,
		isLocked: false,
		stages: [
			{
				stage: 1,
				title: 'Stage 1 - Fire Caverns',
				isCompleted: true,
				isLocked: false,
			},
			{
				stage: 2,
				title: 'Stage 2 - Lava Path',
				isCompleted: true,
				isLocked: false,
			},
			{
				stage: 3,
				title: 'Stage 3 - Fire Mountain',
				isCompleted: true,
				isLocked: false,
			},
		],
	},
	{
		title: 'Zone 2 - Ice Caverns of Doom',
		zone: 2,
		isCompleted: false,
		isLocked: false,
		stages: [
			{
				stage: 1,
				title: 'Stage 1 - Shattered Bones',
				isCompleted: true,
				isLocked: false,
			},
			{
				stage: 2,
				title: 'Stage 2 - Wintery Brawl',
				isCompleted: false,
				isLocked: false,
			},
			{
				stage: 3,
				title: 'Stage 3 - Frozen Solid',
				isCompleted: false,
				isLocked: true,
			},
		],
	},
	{
		title: 'Zone 3 - Plagued Swamps',
		zone: 3,
		isCompleted: false,
		isLocked: true,
		stages: [
			{
				stage: 1,
				title: 'Stage 1 - Infested Marsh',
				isCompleted: false,
				isLocked: true,
			},
			{
				stage: 2,
				title: 'Stage 2 - Snakes!',
				isCompleted: false,
				isLocked: true,
			},
			{
				stage: 3,
				title: 'Stage 3 - Consumed from Within',
				isCompleted: false,
				isLocked: true,
			},
		],
	},
];

export default ZONE_TYPES;
