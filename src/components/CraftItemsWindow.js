import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import { randomIntegerInRange } from '../utils/utils';
import EQUIPMENT_TYPES from '../constants/equipment-types';
import EQUIPMENT_MODIFIERS_PREFIX from '../constants/equipment-modifiers-prefix';
import EQUIPMENT_MODIFIERS_SUFFIX from '../constants/equipment-modifiers-suffix';

import './CraftItemsWindow.scss';

//const prefixTypes = ['cold', 'fire'];
//const suffixTypes = ['cold', 'fire'];
const itemTypes = ['Armour', 'Trinket', 'Weapon'];
const rarityNames = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
const rarityChances = [1, 0.4, 0.2, 0.05, 0.01];
// const rarityChances = [1, 0.3, 0.1, 0.05, 0.005];

class ConnectedCraftItemsWindow extends Component {
	constructor(props) {
		super(props);

		console.log('ConnectedCraftItemsWindow props', props);

		this.state = {
			spell: {
				rune: 'instant',
				orb: 'single',
				gem: 'damage',
				essence: 'physical',
				icon: '',
			},
			savedSpells: [],
			item: {},
			savedItems: [],
		};
	}

	generateRandom100Items = () => {
		for (let i = 0; i < 100; i++) {
			this.generateRandomItem();
		}
	}

	generateRandomItem = () => {
		// console.log('generateRandomItem');

		// let armour;
		// let str;
		// let int;
		// let agi;
		const itemType = randomIntegerInRange(0, 2);
		const rarity = this.generateRarity();
		const ilvl = randomIntegerInRange(1, 100);


		console.log('Rarity: ', rarityNames[rarity]);
		console.log('iLvl: ', ilvl);


		// ROLL MODIFIERS
		const numModifiers = rarity;
		const prefixType = randomIntegerInRange(0, 1);
		const suffixType = randomIntegerInRange(0, 1);


		for (let i = 0; i < numModifiers; i++) {
			// Pick random mod value at this point?
		//	modifiers.push(EQUIPMENT_MODIFIERS[randomIntegerInRange(0, EQUIPMENT_MODIFIERS.length)]);
		}

		let prefixes;

		if (prefixType === 0) {
			console.log('Prefix Type: cold');
			prefixes = EQUIPMENT_MODIFIERS_PREFIX.cold;
		} else if (prefixType === 1) {
			console.log('Prefix Type: fire');
			prefixes = EQUIPMENT_MODIFIERS_PREFIX.fire;
		}

		const prefix = prefixes[randomIntegerInRange(0, prefixes.length - 1)];


		console.log('Prefix: ', prefix);



		let suffixes;

		if (suffixType === 0) {
			console.log('Suffix Type: cold');
			suffixes = EQUIPMENT_MODIFIERS_SUFFIX.cold;
		} else if (suffixType === 1) {
			console.log('Suffix Type: fire');
			suffixes = EQUIPMENT_MODIFIERS_SUFFIX.fire;
		}

		const suffix = suffixes[randomIntegerInRange(0, suffixes.length - 1)];


		console.log('Suffix: ', suffix);


		// get base item;

		let baseItems;

		if (itemType === 0) {
			console.log('Base Type: armour');
			baseItems = EQUIPMENT_TYPES.armour;
		} else if (itemType === 1) {
			console.log('Base Type: trinket');
			baseItems = EQUIPMENT_TYPES.trinkets;
		} else if (itemType === 2) {
			console.log('Base Type: weapon');
			baseItems = EQUIPMENT_TYPES.weapons;
		}

		const baseItem = baseItems[randomIntegerInRange(0, baseItems.length - 1)];

		console.log('Base Item: ', baseItem);


		/*// ROLL MODIFIERS
		const numModifiers = rarity;
		const modifiers = ['prefix', 'suffix'];

		for (let i = 0; i < numModifiers; i++) {
			// Pick random mod value at this point?
			modifiers.push(EQUIPMENT_MODIFIERS[randomIntegerInRange(0, EQUIPMENT_MODIFIERS.length)]);
		}


		console.log('Modifiers: ', modifiers);*/


		const newItem = {
			id: ' GUID',
			rarity,
			ilvl,
			itemType,
			...baseItem,
			prefixType,
			...prefix,
			suffixType,
			...suffix,

		};

		this.setState((prevState) => ({
			...prevState,
			savedItems: [
				...prevState.savedItems,
				newItem,
			],
		}), () => { console.log(this.state); });


		// console.log(newItem);
	}

	generateRarity = () => {
		const seed = Math.random();
		let rareIndex = 0;

		rarityChances.forEach((rarity, index) => {
			if (seed < rarity) {
				rareIndex = index;
			}
		});

		return rareIndex;
	}

	render() {
		// const {
		// 	player,
		// 	enemies,
		// 	levelUps,
		// 	newBattle,
		// } = this.props;

		const {
			// spell,
			savedItems,
		} = this.state;


		return (
			<div>
				<div className="craft-window">
					<header>
						<h1>Craft Items Window</h1>
					</header>
					<button className="button" type="button" onClick={this.generateRandom100Items}>Generate 100</button>
					<button className="button" type="button" onClick={this.generateRandomItem}>Generate</button>
				</div>
				<h2>Crafted Items:</h2>
				<div className="crafted-items">
					{savedItems && savedItems.length ? savedItems.map((savedItem, i) => (
						<div className={`crafted-item rarity rarity-${savedItem.rarity}`} key={i}>
							<img className="item-icon" src={`/images/equipment/${savedItem.id}.gif`} alt="" />
							<p> The {savedItem.prefix} {savedItem.equipmentname} of the {savedItem.suffix}</p>
							<p>{itemTypes[savedItem.itemType]}</p>
							<p>iLvl: {savedItem.ilvl}</p>
							{savedItem.armour ? (
								<p>Armour: {savedItem.armour}</p>
							) : null}
							{savedItem.attack ? (
								<p>Attack: {savedItem.attack}</p>
							) : null}
							{savedItem.strength ? (
								<p>Strength: {savedItem.strength}</p>
							) : null}
							{savedItem.agility ? (
								<p>Agility: {savedItem.agility}</p>
							) : null}
							{savedItem.intelligence ? (
								<p>Intelligence: {savedItem.intelligence}</p>
							) : null}
              {savedItem.modifiers ? (
								<p>prefix: {savedItem.modifiers}</p>
							) : null}
							{/*savedItem.modifiers ? (
								//<p>suffix: {savedItem.modifiers}</p>
							) : null*/}

							{/* <p>{rarityNames[savedItem.rarity]}</p> */}
						</div>
					)) : null}
				</div>
			</div>
		);
	}
}


// function mapDispatchToProps(dispatch) {
// 	return {
// 		fightEnemy: (enemy) => dispatch(attackEnemy(enemy)),
// 	};
// }

const mapDispatchToProps = {
	// attackEnemy: allActions.attackEnemy,
	...allActions,
};

const mapStateToProps = (state) => ({
	player: state.rootReducer.player,
	enemies: state.rootReducer.enemies,
	levelUps: state.rootReducer.levelUps,
});

const CraftItemsWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedCraftItemsWindow);

export default CraftItemsWindow;
