import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import { randomIntegerInRange } from '../utils/utils';
import EQUIPMENT_TYPES from '../constants/equipment-types';
import EQUIPMENT_MODIFIERS from '../constants/equipment-modifiers';

import './CraftItemsWindow.scss';


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


		// ROLL MODIFIERS
		const numModifiers = rarity;
		const modifiers = [];

		for (let i = 0; i < numModifiers; i++) {
			// Pick random mod value at this point?
			modifiers.push(EQUIPMENT_MODIFIERS[randomIntegerInRange(0, EQUIPMENT_MODIFIERS.length)]);
		}

		console.log('Modifiers: ', modifiers);


		const newItem = {
			id: ' GUID',
			rarity,
			ilvl,
			itemType,
			...baseItem,
			modifiers,
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
							<p>{savedItem.name}</p>
							<p>{itemTypes[savedItem.itemType]}</p>
							<p>iLvl: {savedItem.ilvl}</p>
							{savedItem.armour ? (
								<p>Armour: {savedItem.armour}</p>
							) : null}
							{savedItem.attack ? (
								<p>Attack: {savedItem.attack}</p>
							) : null}


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
