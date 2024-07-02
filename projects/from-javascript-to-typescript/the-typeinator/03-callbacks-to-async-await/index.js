/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {Set<string>} knownEmotions
 * @param {string} emotion
 * @returns {Promise<boolean>}
 */
const checkEmotion = async (knownEmotions, emotion) => {
	await sleep(1000);
	return knownEmotions.has(emotion);
};

/**
 * @param {Set<string>} knownEmotions
 * @param {string} newEmotion
 * @param {string} phrase
 * @returns {Promise<string>}
 */
const speak = async (knownEmotions, newEmotion, phrase) => {
	const hasEmotion = await checkEmotion(knownEmotions, newEmotion);
	if (!hasEmotion) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}
	return `"${phrase}" (${newEmotion})`;
};

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
