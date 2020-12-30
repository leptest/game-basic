import React from 'react';

import './SpeedBar.scss';

const SpeedBar = ({ speed, maxSpeed }) => {
	const width = (speed / maxSpeed) * 100;

	const styles = {
		width: `${width}%`,
	};

	return (
		<div className="speed-bar">
			<span className="bar" style={styles} />
			<span className="text">{speed}/{maxSpeed}</span>
		</div>
	);
};

export default SpeedBar;
