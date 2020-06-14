import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './Items.scss';

const ConnectedItems = ({ usePotion }) => {
	// console.log('Items usePotion', usePotion);

	const useHealthPotion = () => {
		usePotion({
			type: 'health',
			amount: 200,
		});
	};

	const useManaPotion = () => {
		usePotion({
			type: 'mana',
			amount: 200,
		});
	};

	return (
		<div className="items">
			<button className="item potion--health" onClick={useHealthPotion} type="button">
				<img src="./images/items/potion--health.svg" alt="health potion" />
			</button>
			<button className="item potion--mana" onClick={useManaPotion} type="button">
				<img src="./images/items/potion--mana.svg" alt="mana potion" />
			</button>
		</div>
	);
};

const mapDispatchToProps = {
	...allActions,
};

const mapStateToProps = () => ({
	// player: state.player,
	// enemy: state.enemy,
	// enemy2: state.enemy2,
	// levelUps: state.levelUps,
});

const Items = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedItems);

export default Items;
