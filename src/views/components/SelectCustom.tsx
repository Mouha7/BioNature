import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useFilter } from "../../contexts/FilterContext";

export function SelectTri() {
	const { sortBy, setSortBy } = useFilter();

	return (
		<Select value={sortBy} onValueChange={setSortBy}>
			<SelectTrigger className="w-fit">
				<SelectValue placeholder="Alphabétique: de A à Z" />
			</SelectTrigger>
			<SelectContent className="bg-bio-contraste text-bio">
				<SelectGroup>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="a-z">
						Alphabétique: de A à Z
					</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="z-a">
						Alphabétique: de Z à A
					</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="low-high">
						Prix: faible à élevé
					</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="high-low">
						Prix: élevé à faible
					</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="popular">
						Les plus populaires
					</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="new">
						Nouveautés
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
