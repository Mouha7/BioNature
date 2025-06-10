import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

type CardBoxProps = {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	discount?: number;
};

export function CardBox({ id, name, price, imageUrl, discount }: CardBoxProps) {
	const productUrl = `/catalogue/produit/${id}`;
	const { addToCart } = useCart();

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault(); // Empêche la navigation
		addToCart({ id, name, price, imageUrl });
	};

	return (
		<div className="relative flex w-full min-w-[260px] sm:min-w-[280px] md:min-w-[300px] flex-col overflow-hidden rounded-lg border border-bio-contraste/25 bg-bio-contraste/5 shadow-md transition-transform hover:scale-[1.02] duration-200">
			{/* Image du produit */}
			<NavLink
				className="relative mx-3 mt-3 flex h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl"
				to={productUrl}
				aria-label="Image du produit"
			>
				<img
					className="object-cover w-full"
					src={
						imageUrl.startsWith("/")
							? imageUrl
							: `/assets/${imageUrl}`
					}
					loading="lazy"
					alt={name}
				/>
				{discount && discount > 0 && (
					<span className="absolute top-0 left-0 m-2 rounded-md bg-[#66441b] px-3 py-1.5 text-center text-xs sm:text-sm font-medium text-[#fdf8e3]">
						{discount}% OFF
					</span>
				)}
			</NavLink>
			<div className="mt-3 px-4 pb-4 flex flex-col h-full">
				{/* Taille du titre et du prix adaptée */}
				<div className="mb-2 sm:mb-3 flex justify-between items-center">
					<h5 className="text-base sm:text-lg font-medium">
						<NavLink to={productUrl}>{name}</NavLink>
					</h5>
					<p className="text-lg sm:text-xl font-semibold">
						{price} FCFA
					</p>
				</div>
				<div className="mt-auto">
					<button
						onClick={handleAddToCart}
						className="w-full flex items-center justify-center text-sm sm:text-base py-2 sm:py-2.5 bg-bio-contraste text-bio rounded-md hover:bg-bio-contraste/90 transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="mr-1.5 h-5 w-5 sm:h-6 sm:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						Commander
					</button>
				</div>
			</div>
		</div>
	);
}

export function CardCart({
	id,
	name = "Boisson à bénéfices",
	price = 800,
	imageUrl = "/assets/fraise.avif",
	quantity = 1,
	className,
}: {
	readonly id?: string;
	readonly name?: string;
	readonly price?: number;
	readonly imageUrl?: string;
	readonly quantity?: number;
	readonly className?: string;
}) {
	const { updateQuantity, removeFromCart } = useCart();
	const [qte, setQte] = useState(quantity);

	const handleQuantityChange = (newQty: number) => {
		if (newQty >= 1) {
			setQte(newQty);
			updateQuantity(id || "", newQty);
		}
	};

	const handleRemove = () => {
		removeFromCart(id || "");
	};

	// Construire correctement le chemin de l'image
	const imagePath = imageUrl.startsWith("/assets/") 
		? imageUrl 
		: `/assets/${imageUrl}`;

	return (
		<div className={`flex gap-2 sm:gap-3 ${className}`}>
			<div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex-shrink-0">
				<img
					className="w-full h-full object-contain"
					src={imagePath}
					alt={name}
				/>
			</div>

			<div className="flex flex-grow flex-col gap-1 sm:gap-2">
				<h2 className="text-base sm:text-lg font-bold sm:font-black line-clamp-2">
					{name}
				</h2>
				<p className="text-xs sm:text-sm font-medium">{price} FCFA</p>

				<div className="flex justify-between items-end mt-auto">
					<div className="flex items-center border-1 w-fit p-1 sm:p-2 rounded">
						<button
							className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
							onClick={() => handleQuantityChange(qte - 1)}
							aria-label="Diminuer la quantité"
						>
							-
						</button>
						<span className="mx-2 sm:mx-3 text-sm sm:text-base">
							{qte}
						</span>
						<button
							onClick={() => handleQuantityChange(qte + 1)}
							className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
							aria-label="Augmenter la quantité"
						>
							+
						</button>
					</div>

					<button
						className="flex items-center justify-center p-1"
						aria-label="Supprimer l'article"
						onClick={handleRemove}
					>
						<MdDelete className="text-red-500 text-xl sm:text-2xl" />
					</button>
				</div>
			</div>
		</div>
	);
}

