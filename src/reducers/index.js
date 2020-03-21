import cloneDeep from 'lodash.clonedeep';

import { ADD_ARTICLE, ATTACK_ENEMY, LEVEL_UP } from '../constants/action-types';

// import { randomIntegerInRange } from '../utils/utils';

const initialState = {
	articles: [{
		id: 1,
		title: 'my title',
	}],
	player: {
		name: 'Daniel',
		level: 1,
		exp: 0,
		health: 10,
		strength: 10,
		isDead: false,
		slots: [],
		critChance: 0.2,
	},
	enemy: {
		name: 'Demon',
		level: 1,
		exp: 5, // randomIntegerInRange(1, 10),
		health: 10,
		strength: 1,
		isDead: false,
		slots: [],
	},
	isLevelUp: false,
	hasLevelToSpend: false,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
	case ADD_ARTICLE:
		return {
			...cloneDeep(state),
			articles: [
				...cloneDeep(state.articles),
				action.payload,
			],
		};

	case LEVEL_UP: {
		console.log('LEVEL_UP');
		const newStats = {};

		if (action.payload.health) {
			newStats.health = state.player.health + action.payload.health;
		} else if (action.payload.strength) {
			newStats.strength = state.player.strength + action.payload.strength;
		}

		return {
			...cloneDeep(state),
			player: {
				...cloneDeep(state.player),
				...newStats,
			},
		};
	}

	case ATTACK_ENEMY:
		// console.log('ATTACK_ENEMY action.payload', action.payload);

		let damageModifier = 1;

		if (Math.random() < state.player.critChance) {
			damageModifier = 2;
			console.log('Crit!');
		}

		let { isDead } = state.enemy;
		const damage = state.player.strength * damageModifier;

		let newHealth = state.enemy.health - damage;
		let newExp = state.player.exp;
		let newLevel = state.player.level;
		let { hasLevelToSpend } = state;
		let { isLevelUp } = state;


		console.log(`${state.player.name} deals ${damage} damage to ${state.enemy.name}.`);

		if (newHealth <= 0) {
			console.log('Killed the monster!');

			isDead = true;
			newHealth = 0;
			newExp += state.enemy.exp;
			console.log('newExp', newExp);

			isLevelUp = newExp >= state.player.level * 10;
			if (isLevelUp) {
				console.log('isLevelUp', isLevelUp);
				newExp = 0;
				newLevel = state.player.level + 1;
				hasLevelToSpend = true;
			}
		}

		return {
			...cloneDeep(state),
			enemy: {
				...cloneDeep(state.enemy),
				health: newHealth,
				isDead,
			},
			player: {
				...cloneDeep(state.player),
				level: newLevel,
				exp: newExp,
			},
			isLevelUp,
			hasLevelToSpend,
		};
	default:
		return state;
	}
}

export default rootReducer;
