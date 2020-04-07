import React from 'react';

import './ManaBar.scss';

const ManaBar = ({ mana, maxMana }) => {
	const width = (mana / maxMana) * 100;

	const styles = {
		width: `${width}%`,
	};

	return (
		<div className="mana-bar">
			<span className="bar" style={styles} />
			<span className="text">{mana}/{maxMana}</span>
		</div>
	);
};

export default ManaBar;
