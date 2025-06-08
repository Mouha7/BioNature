import { Link } from "react-router-dom";

const BannerProductData = [
	{
		image: "/assets/confiture_mangue.png",
		label: "Confiture",
		to: "/catalogue/confitures"
	},
	{
		image: "/assets/Orange.png",
		label: "Boissons",
		to: "/catalogue/gamme-jus"
	}
];

export function BannerProduct() {
	return (
		<div className="w-full py-4 sm:py-6 md:py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
				{BannerProductData.map((product, index) => (
					<Link
						key={index}
						to={product.to}
						className="group relative overflow-hidden bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border border-bio-contraste/10"
					>
						{/* Container avec ratio d'aspect fixe */}
						<div className="relative pt-[120%] w-full">
							{/* Image positionnée de façon absolue à l'intérieur */}
							<div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex items-center justify-center">
								<img
									loading="lazy"
									className="object-contain w-full h-full max-h-[300px] transition-transform duration-300 group-hover:scale-105"
									src={product.image}
									alt={product.label}
								/>
							</div>
							
							{/* Étiquette responsive */}
							<div className="absolute top-4 left-0 right-0 flex justify-center">
								<span className="bg-black/80 text-white text-center py-1.5 px-4 xs:py-2 xs:px-5 text-xs xs:text-sm md:text-base uppercase font-medium rounded-md">
									{product.label}
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
