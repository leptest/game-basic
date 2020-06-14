import React from 'react';
import { connect } from 'react-redux';
import * as allActions from '../actions/index';

import './Stages.scss';

const ConnectedStages = ({ newBattle, zones }) => (
	<div className="zone-stages-window">
		{zones && zones.length ? zones.map((zone) => (
			<div key={zone.zone}>
				<h2>
					{zone.title}
					{zone.isCompleted ? (<img src="/images/icons/done-24px.svg" alt="icon" />) : null}
					{zone.isLocked ? (<img src="/images/icons/lock-24px.svg" alt="icon" />) : null}
					{!zone.isCompleted && !zone.isLocked ? (<img src="/images/icons/todo-24px.svg" alt="icon" />) : null}
				</h2>
				<div className="stages">
					{zone.stages && zone.stages.length ? zone.stages.map((stage) => (
						<button key={stage.stage} className="stage" onClick={() => { newBattle({ zone: zone.zone, stage }); }} type="button">
							{stage.title}
							{stage.isCompleted ? (<img src="/images/icons/done-24px.svg" alt="icon" />) : null}
							{stage.isLocked ? (<img src="/images/icons/lock-24px.svg" alt="icon" />) : null}
							{!stage.isCompleted && !stage.isLocked ? (<img src="/images/icons/todo-24px.svg" alt="icon" />) : null}
						</button>
					)) : null}
				</div>
			</div>
		)) : null}
	</div>
);

const mapDispatchToProps = {
	// attackEnemy: allActions.attackEnemy,
	...allActions,
};

const mapStateToProps = (state) => ({
	player: state.rootReducer.player,
	enemies: state.rootReducer.enemies,
	levelUps: state.rootReducer.levelUps,
	nextBracket: state.rootReducer.nextBracket,
	zones: state.rootReducer.zones,
});

const Stages = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ConnectedStages);

export default Stages;
