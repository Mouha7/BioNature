import { Link } from "react-router-dom";

const BannerProductData = [
	{
		image: "/assets/Orange.png",
		label: "Confiture",
	},
	{
		image: "/assets/Orange.png",
		label: "Compotes",
	},
	{
		image: "/assets/Orange.png",
		label: "Boissons",
	},
	{
		image: "/assets/Orange.png",
		label: "Snacks",
	},
];

export function BannerProduct() {
	return (
		<div className="w-full">
			<div className="flex flex-wrap justify-center sm:justify-between gap-0 md:gap-6 lg:gap-8">
				{BannerProductData.map((product, index) => (
					<Link
						key={index}
						to=""
						className="flex relative justify-center items-center w-full sm:w-[48%] md:w-[23%] bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
					>
						<div className="w-full aspect-[3/4] flex justify-center items-center p-2 sm:p-3 md:p-4">
							<img
								loading="lazy"
								className="object-contain w-full h-full max-h-[280px]"
								src={product.image}
								alt={product.label}
							/>
						</div>
						<span className="absolute top-[20%] lg:top-[15%] md:top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-black/80 text-white text-center py-1.5 px-4 sm:py-2 sm:px-5 text-xs sm:text-sm md:text-base uppercase font-medium rounded-md">
							{product.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}
