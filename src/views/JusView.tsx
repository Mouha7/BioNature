import { TrashIcon } from "@heroicons/react/16/solid";
import { AccordionCustom } from "./components/AccordionCustom";
import { SelectTri } from "./components/SelectCustom";
import { CardBoxCart } from "./components/CardBox";

export function JusView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div className="lg-fully-style fully-style bg-cover bg-center bg-[url('/assets/history.png')] bg-no-repeat md:h-[570px] h-[400px] shadow-lg">
				<div className="flex flex-col justify-center gap-3 md:gap-5 h-full bg-black/50 text-white px-4 sm:px-6 md:px-8 lg:px-14 py-2 md:py-3">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
						Découvrez notre gamme de{" "}
						<br className="hidden sm:block" /> jus et boissons
					</h1>
					<p className="text-sm md:text-base max-w-md">
						Que vous soyez jus frais au petit déjeuner ou repas à la
						fête, fruitez vos journées avec Materne !
					</p>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-4 md:gap-5 w-full mt-4 md:mt-7 px-4 md:px-6 lg:px-8">
				{/* Filtres - Colonne latérale sur desktop, accordéon en haut sur mobile */}
				<div className="w-full lg:w-64 xl:w-80 flex flex-col gap-2 md:gap-2.5 p-2 md:p-3 border-b lg:border-b-0 lg:border-r pb-4 lg:pb-0">
					<div className="flex justify-between items-center">
						<p className="font-bold">Filtrer :</p>
						<button className="flex justify-center items-center gap-1.5 md:gap-2.5 bg-red-500 text-white text-sm md:text-base rounded-lg p-1.5 md:p-2 hover:bg-red-600 cursor-pointer">
							<TrashIcon className="h-4 w-4 md:h-5 md:w-5 inline" />
							<span className="hidden xs:inline">Supprimer</span>
						</button>
					</div>
					<div>
						<p className="text-sm md:text-base">20 produits</p>
					</div>
					<div>
						<AccordionCustom />
					</div>
				</div>

				{/* Contenu principal */}
				<div className="flex flex-col gap-2.5 w-full">
					<div className="self-start lg:self-end flex items-center gap-2 md:gap-2.5 p-2">
						<span className="font-bold text-sm md:text-base">
							Trier par :{" "}
						</span>
						<SelectTri />
					</div>
					{/* Grille de cartes produits avec espacement amélioré */}
					<section className="antialiased">
						<div className="mx-auto max-w-screen-xl">
							<div className="mb-4 grid gap-4 sm:grid-cols-1 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">
								<CardBoxCart />
                                <CardBoxCart />
                                <CardBoxCart />
                                <CardBoxCart />
                                <CardBoxCart />
                                <CardBoxCart />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
