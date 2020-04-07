import {
	ADD_ARTICLE,
	ATTACK_ENEMY,
	LEVEL_UP,
	NEW_BATTLE,
	USE_POTION,
} from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

export function attackEnemy(payload) {
	return { type: ATTACK_ENEMY, payload };
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
