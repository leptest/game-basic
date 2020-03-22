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

	// levelUp() {}

	// addAttribute() {}

	equip = (item) => {
		console.log(`${this.name} equipped ${item}.`);

		this.slots.push(item);
	}

	attack = (target) => {
		console.log(`${this.name} attacks ${target.name}.`);

		target.takeDamage(this.strength);
	}

	takeDamage = (damage) => {
		console.log(`${this.name} takes ${damage} damage.`);

		const newHealth = this.health - damage > 0 ? this.health - damage : 0;

		if (newHealth <= 0) {
			console.log(`${this.name} dies.`);

			this.isDead = true;
			// newHealth = 0;
		}

		this.health = newHealth;
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
