export type Juice = {
	id: string;
	title: string;
	prix: string;
	imageUrl: string;
	category: string[];
	ingredients: string[];
	new?: boolean;
	discount?: number;
	rating?: number;
	popular?: boolean;
};

export const Juices: Juice[] = [
	{
		id: "juice-orange-1",
		title: "Jus d'orange pressées à froid",
		prix: "1200 FCFA",
		imageUrl: "Orange.png",
		category: ["agrumes", "sans-sucre", "pressé-froid"],
		ingredients: ["orange"],
		popular: true,
		rating: 4.8,
	},
	{
		id: "juice-mangue-1",
		title: "Jus de mangues 100% naturel et bio",
		prix: "1200 FCFA",
		imageUrl: "jus_mangue.png",
		category: ["exotique", "bio"],
		ingredients: ["mangue"],
		new: true,
		rating: 4.7,
	},
	{
		id: "juice-ananas-1",
		title: "Jus d'ananas",
		prix: "1200 FCFA",
		imageUrl: "jus_ananas.png",
		category: ["exotique", "sans-sucre"],
		ingredients: ["ananas"],
		discount: 10,
		rating: 4.6,
	},
	{
		id: "juice-banane-1",
		title: "Jus de bananes",
		prix: "1000 FCFA",
		imageUrl: "jus_banane.png",
		category: ["onctueux", "enfants"],
		ingredients: ["banane", "lait"],
		popular: true,
		rating: 4.5,
	},
	{
		id: "juice-madd-1",
		title: "Jus de madd",
		prix: "1500 FCFA",
		imageUrl: "jus_mada.png",
		category: ["local", "traditionnel"],
		ingredients: ["madd", "sucre"],
		rating: 4.9,
	},
	{
		id: "juice-bissap-1",
		title: "Jus de bissap",
		prix: "1000 FCFA",
		imageUrl: "jus_bissap.png",
		category: ["local", "traditionnel", "sans-sucre"],
		ingredients: ["hibiscus"],
		popular: true,
		rating: 4.7,
	},
	{
		id: "confiture-mangue-1",
		title: "Confiture de mangue",
		prix: "1800 FCFA",
		imageUrl: "confiture_mangue.png",
		category: ["bio", "pressé-froid"],
		ingredients: ["mangue", "sucre"],
		new: true,
		rating: 4.4,
	},
	{
		id: "confiture-orange-1",
		title: "Confiture d'orange",
		prix: "1350 FCFA",
		imageUrl: "confiture_orange.png",
		category: ["exotique", "onctueux"],
		ingredients: ["orange", "sucre"],
		rating: 4.5,
	},
	{
		id: "confiture-fraise-1",
		title: "Confiture de fraise",
		prix: "1200 FCFA",
		imageUrl: "confiture_fraise.png",
		category: ["local", "traditionnel", "bio"],
		ingredients: ["confiture de fraise"],
		rating: 4.3,
	},
];
