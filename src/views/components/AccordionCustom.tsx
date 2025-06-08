import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useFilter } from "../../contexts/FilterContext";

export function AccordionCustom() {
	const {
		categoryFilter,
		toggleCategoryFilter,
		priceRanges,
		togglePriceRange,
		specialFilters,
		toggleSpecialFilter,
	} = useFilter();

	const categories = [
		{ id: "agrumes", label: "Agrumes" },
		{ id: "exotique", label: "Fruits exotiques" },
		{ id: "local", label: "Produits locaux" },
		{ id: "bio", label: "Bio" },
		{ id: "sans-sucre", label: "Sans sucre ajouté" },
		{ id: "pressé-froid", label: "Pressé à froid" },
		{ id: "detox", label: "Détox" },
		{ id: "traditionnel", label: "Traditionnel" },
		{ id: "onctueux", label: "Onctueux" },
		{ id: "enfants", label: "Pour enfants" },
	];

	const prices = [
		{ id: "under-1000", label: "Moins de 1000 FCFA", min: 0, max: 999 },
		{ id: "1000-1500", label: "1000 - 1500 FCFA", min: 1000, max: 1500 },
		{ id: "1500-2000", label: "1500 - 2000 FCFA", min: 1500, max: 2000 },
		{ id: "over-2000", label: "Plus de 2000 FCFA", min: 2000, max: Infinity },
	];

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Catégories</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col gap-2">
						{categories.map((category) => (
							<div
								key={category.id}
								className="flex items-center space-x-2"
							>
								<Checkbox
									id={category.id}
									checked={categoryFilter.includes(category.id)}
									onCheckedChange={() =>
										toggleCategoryFilter(category.id)
									}
								/>
								<Label
									htmlFor={category.id}
									className="cursor-pointer"
								>
									{category.label}
								</Label>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger>Prix</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col gap-2">
						{prices.map((price) => (
							<div
								key={price.id}
								className="flex items-center space-x-2"
							>
								<Checkbox
									id={price.id}
									checked={priceRanges.some(
										(range) =>
											range.min === price.min &&
											range.max === price.max
									)}
									onCheckedChange={() =>
										togglePriceRange({
											min: price.min,
											max: price.max,
										})
									}
								/>
								<Label
									htmlFor={price.id}
									className="cursor-pointer"
								>
									{price.label}
								</Label>
							</div>
						))}
					</div>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger>États</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col gap-2">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="new"
								checked={specialFilters.includes("new")}
								onCheckedChange={() => toggleSpecialFilter("new")}
							/>
							<Label
								htmlFor="new"
								className="cursor-pointer"
							>
								Nouveautés
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<Checkbox
								id="discount"
								checked={specialFilters.includes("discount")}
								onCheckedChange={() =>
									toggleSpecialFilter("discount")
								}
							/>
							<Label
								htmlFor="discount"
								className="cursor-pointer"
							>
								En promotion
							</Label>
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
