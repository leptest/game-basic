import React from 'react';
// import Player from './components/Player';
// import List from './components/List';
// import Form from './components/Form';
import FightWindow from './components/FightWindow';
import Character from './classes/character';

const daniel = new Character({ name: 'Daniel' });
const demon = new Character({ name: 'Demon' });
daniel.equip('shield');
daniel.attack(demon);
demon.reportInfo();

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		player: new Character({ name: 'X' }),
	// 		enemy: new Character({ name: 'Y' }),
	// 	};
	// }

	// componentDidMount() {
	// 	console.log('did moount');
	// }

	attack = () => {
		console.log('App.attack()');

		// const {
		// 	player,
		// 	enemy,
		// } = this.state;

		// this.setState((prevState) => ({
		// 	...prevState,
		// 	enemy: {
		// 		...prevState.enemy,
		// 		health: prevState.enemy.health - 10,
		// 	},
		// }));
	}

	render() {
		// const {
		// 	player,
		// 	enemy,
		// } = this.state;
		return (
			<div>
				{/* <h1>RPG Game</h1>
				<Player player={player} />
				<p>vs</p>
				<Player player={enemy} />

				<hr />

				<button onClick={this.attack} type="button">Fight</button> */}

				{/* <hr />
				<List />
				<Form />
				<hr /> */}
				<FightWindow />
			</div>
		);
	}
}

export default App;
