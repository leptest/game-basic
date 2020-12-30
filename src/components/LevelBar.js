import React from 'react';

import './LevelBar.scss';

const LevelBar = ({ exp, maxExp, levelUps }) => {
	let width = (exp / maxExp) * 100;
	if (width > 100) {
		width = 100;
	}

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