export function CardBoxCart({
	id = crypto.randomUUID(),
	imageUrl = "Orange.png",
	title = "Jus de fruits",
	prix = "1000 FCFA",
	category = [],
	ingredients = [],
	rating,
	discount,
	new: isNew,
	popular,
}: {
	readonly id?: string;
	readonly imageUrl?: string;
	readonly title?: string;
	readonly prix?: string;
	readonly category?: string[];
	readonly ingredients?: string[];
	readonly rating?: number;
	readonly discount?: number;
	readonly new?: boolean;
	readonly popular?: boolean;
}) {
	const priceNumber = parseInt(prix.replace(/\D/g, "")) || 1000;
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart({
			id,
			name: title,
			price: priceNumber,
			imageUrl,
		});
	};

	// Calculer le prix réduit si une remise est appliquée
	const discountedPrice = discount
		? Math.round(priceNumber * (1 - discount / 100))
		: null;

	return (
		<div className="relative flex flex-col h-full rounded-lg border border-gray-200 bg-bio/30 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
			{/* Badges */}
			<div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
				{isNew && (
					<span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
						NOUVEAU
					</span>
				)}
				{popular && (
					<span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
						POPULAIRE
					</span>
				)}
			</div>

			{/* Badge promotion */}
			{discount && discount > 0 && (
				<span className="absolute top-2 right-2 z-10 bg-[#66441b] text-[#fdf8e3] text-xs font-semibold px-2.5 py-1 rounded-md">
					-{discount}%
				</span>
			)}

			{/* Image du produit */}
			<div className="relative p-4 h-48 w-full flex items-center justify-center overflow-hidden group">
				<img
					className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
					src={`/assets/${imageUrl}`}
					loading="lazy"
					alt={title}
				/>
			</div>

			{/* Contenu */}
			<div className="flex flex-col flex-grow p-4 gap-2">
				{/* Catégories */}
				{category && category.length > 0 && (
					<div className="flex flex-wrap gap-1.5">
						{category.slice(0, 2).map((cat) => (
							<span
								key={cat}
								className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full"
							>
								{cat}
							</span>
						))}
						{category.length > 2 && (
							<span className="text-xs font-medium text-bio-contraste/80">
								+{category.length - 2}
							</span>
						)}
					</div>
				)}

				{/* Titre */}
				<h3 className="text-lg font-semibold leading-tight text-bio-contraste line-clamp-2 min-h-[56px]">
					{title}
				</h3>

				{/* Rating */}
				{rating && (
					<div className="flex items-center">
						{[...Array(5)].map((_, index) => (
							<svg
								key={index}
								className={`w-4 h-4 ${index < Math.floor(rating)
									? "text-amber-400"
									: index < rating
										? "text-amber-400"
										: "text-gray-300"}`}
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
							</svg>
						))}
						<span className="ml-1 text-sm text-bio-contraste/80">{rating.toFixed(1)}</span>
					</div>
				)}

				{/* Ingrédients */}
				{ingredients && ingredients.length > 0 && (
					<p className="text-xs text-bio-contraste/70 italic">
						{ingredients.join(', ')}
					</p>
				)}

				{/* Prix et bouton */}
				<div className="mt-auto flex items-end justify-between gap-2">
					<div className="flex flex-col">
						{discount && discount > 0 ? (
							<>
								<span className="text-sm line-through text-bio-contraste/70">
									{prix}
								</span>
								<span className="text-2xl font-bold text-bio-contraste">
									{discountedPrice} FCFA
								</span>
							</>
						) : (
							<span className="text-2xl font-bold text-bio-contraste">
								{prix}
							</span>
						)}
					</div>

					<button
						type="button"
						onClick={handleAddToCart}
						className="rounded-md border border-bio-contraste/25 bg-bio-contraste px-4 py-2 text-sm font-medium text-bio shadow-sm hover:bg-bio-contraste/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bio-contraste/50 flex items-center gap-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
							<path d="M20 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
						</svg>
						Ajouter
					</button>
				</div>
			</div>
		</div>
	);
}
