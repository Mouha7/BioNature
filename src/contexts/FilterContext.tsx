import React, { createContext, useState, useContext, ReactNode } from "react";
import { Juice } from "../constants/Juices";

// Type pour les plages de prix
interface PriceRange {
	min: number;
	max: number;
}

type FilterContextType = {
	categoryFilter: string[];
	priceRanges: PriceRange[];
	specialFilters: string[];
	sortBy: string;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	toggleCategoryFilter: (category: string) => void;
	togglePriceRange: (range: PriceRange) => void;
	toggleSpecialFilter: (filter: string) => void;
	clearFilters: () => void;
	setSortBy: (sortType: string) => void;
	filterJuices: (juices: Juice[]) => Juice[];
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
	const [priceRanges, setPriceRanges] = useState<PriceRange[]>([]);
	const [specialFilters, setSpecialFilters] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState<string>("a-z");
	const [searchQuery, setSearchQuery] = useState<string>("");

	const toggleCategoryFilter = (category: string) => {
		setCategoryFilter((prevCategories) => {
			if (prevCategories.includes(category)) {
				return prevCategories.filter((c) => c !== category);
			} else {
				return [...prevCategories, category];
			}
		});
	};

	const togglePriceRange = (range: PriceRange) => {
		setPriceRanges((prevRanges) => {
			const existingIndex = prevRanges.findIndex(
				(r) => r.min === range.min && r.max === range.max
			);

			if (existingIndex >= 0) {
				// Supprimer la plage si elle existe déjà
				return prevRanges.filter((_, i) => i !== existingIndex);
			} else {
				// Ajouter la nouvelle plage
				return [...prevRanges, range];
			}
		});
	};

	const toggleSpecialFilter = (filter: string) => {
		setSpecialFilters((prevFilters) => {
			if (prevFilters.includes(filter)) {
				return prevFilters.filter((f) => f !== filter);
			} else {
				return [...prevFilters, filter];
			}
		});
	};

	const clearFilters = () => {
		setCategoryFilter([]);
		setPriceRanges([]);
		setSpecialFilters([]);
		setSearchQuery("");
	};

	const filterJuices = (juices: Juice[]): Juice[] => {
		let filteredJuices = [...juices];

		// Filtre par catégorie
		if (categoryFilter.length > 0) {
			filteredJuices = filteredJuices.filter((juice) =>
				categoryFilter.some((category) => juice.category.includes(category))
			);
		}

		// Filtre par prix
		if (priceRanges.length > 0) {
			filteredJuices = filteredJuices.filter((juice) => {
				const numericPrice = parseInt(juice.prix.replace(/\D/g, "")) || 0;
				return priceRanges.some(
					(range) => numericPrice >= range.min && numericPrice <= range.max
				);
			});
		}

		// Filtre par état spécial (nouveauté, promotion)
		if (specialFilters.length > 0) {
			filteredJuices = filteredJuices.filter((juice) => {
				return specialFilters.some((filter) => {
					if (filter === "new" && juice.new) return true;
					if (filter === "discount" && juice.discount && juice.discount > 0)
						return true;
					return false;
				});
			});
		}

		// Filtre par recherche
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			filteredJuices = filteredJuices.filter(
				(juice) =>
					juice.title.toLowerCase().includes(query) ||
					juice.ingredients.some((ingredient) =>
						ingredient.toLowerCase().includes(query)
					)
			);
		}

		// Tri
		switch (sortBy) {
			case "a-z":
				filteredJuices.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "z-a":
				filteredJuices.sort((a, b) => b.title.localeCompare(a.title));
				break;
			case "low-high":
				filteredJuices.sort((a, b) => {
					const priceA = parseInt(a.prix.replace(/\D/g, "")) || 0;
					const priceB = parseInt(b.prix.replace(/\D/g, "")) || 0;
					return priceA - priceB;
				});
				break;
			case "high-low":
				filteredJuices.sort((a, b) => {
					const priceA = parseInt(a.prix.replace(/\D/g, "")) || 0;
					const priceB = parseInt(b.prix.replace(/\D/g, "")) || 0;
					return priceB - priceA;
				});
				break;
			case "popular":
				filteredJuices.sort((a, b) => {
					if (a.popular && !b.popular) return -1;
					if (!a.popular && b.popular) return 1;
					return (b.rating || 0) - (a.rating || 0);
				});
				break;
			case "new":
				filteredJuices.sort((a, b) => {
					if (a.new && !b.new) return -1;
					if (!a.new && b.new) return 1;
					return 0;
				});
				break;
		}

		return filteredJuices;
	};

	return (
		<FilterContext.Provider
			value={{
				categoryFilter,
				priceRanges,
				specialFilters,
				sortBy,
				searchQuery,
				setSearchQuery,
				toggleCategoryFilter,
				togglePriceRange,
				toggleSpecialFilter,
				clearFilters,
				setSortBy,
				filterJuices,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilter = () => {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
};
