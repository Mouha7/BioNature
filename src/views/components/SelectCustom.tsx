import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function SelectTri() {
	return (
		<Select>
			<SelectTrigger className="w-fit">
				<SelectValue placeholder="Alphabétique: de A à Z" />
			</SelectTrigger>
			<SelectContent className="bg-bio-contraste text-bio">
				<SelectGroup>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="a-z">Alphabétique: de A à Z</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="z-a">Alphabétique: de Z à A</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="low-high">Prix: faible à élevé</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="high-low">Prix: élevé à faible</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="old-new">Date: de la plus ancienne à la plus récente</SelectItem>
					<SelectItem className="hover:bg-bio-contraste/50 cursor-pointer" value="new-old">Date: de la plus récente à la plus ancienne</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
