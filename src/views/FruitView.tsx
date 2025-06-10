import { NavLink } from "react-router-dom";
import { BtnLightCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { FruitQualityText, Fruits } from "@/constants/Fruits";

// Utiliser les données de Fruits.ts et générer ce qui manque
const fruitsDisplay = [
	// Récupérer les fruits existants dans Fruits.ts
	...Fruits.map((fruit) => ({
		name: fruit.type,
		image: getImagePath(fruit.type),
		title: fruit.sections.s01.title,
		description: fruit.sections.s01.text.substring(0, 120) + "...",
	}))
];

// Fonction utilitaire pour obtenir le bon chemin d'image selon le type de fruit
function getImagePath(type: string): string {
	switch (type) {
		case "pomme":
			return "/assets/pomme.png";
		case "fraise":
			return "/assets/fraise.avif";
		case "ananas":
			return "/assets/ananas.avif";
		case "orange":
			return "/assets/orange.avif";
		case "mangue":
			return "/assets/mangue.png";
		case "citron":
			return "/assets/citron.png";
		default:
			return `/assets/${type}.png`;
	}
}

export function FruitView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="lg-fully-style fully-style bg-cover bg-center bg-[url('/assets/banner_merci.jpg')] bg-no-repeat md:h-[570px] h-[400px] md:w-7xl shadow-lg">
				<div className="flex flex-col justify-center items-center h-full bg-black/50 text-white p-5">
					<div className="lg:w-2xl flex flex-col lg:justify-center lg:mx-0 mx-4 lg:items-center gap-5">
						<h1 className="md:text-4xl font-black text-2xl text-center">
							BIONATURE, ça vient du cœur.
							<br /> Merci les fruits.
						</h1>
						<p className="lg:text-center lg:w-[766px]">
							Source de vie, de plaisir et de bien-être, les
							fruits tropicaux occupent une place essentielle dans
							notre alimentation… et dans nos engagements. Chez
							BioNature, ils sont notre raison d’être et l’âme de
							notre mission depuis le premier jour.
						</p>
						<BtnLightCustom
							to="/catalogue/gamme-jus"
							className=""
							text="Découvrez notre gamme"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7">
				<div className="lg:w-5xl lg:mx-16 mx-4 flex flex-col justify-center items-center gap-5">
					<h2 className="text-3xl font-bold uppercase text-center">
						Nos fruits
					</h2>
					<p className="text-center">
						BioNature, c'est avant tout une histoire de fruits.
						Fruits tropicaux, fruits de saison, fruits de la terre,
						fruits de l'amour. Nous avons à cœur de vous faire
						découvrir les trésors que nous offre la nature.
					</p>
				</div>

				<div className="lg:w-7xl flex flex-wrap md:justify-start justify-center lg:gap-16 gap-4 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 border-b border-bio-contraste/10">
					{fruitsDisplay.map((fruit) => (
						<NavLink
							to={`/fruits/${fruit.name}`}
							key={fruit.name}
							className="lg:w-96 w-1/2 flex flex-col items-center gap-5"
						>
							<img
								src={fruit.image}
								alt={fruit.title}
								loading="lazy"
								className="w-32 h-32 object-contain rounded-lg"
							/>
							<h2 className="text-3xl font-bold uppercase mb-2">
								{fruit.name}
							</h2>
							<p className="text-center text-sm px-4 mb-8">
								{fruit.description}
							</p>
						</NavLink>
					))}
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 lg:mx-16 mx-4 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 border-b border-bio-contraste/10">
				<div className="flex flex-col justify-center items-center gap-12">
					<h2 className="text-3xl font-bold uppercase text-center">
						Les fruits BioNature, c'est
					</h2>
					<div className="flex justify-center lg:flex-nowrap flex-wrap lg:gap-12 gap-5">
						<div className="flex justify-between">
							<div className="md:w-96 flex flex-col items-center gap-5">
								<img
									loading="lazy"
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/demande.jpg"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									100% d'exigence
								</h2>
								<p className="text-center">
									Nous nous fournissons auprès de partenaires
									de confiance suivant un cahier des charges
									très strict. Ils partagent notre respect de
									la nature et des valeurs éthiques.
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="md:w-96 flex flex-col items-center gap-5">
								<img
									loading="lazy"
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/default.jpg"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									Zéro défaut
								</h2>
								<p className="text-center">
									Texture, couleur, goût... si un fruit n’est
									pas conforme à nos normes de qualité, il est
									rejeté. Materne oblige !
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="md:w-96 flex flex-col items-center gap-5">
								<img
									loading="lazy"
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/beaucoup.jpg"
									alt="Background Fraise"
								/>
								<h2 className="text-3xl font-bold uppercase text-center">
									Beaucoup de produits
								</h2>
								<p className="text-center">
									Pour satisfaire toutes les envies, notre
									assortiment continue de s'agrandir. Eh oui,
									quand on aime on ne compte pas !
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 lg:px-14 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 border-b border-bio-contraste/10">
				<div className="w-11/12 md:w-full max-w-7xl">
					<h2 className="text-3xl font-bold uppercase text-center mb-8 sm:mb-12">
						La qualité, ça nous tient à coeur
					</h2>
					{Object.entries(FruitQualityText).map(([key, value]) =>
						parseInt(key) % 2 === 0 ? (
							<div
								key={key}
								className="flex lg:flex-row-reverse flex-col md:items-center md:py-16 py-5 gap-4 sm:gap-6 lg:gap-10"
							>
								{/* Conteneur d'image - 50% en desktop */}
								<div className="w-full lg:w-1/2 lg:pl-5 xl:pl-8">
									<img
										src={value.img.src}
										alt={value.img.alt}
										loading="lazy"
										className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
									/>
								</div>
								{/* Conteneur de texte - 50% en desktop */}
								<div className="w-full lg:w-1/2 lg:pr-5 xl:pr-8 space-y-3 sm:space-y-4 md:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold uppercase text-bio-contraste">
										{value.section.title}
									</h3>
									<div className="space-y-3">
										{value.section.text.map((text, index) => (
											<p
												key={`${key}-text-${index}`}
												className="text-sm sm:text-base text-bio-contraste/90"
											>
												{text}
											</p>
										))}
									</div>
								</div>
							</div>
						) : (
							<div
								key={key}
								className="flex lg:flex-row flex-col md:items-center md:py-16 py-5 border-b border-bio-contraste/10 gap-4 sm:gap-6 lg:gap-10"
							>
								{/* Conteneur d'image - 50% en desktop */}
								<div className="w-full lg:w-1/2 lg:pr-5 xl:pr-8">
									<img
										src={value.img.src}
										alt={value.img.alt}
										loading="lazy"
										className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
									/>
								</div>
								{/* Conteneur de texte - 50% en desktop */}
								<div className="w-full lg:w-1/2 lg:pl-5 xl:pl-8 space-y-3 sm:space-y-4 md:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold uppercase text-bio-contraste">
										{value.section.title}
									</h3>
									<div className="space-y-3">
										{value.section.text.map((text, index) => (
											<p
												key={`${key}-text-${index}`}
												className="text-sm sm:text-base text-bio-contraste/90"
											>
												{text}
											</p>
										))}
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>

			<div className="flex flex-col items-center md:w-full lg:justify-center lg:items-center gap-5 lg:my-7 lg:px-14">
				<h2 className="text-3xl font-bold uppercase text-center">
					Pour vous donner le fruit à la bouche
				</h2>
				<CarouselSize />
			</div>
		</div>
	);
}
