import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './HomeWindow.scss';

import Player from './Player';

class ConnectedHomeWindow extends Component {
	constructor(props) {
		super(props);

		console.log('ConnectedHomeWindow props', props);

		// props.newBattle();
	}

	levelUpHealth = (event) => {
		event.preventDefault();
		console.log('levelUpHealth, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ health: 2 });
	}

	levelUpStrength = (event) => {
		event.preventDefault();
		console.log('levelUpStrength, this.props', this.props);
		const { levelUp } = this.props;
		levelUp({ strength: 2 });
	}

	render() {
		const {
			player,
			enemies,
			levelUps,
			newBattle,
		} = this.props;

		return (
			<div className="home-window">
				<header>
					<h1>Home Window</h1>
					<p><a className="button" href="/fight">Fight!</a></p>
				</header>

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

const HomeWindow = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedHomeWindow);

export default HomeWindow;
