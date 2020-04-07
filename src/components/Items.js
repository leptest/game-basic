import React from 'react';

import './Items.scss';

const Items = () => (
	<div className="items">
		<div className="item potion--health">
			<img src="./images/items/potion--health.svg" alt="health potion" />
		</div>
		<div className="item potion--mana">
			<img src="./images/items/potion--mana.svg" alt="mana potion" />
		</div>
	</div>
);

export default Items;
