import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './HomeWindow.scss';

class ConnectedHomeWindow extends Component {
	constructor(props) {
		super(props);

		console.log('ConnectedHomeWindow props', props);
	}

	render() {
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
