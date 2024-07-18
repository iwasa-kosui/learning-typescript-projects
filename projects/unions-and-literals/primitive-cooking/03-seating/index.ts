// Please fill in any missing type annotations here...
const headOfTable = "Me!";
let adjacentLeft;
let adjacentRight;
let furtherLeft;
let furtherRight;

type Adjacent = Readonly<{
	left: "Susie" | "Tommy";
	right: "Susie" | "Tommy";
}>;

type Further = Readonly<{
	left: "Angelica" | "Chuckie" | undefined;
	right: "Chuckie" | "Kimi" | "Timmy" | undefined;
}>;

const getAdjacent = (): Adjacent => {
	// I always invite Susie and Tommy! ♥
	if (Math.random() > 0.5) {
		return { left: "Susie", right: "Tommy" };
	} else {
		return { left: "Tommy", right: "Susie" };
	}
};

const getFurther = (): Further => {
	let left: "Angelica" | "Chuckie" | undefined = undefined;
	let right: "Chuckie" | "Kimi" | "Timmy" | undefined = undefined;

	// I invite Angelica about half of the time. We're not as close as Susie and Tommy. It's a long story.
	// I try to fill `furtherLeft` first...
	if (Math.random() > 0.5) {
		left = "Angelica";
	}

	// Same with Chuckie. I like them, but do I *really* like hanging out with them? Only sometimes.
	// ...then after that `furtherRight`
	if (Math.random() > 0.5) {
		if (left) {
			right = "Chuckie";
		} else {
			left = "Chuckie";
		}
	}

	// If I invited Angelica but not Chuckie, I'll invite Kimi. They get along well with Angelica but not Chuckie.
	if (left === "Angelica" && right !== "Chuckie") {
		right = "Kimi";
	}

	// If I invited Chuckie but not Angelica, I'll invite Timmy. They get along well with Chuckie but not Angelica.
	if (left === "Chuckie") {
		right = "Timmy";
	}

	return {
		left,
		right,
	};
};

const adjacent = getAdjacent();
const further = getFurther();

console.log(`At the head of the table is... ${headOfTable}`);

console.log(`Adjacent to the left is: ${adjacent.left}`);
console.log(`Adjacent to the right is: ${adjacent.right}`);

console.log(`Further down on the left is: ${adjacent.left ?? "nobody"}`);
console.log(`Further down on the right is: ${adjacent.right ?? "nobody"}`);

export {};
