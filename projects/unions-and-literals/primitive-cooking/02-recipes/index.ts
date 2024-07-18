// Please clarify any overly wide (permissive) type annotations here! ✨
let difficulty: number;
let group: string;
let title: string;

type Difficulty = 1 | 2 | 3;
type Group = "appetizer" | "entree" | "dessert";
type Title = string;
type Recipe = Readonly<{
	difficulty: Difficulty;
	group: Group;
	title: Title;
}>;

const Recipe = {
	new: (difficulty: Difficulty, group: Group, title: Title): Recipe => ({
		difficulty,
		group,
		title,
	}),
	log: (recipe: Recipe) => {
		console.log(
			`[${recipe.group}] ${recipe.title}: ${recipe.difficulty}/3 difficulty`
		);
	},
} as const;

// Start with something quick and painless to prepare...
const recipe1 = Recipe.new(1, "appetizer", "Raspberry Vinaigrette Salad");
Recipe.log(recipe1);

const recipe2 = Recipe.new(2, "entree", "Cauliflower Steaks");
Recipe.log(recipe2);

const recipe3 = Recipe.new(3, "dessert", "Coconut Chocolate Ganache");
Recipe.log(recipe3);

const recipe4 = Recipe.new(1, "dessert", "Biscuits and Coffee");
Recipe.log(recipe4);

export {};
