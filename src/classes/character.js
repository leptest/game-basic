export default class {
	constructor({ name = 'Default Name' } = {}) {
		this.name = name;
		this.level = 1;
		this.experience = 0;
		this.health = 10;
		this.strength = 1;
		this.isDead = false;
		this.slots = [];
	}

	equip = (item) => {
		this.slots.push(item);

		console.log(`${this.name} equipped ${item}.`);
	}

	attack = (monster) => {
		monster.takeDamage(this.strength);

		console.log(`${this.name} deals ${this.strength} damage to ${monster.name}.`);
	}

	attackedBy = (enemy) => {
		console.log(`${enemy.name} deals ${enemy.strength} damage to ${this.name}.`);

		let newHealth = this.health - enemy.strength;

		if (newHealth <= 0) {
			this.isDead = true;
			newHealth = 0;
			console.log('dead');
		}

		this.health = newHealth;

		return newHealth;
	}

	takeDamage = (damage) => {
		this.health -= damage;
	}

	reportInfo = () => {
		console.log(this);

		return {
			name: this.name,
			level: this.level,
			health: this.health,
		};
	}
}


// // easy leveling function
// export const checkexp = ((player) => {
// 	const el = document.querySelectorAll('#level')[0];
//
// 	if (player.experience > 3 * player.level) {
// 		player.experience = 0;
// 		player.level++;
// 	}
// 	// $('#bosssummons').text(`Boss Summons: ${player.summons}`);
// 	el.textContent = `Level: ${player.level}`;
// });
