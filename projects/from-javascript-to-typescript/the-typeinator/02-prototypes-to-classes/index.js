class Robot {
	constructor(name, abilities) {
		/** @type {string} */
		this.name = name;
		/** @type {string[]} */
		this.abilities = abilities;
		/** @type {number} */
		this.power = 100;
	}

	announce() {
		console.log("Greetings. I am " + this.name + ".");
		for (const ability of this.abilities) {
			console.log(`I am able to ${ability}.`);
		}
	}

	/**
	 * @param {number} amount
	 */
	charge(amount) {
		if (this.power < 100) {
			this.power = Math.min(this.power + amount, 100);
			console.log(`Recharged power supplies to ${this.power}.`);
		}

		if (this.power === 100) {
			console.log("I am at optimal operational capacity.");
		}
	}

	/**
	 * @param {number} distance
	 */
	move(distance) {
		if (this.power < distance) {
			console.log(`I do not have enough power to move ${distance} units.`);
		} else {
			console.log(`Moving ${distance} units.`);
			this.power -= distance;
		}
	}
}

class Humanoid extends Robot {
	/**
	 *
	 * @param {string} name
	 * @param {string[]} abilities
	 * @param {string} catchphrase
	 */
	constructor(name, abilities, catchphrase) {
		super(name, abilities);

		/** @readonly @type {string} */
		this.catchphrase = catchphrase;
	}

	announce() {
		super.announce();
		console.log(` > ${this.catchphrase} <`);
	}
}

module.exports.Humanoid = Humanoid;
module.exports.Robot = Robot;
