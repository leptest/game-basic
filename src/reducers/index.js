
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cloneDeep from 'lodash.clonedeep';
import Mob from '../classes/mob';

import {
	ADD_ARTICLE, ATTACK_ENEMY, LEVEL_UP, NEW_BATTLE,
} from '../constants/action-types';
import MONSTER_TYPES from '../constants/monster-types';
import { randomIntegerInRange } from '../utils/utils';

// const test = ;

const initialState = {
	articles: [{
		id: 1,
		title: 'my title',
	}],
	player: {
		id: 1,
		icon: '/images/players/player.svg',
		name: 'Daniel 1',
		level: 1,
		exp: 0,
		health: 10,
		maxHealth: 10,
		strength: 2,
		isDead: false,
		slots: [],
		critChance: 0.2,
	},
	enemies: [
		// Mob(1, 'Demon', randomIntegerInRange(1, 3)),
		// Mob(2, 'Bat', randomIntegerInRange(1, 3)),
		// Mob(3, 'Bat', randomIntegerInRange(1, 3)),
		// Mob(4, 'Demon', randomIntegerInRange(1, 3)),
	],
	levelUps: 0,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_ARTICLE:
		console.log('ADD_ARTICLE');
		return {
			...cloneDeep(state),
			articles: [
				...cloneDeep(state.articles),
				action.payload,
			],
		};

	case NEW_BATTLE:
		console.log('NEW_BATTLE');
		const numEnemies = randomIntegerInRange(1, 4);
		const enemies = [];

		for (let i = 0; i < numEnemies; i++) {
			const randomEnemy = MONSTER_TYPES[Math.floor(Math.random() * MONSTER_TYPES.length)].name;
			enemies.push(Mob(i, randomEnemy, randomIntegerInRange(1, 3)));
		}

		return {
			...cloneDeep(state),
			enemies,
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
			levelUps: state.levelUps - 1,
		};
	}

	case ATTACK_ENEMY:
		console.log('ATTACK_ENEMY');

		const enemy = state.enemies.filter((e) => e.id === action.payload)[0];
		const { player } = state;

		let damageModifier = 1;

		if (Math.random() < player.critChance) {
			damageModifier = 2;
			console.log('Crit!');
		}

		let { isDead } = enemy;
		const damage = player.strength * damageModifier;

		let newHealth = enemy.health - damage;
		let newExp = player.exp;
		let newLevel = player.level;
		let { levelUps } = state;


		console.log(`${player.name} deals ${damage} damage to ${enemy.name}.`);

		if (newHealth <= 0) {
			console.log('Killed the monster!');

			isDead = true;
			newHealth = 0;
			newExp += enemy.exp;
			console.log('newExp', newExp);

			if (newExp >= player.level * 10) {
				levelUps += 1;
				console.log('levelUps', levelUps);
				newExp -= player.level * 10;
				newLevel = player.level + 1;
			}
		}


		enemy.health = newHealth;
		enemy.isDead = isDead;

		// const newEnemies = [...cloneDeep(state.enemies)];
		// newEnemies.push({
		// 	...cloneDeep(attackedEnemy),
		// 	health: newHealth,
		// 	isDead,
		// });


		return {
			...cloneDeep(state),
			// enemies: newEnemies,
			player: {
				...cloneDeep(player),
				level: newLevel,
				exp: newExp,
			},
			levelUps,
		};
	default:
		return state;
	}
};

// export default rootReducer;

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	rootReducer,
});
export default createRootReducer;
