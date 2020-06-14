import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

const ConnectedSpellBar = (props) => {
	const {
		spells,
		// attackEnemy,
		castSpell,
		// isEnemey,
		// levelUps,
	} = props;

	// console.log('SpellBar', spells);

	const attack = (spell) => {
		castSpell({
			id: 1,
			spell,
		});
	};

	return (
		<div className="spell-bar">
			{spells && spells.length ? spells.map((spell) => {
				console.log('x');
				return (<button key={spell.id} className="spell" type="button" onClick={() => { attack(spell); }}>{spell.name}</button>);
			}) : null}
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

const SpellBar = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedSpellBar);

export default SpellBar;
