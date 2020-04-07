import React from 'react';

import './LevelBar.scss';

const LevelBar = ({ exp, maxExp, levelUps }) => {
	const width = (exp / maxExp) * 100;

	const styles = {
		width: `${width}%`,
	};

	let classes = 'level-bar';
	if (levelUps) {
		classes += ' has-level';
	}

	return (
		<div className={classes}>
			<span className="bar" style={styles} />
			<span className="text">{exp}/{maxExp}</span>
		</div>
	);
};

export default LevelBar;
