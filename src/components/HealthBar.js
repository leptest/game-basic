import React from 'react';

import './HealthBar.scss';

const HealthBar = ({ health, maxHealth }) => {
	const width = (health / maxHealth) * 100;

	const styles = {
		width: `${width}%`,
	};

	return (
		<div className="health-bar">
			<span className="bar" style={styles} />
			<span className="text">{health}/{maxHealth}</span>
		</div>
	);
};

export default HealthBar;
