import {
	TARGET_PLAYER,
	ATTACK_ENEMY,
	CAST_SPELL,
	LEVEL_UP,
	NEW_BATTLE,
	USE_POTION,
} from '../constants/action-types';

export function targetPlayer(payload) {
	return { type: TARGET_PLAYER, payload };
}

export function attackEnemy(payload) {
	return { type: ATTACK_ENEMY, payload };
}

export function castSpell(payload) {
	return { type: CAST_SPELL, payload };
}

export function levelUp(payload) {
	return { type: LEVEL_UP, payload };
}

export function newBattle(payload) {
	return { type: NEW_BATTLE, payload };
}

export function usePotion(payload) {
	return { type: USE_POTION, payload };
}
