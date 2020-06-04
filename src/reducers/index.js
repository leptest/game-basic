
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cloneDeep from 'lodash.clonedeep';
import Mob from '../classes/mob';

import {
	ADD_ARTICLE,
	TARGET_PLAYER,
	ATTACK_ENEMY,
	CAST_SPELL,
	LEVEL_UP,
	NEW_BATTLE,
	USE_POTION,
} from '../constants/action-types';
import MONSTER_TYPES from '../constants/monster-types';
import SPELL_TYPES from '../constants/spell-types';
import { randomIntegerInRange } from '../utils/utils';

// const test = ;

const initialState = {
	articles: [{
		id: 1,
		title: 'my title',
	}],
	player: {
		id: 99,
		icon: '/images/players/player.svg',
		name: 'Daniel',
		level: 1,
		exp: 0,
		health: 20,
		maxHealth: 20,
		mana: 5,
		maxMana: 10,
		strength: 2,
		agility: 2,
		intelligence: 2,
		speed: 200,
		isDead: false,
		slots: [],
		critChance: 0.2,
		spells: SPELL_TYPES,
	},
	enemies: [],
	levelUps: 0,
	targetedPlayer: null,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_ARTICLE: {
		console.log('ADD_ARTICLE');
		return {
			...cloneDeep(state),
			articles: [
				...cloneDeep(state.articles),
				action.payload,
			],
		};
	}

	case TARGET_PLAYER: {
		console.log('TARGET_PLAYER', action.payload);
		return {
			...cloneDeep(state),
			targetedPlayer: action.payload.id,
		};
	}

	case USE_POTION: {
		console.log('USE_POTION', action.payload);


		// Mana
		let newPlayerMana = state.player.mana;
		if (action.payload.type === 'mana') {
			newPlayerMana += 10;
		}
		if (newPlayerMana > state.player.maxMana) {
			newPlayerMana = state.player.maxMana;
		}

		// Health
		let newPlayerHealth = state.player.health;
		if (action.payload.type === 'health') {
			newPlayerHealth += 10;
		}
		if (newPlayerHealth > state.player.maxHealth) {
			newPlayerHealth = state.player.maxHealth;
		}

		return {
			...cloneDeep(state),
			player: {
				...cloneDeep(state.player),
				mana: newPlayerMana,
				health: newPlayerHealth,
			},
		};
		// return {
		// 	...cloneDeep(state),
		// 	player: [
		// 		...cloneDeep(state.articles),
		// 		action.payload,
		// 	],
		// };
	}

	case NEW_BATTLE: {
		console.log('NEW_BATTLE');
		const numEnemies = randomIntegerInRange(1, 4);
		const enemies = [];

		for (let i = 0; i < numEnemies; i += 1) {
			const mobLevel = state.player.level; // randomIntegerInRange(1, 3)
			const randomEnemy = MONSTER_TYPES[Math.floor(Math.random() * MONSTER_TYPES.length)].name;
			enemies.push(Mob(i, randomEnemy, mobLevel));
		}

		return {
			...cloneDeep(state),
			enemies,
		};
	}

	case LEVEL_UP: {
		console.log('LEVEL_UP');
		const newStats = {};

		if (action.payload.health) {
			newStats.health = state.player.health + action.payload.health;
		} else if (action.payload.strength) {
			newStats.strength = state.player.strength + action.payload.strength;
		} else if (action.payload.agility) {
			newStats.agility = state.player.agility + action.payload.agility;
		} else if (action.payload.intelligence) {
			newStats.intelligence = state.player.intelligence + action.payload.intelligence;
		}
		console.log(newStats);

		return {
			...cloneDeep(state),
			player: {
				...cloneDeep(state.player),
				...newStats,
			},
			levelUps: state.levelUps - 1,
		};
	}

	case CAST_SPELL: {
		const { id, spell } = action.payload;
		console.log('CAST_SPELL', spell.name, spell.damageType);

		const enemy = state.enemies.filter((e) => e.id === state.targetedPlayer)[0];
		const { player } = state;

		// Check mana cost
		// Check spell type (damage, heal, buff, etc)
		// Check for valid target based on type
		// If damage, do damage calc, apply damage, check for death and levelup.
		// If heal, do heal calc, and apply.
		// If spell cast successfully, reduce mana.


		// < spell.cost
		if (player.mana < spell.manaCost) {
			return {
				...cloneDeep(state),
			};
		}
		let damageModifier = 1;

		switch (spell.damageType) {
		case 'magic':
			// console.log('magic');
			break;
		case 'physical':
			// console.log('physical');
			break;
		case 'heal':
			// console.log('heal');
			break;
		default:
			// console.log('default');
		}


		if (Math.random() < player.critChance) {
			damageModifier = 2;
			console.log('Crit!');
		}

		let { isDead } = enemy;
		const damage = spell.damage * damageModifier;

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
		enemy.mana -= 1;

		// TODO: calc damange from mob -> player
		let newPlayerIsDead = false;
		let newPlayerHealth = player.health - enemy.strength;
		let newPlayerMana = player.mana - spell.manaCost;
		if (Math.random() < (player.agility / 100)) {
			newPlayerHealth = player.health;
		}

		if (newPlayerMana < 0) {
			newPlayerMana = 0;
		}

		if (newPlayerHealth <= 0) {
			newPlayerIsDead = true;
			newPlayerHealth = 0;
		}

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
				health: newPlayerHealth,
				isDead: newPlayerIsDead,
				mana: newPlayerMana,
			},
			levelUps,
		};
	}

	case ATTACK_ENEMY: {
		console.log('ATTACK_ENEMY', action.payload.spell);

		const enemy = state.enemies.filter((e) => e.id === action.payload.id)[0];
		const { player } = state;

		// < spell.cost
		if (player.mana < 1) {
			return {
				...cloneDeep(state),
			};
		}
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
		enemy.mana -= 1;

		// TODO: calc damange from mob -> player
		let newPlayerIsDead = false;
		let newPlayerHealth = player.health - enemy.strength;
		let newPlayerMana = player.mana - 1;
		if (Math.random() < (player.agility / 100)) {
			newPlayerHealth = player.health;
		}

		if (newPlayerMana < 0) {
			newPlayerMana = 0;
		}

		if (newPlayerHealth <= 0) {
			newPlayerIsDead = true;
			newPlayerHealth = 0;
		}

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
				health: newPlayerHealth,
				isDead: newPlayerIsDead,
				mana: newPlayerMana,
			},
			levelUps,
		};
	}

	default: {
		return state;
	}
	}
};

// export default rootReducer;

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	rootReducer,
});
export default createRootReducer;
