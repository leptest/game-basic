import React from 'react';
// import Player from './components/Player';
// import List from './components/List';
// import Form from './components/Form';
import FightWindow from './components/FightWindow';

// import Character from './classes/character';
// const daniel = new Character({ name: 'Daniel' });
// const demon = new Character({ name: 'Demon' });
// daniel.equip('shield');
// daniel.attack(demon);
// demon.reportInfo();

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		player: new Character({ name: 'X' }),
	// 		enemy: new Character({ name: 'Y' }),
	// 	};
	// }

	nothing = () => {
		console.log('App.nothing()');
	}

	render() {
		return (
			<div>
				<FightWindow />
			</div>
		);
	}
}

export default App;
