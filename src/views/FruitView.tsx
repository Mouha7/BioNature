import { NavLink } from "react-router-dom";
import { BtnLightCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { FruitQualityText } from "@/constants/Fruits";

const fruits = [
	{
		name: "pomme",
		image: "/assets/banane.avif",
	},
	{
		name: "ananas",
		image: "/assets/ananas.avif",
	},
	{
		name: "citron",
		image: "/assets/fraise.avif",
	},
	{
		name: "orange",
		image: "/assets/orange.avif",
	},
	{
		name: "mangue",
		image: "/assets/orange.avif",
	},
];

export function FruitView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="lg-fully-style fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[570px] h-[400px] md:w-7xl shadow-lg">
				<div className="flex flex-col justify-center items-center h-full bg-black/50 text-white p-5">
					<div className="lg:w-2xl flex flex-col lg:justify-center lg:mx-0 mx-4 lg:items-center gap-5">
						<h1 className="md:text-4xl font-black text-2xl text-center">
							BIONATURE, ça vient du cœur.<br/> Merci les fruits.
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
						BioNature, c’est avant tout une histoire de fruits.
						Fruits tropicaux, fruits de saison, fruits de la terre,
						fruits de l’amour. Nous avons à cœur de vous faire
						découvrir les trésors que nous offre la nature.
					</p>
				</div>

				<div className="lg:w-7xl flex flex-wrap md:justify-start justify-center lg:gap-16 gap-4">
					{fruits.map((fruit) => (
						<NavLink
							to={`/fruits/${fruit.name}`}
							key={fruit.name}
							className="lg:w-96 w-1/2 flex flex-col items-center gap-5"
						>
							<img
								src={fruit.image}
								alt={fruit.name}
								loading="lazy"
								className="w-32 object-cover rounded-lg"
							/>
							<h2 className="text-3xl font-bold uppercase mb-12">
								{fruit.name}
							</h2>
						</NavLink>
					))}
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 lg:mx-16 mx-4">
				<div className="flex flex-col justify-center items-center gap-12">
					<h2 className="text-3xl font-bold uppercase text-center">
						Les fruits BioNature, c'est
					</h2>
					<div className="flex justify-center lg:flex-nowrap flex-wrap lg:gap-12 gap-5">
						<div className="flex justify-between">
							<div className="md:w-96 flex flex-col items-center gap-5">
								<img
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
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
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
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
									className="w-44 h-44 rounded-full object-cover "
									src="/assets/bg-fraise.webp"
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

			<div className="flex flex-col justify-center items-center gap-5 my-7 lg:px-14">
				<div className="w-11/12 md:w-full">
					<h2 className="text-3xl font-bold uppercase text-center">
						La qualité, ça nous tient à coeur
					</h2>
					{Object.entries(FruitQualityText).map(([key, value]) =>
						parseInt(key) % 2 === 0 ? (
							<div
								key={key}
								className="flex lg:flex-row-reverse flex-col md:items-center md:py-16 py-5"
							>
								<img
									src={value.img.src}
									alt={value.img.alt}
									loading="lazy"
									className="lg:w-1/2 md:w-full md:mb-4 object-cover"
								/>
								<div className={value.section.className}>
									<h3 className="text-2xl font-bold uppercase">
										{value.section.title}
									</h3>
									{value.section.text.map((text, index) => (
										<p key={`${key}-text-${index}`}>
											{text}
										</p>
									))}
								</div>
							</div>
						) : (
							<div
								key={key}
								className="flex lg:flex-row flex-col md:items-center md:py-16 py-5"
							>
								<img
									src={value.img.src}
									alt={value.img.alt}
									loading="lazy"
									className="lg:w-1/2 md:w-full md:mb-4 object-cover"
								/>
								<div className={value.section.className}>
									<h3 className="text-2xl font-bold uppercase">
										{value.section.title}
									</h3>
									{value.section.text.map((text, index) => (
										<p key={`${key}-text-${index}`}>
											{text}
										</p>
									))}
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
