
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cloneDeep from 'lodash.clonedeep';
import Mob from '../classes/mob';

import {
	TARGET_PLAYER,
	ATTACK_ENEMY,
	CAST_SPELL,
	LEVEL_UP,
	NEW_BATTLE,
	USE_POTION,
} from '../constants/action-types';
import MONSTER_TYPES from '../constants/monster-types';
import SPELL_TYPES from '../constants/spell-types';
import ZONE_TYPES from '../constants/zone-types';
import EXP_LEVELS from '../constants/exp-levels';
import { randomIntegerInRange } from '../utils/utils';

// const test = ;

const initialState = {
	player: {
		id: 99,
		icon: '/images/players/player.svg',
		name: 'Daniel',
		level: 1,
		exp: 0,
		health: 20,
		maxHealth: 20,
		mana: 10,
		maxMana: 10,
		strength: 1,
		agility: 1,
		intelligence: 1,
		speed: 200,
		isDead: false,
		slots: [],
		critChance: 0.2,
		spells: SPELL_TYPES,
	},
	enemies: [],
	levelUps: 0,
	nextBracket: 10,
	targetedPlayer: null,
	isFighting: false,
	currentZone: 2,
	currentStage: 1,
	zones: ZONE_TYPES,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
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
			newPlayerMana += action.payload.amount;
		}
		if (newPlayerMana > state.player.maxMana) {
			newPlayerMana = state.player.maxMana;
		}

		// Health
		let newPlayerHealth = state.player.health;
		if (action.payload.type === 'health') {
			newPlayerHealth += action.payload.amount;
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
	}

	case NEW_BATTLE: {
		const { zone, stage } = action.payload;

		console.log('NEW_BATTLE');
		console.log(zone.title);
		console.log(stage.title);

		const numEnemies = randomIntegerInRange(stage.minMonsters, stage.maxMonsters);
		const enemies = [];

		const filteredEnemies = MONSTER_TYPES.filter((mob) => {
			let isPartOfBattle = false;
			stage.monsters.forEach((id) => {
				if (mob.id === id) {
					isPartOfBattle = true;
				}
			});
			return isPartOfBattle;
		});

		for (let i = 0; i < numEnemies; i += 1) {
			const mobLevel = randomIntegerInRange(stage.minLevel, stage.maxLevel); // state.player.level;
			const randomEnemy = filteredEnemies[Math.floor(Math.random() * filteredEnemies.length)].name;
			enemies.push(Mob(i, randomEnemy, mobLevel));
		}

		return {
			...cloneDeep(state),
			enemies,
			currentZone: zone.zone,
			currentStage: stage.stage,
		};
	}

	case LEVEL_UP: {
		console.log('LEVEL_UP');
		const newStats = {};

		if (action.payload.health) {
			newStats.maxHealth = state.player.maxHealth + action.payload.health;
		} else if (action.payload.strength) {
			newStats.strength = state.player.strength + action.payload.strength;
			newStats.maxHealth = newStats.strength * 12;
		} else if (action.payload.agility) {
			newStats.agility = state.player.agility + action.payload.agility;
		} else if (action.payload.intelligence) {
			newStats.intelligence = state.player.intelligence + action.payload.intelligence;
			newStats.maxMana = newStats.intelligence * 14;
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
		const {
			// id,
			spell,
		} = action.payload;
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

		// Spell damage modifier
		let spellDamageMod = 1;
		spellDamageMod += (player.intelligence / 100);
		console.log(`Spell damage: ${spellDamageMod * 100}%`);

		// Crit Chance
		if (Math.random() < player.critChance) {
			damageModifier = 2;
			console.log('Crit!');
		}

		let { isDead } = enemy;
		const damage = Math.ceil(spell.damage * spellDamageMod * damageModifier);

		let newHealth = enemy.health - damage;
		const currentPlayerExp = player.exp;
		let newExp = player.exp;
		let newLevel = player.level;
		let { levelUps } = state;


		console.log(`${player.name} deals ${damage} damage to ${enemy.name}.`);
		let nextBracket = 0;

		EXP_LEVELS.forEach((expLevel, index) => {
			if (newExp > expLevel) {
				nextBracket = EXP_LEVELS[index + 1];
			}
		});

		if (newHealth <= 0) {
			console.log('Killed the monster!');

			isDead = true;
			newHealth = 0;
			newExp = currentPlayerExp + enemy.exp;

			// let newBracket = 0;

			EXP_LEVELS.forEach((expLevel, index) => {
				if (newExp > expLevel) {
					newLevel = index + 1;
					// newBracket = EXP_LEVELS[index];
					nextBracket = EXP_LEVELS[index + 1];
				}
			});

			levelUps = newLevel - player.level + levelUps;

			// console.log('currentLevel', player.level);
			// console.log('newLevel', newLevel);
			// console.log('newBracket', newBracket);
			// console.log('nextBracket', nextBracket);
			// console.log('levelUps', levelUps);
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
			nextBracket,
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
			enemy.exp = 0;
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
