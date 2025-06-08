import { useParams, Link, useNavigate } from "react-router-dom";
import { Juices } from "../constants/Juices";
import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@heroicons/react/16/solid";
import { toast } from "sonner";

export function ProductDetailView() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [isWishlisted, setIsWishlisted] = useState(false);

	// Trouver le produit dans la liste des jus
	const product = Juices.find((juice) => juice.id === id);

	// Si le produit n'existe pas, rediriger vers la liste
	useEffect(() => {
		if (!product && id) {
			navigate("/catalogue/gamme-jus");
		}
	}, [id, product, navigate]);

	if (!product) {
		return (
			<div className="flex flex-col min-h-[50vh] justify-center items-center px-4 sm:px-6 md:px-8 py-8">
				<h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
					Produit non trouvé
				</h2>
				<p className="text-sm sm:text-base text-center max-w-md">
					Le produit que vous recherchez n'existe pas dans notre
					catalogue.
				</p>
				<Link
					to="/catalogue/gamme-jus"
					className="mt-6 bg-bio-contraste text-bio px-4 py-2 rounded-md hover:bg-bio-contraste/90 transition-colors"
				>
					Retour aux produits
				</Link>
			</div>
		);
	}

	// Extraire les données du produit
	const {
		title,
		prix,
		imageUrl,
		category,
		ingredients,
		rating,
		discount,
		new: isNew,
		popular,
	} = product;

	// Calculer le prix avec la réduction si applicable
	const numericPrice = parseInt(prix.replace(/\D/g, "")) || 0;
	const discountedPrice = discount
		? Math.round(numericPrice * (1 - discount / 100))
		: null;

	// Gérer l'ajout au panier
	const handleAddToCart = () => {
		for (let i = 0; i < quantity; i++) {
			addToCart({
				id: product.id,
				name: title,
				price: discountedPrice || numericPrice,
				imageUrl,
			});
		}
		toast.success(
			`${quantity} ${title} ajouté${quantity > 1 ? "s" : ""} au panier`,
			{
				duration: 3000,
			}
		);
	};

	// Gérer la quantité
	const increaseQuantity = () => setQuantity((prev) => prev + 1);
	const decreaseQuantity = () =>
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

	// Gérer la liste de souhaits
	const toggleWishlist = () => {
		setIsWishlisted(!isWishlisted);
		if (!isWishlisted) {
			toast.success(`${title} ajouté à vos favoris`, {
				duration: 3000,
			});
		}
	};

	return (
		<div className="flex flex-col w-full justify-center items-center">
			{/* Fil d'ariane */}
			<div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 pt-6">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link
								to="/"
								className="text-bio-contraste/70 hover:text-bio-contraste"
							>
								Accueil
							</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash className="text-bio-contraste/50" />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<Link
								to="/catalogue/gamme-jus"
								className="text-bio-contraste/70 hover:text-bio-contraste"
							>
								Jus et boissons
							</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash className="text-bio-contraste/50" />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage className="font-medium text-bio-contraste">
								{title}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			{/* Contenu principal */}
			<div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row gap-8">
				{/* Partie gauche - Image du produit */}
				<div className="w-full md:w-1/2 lg:w-2/5">
					<div className="relative p-8 rounded-lg shadow-sm border border-bio-contraste/10">
						{/* Badges */}
						<div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
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
							<span className="absolute top-4 right-4 z-10 bg-[#66441b] text-[#fdf8e3] text-xs font-semibold px-2.5 py-1 rounded-md">
								-{discount}%
							</span>
						)}

						{/* Image */}
						<div className="flex items-center justify-center h-72 sm:h-80 md:h-96">
							<img
								src={`/assets/${imageUrl}`}
								alt={title}
								className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
							/>
						</div>
					</div>
				</div>

				{/* Partie droite - Détails du produit */}
				<div className="w-full md:w-1/2 lg:w-3/5 flex flex-col">
					{/* Titre et catégories */}
					<div className="mb-4">
						<h1 className="text-2xl sm:text-3xl font-bold text-bio-contraste mb-2">
							{title}
						</h1>

						{/* Catégories */}
						{category && category.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-2">
								{category.map((cat) => (
									<span
										key={cat}
										className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-1 rounded-full"
									>
										{cat}
									</span>
								))}
							</div>
						)}
					</div>

					{/* Évaluation */}
					{rating && (
						<div className="flex items-center mb-4">
							{[...Array(5)].map((_, index) => (
								<svg
									key={index}
									className={`w-5 h-5 ${
										index < Math.floor(rating)
											? "text-amber-400"
											: index < rating
											? "text-amber-400"
											: "text-gray-300"
									}`}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 20"
								>
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
							))}
							<span className="ml-2 text-sm text-bio-contraste/80">
								{rating.toFixed(1)} sur 5
							</span>
						</div>
					)}

					{/* Prix */}
					<div className="mb-6">
						{discount && discount > 0 ? (
							<div className="flex items-center gap-3">
								<span className="text-xl line-through text-bio-contraste/60">
									{prix}
								</span>
								<span className="text-3xl font-bold text-bio-contraste">
									{discountedPrice} FCFA
								</span>
								<span className="px-2 py-1 bg-bio-contraste/10 text-bio-contraste/80 rounded-md text-sm">
									Économisez{" "}
									{numericPrice - (discountedPrice || 0)} FCFA
								</span>
							</div>
						) : (
							<span className="text-3xl font-bold text-bio-contraste">
								{prix}
							</span>
						)}
					</div>

					{/* Description et ingrédients */}
					<div className="mb-6 bg-bio/30 p-4 rounded-lg">
						<h2 className="text-lg font-semibold text-bio-contraste mb-2">
							Description
						</h2>
						<p className="text-bio-contraste/90 mb-4">
							Un délicieux jus 100% naturel, sans conservateurs ni
							colorants artificiels. Parfait pour accompagner vos
							petits déjeuners ou pour une pause rafraîchissante.
						</p>

						{/* Ingrédients */}
						{ingredients && ingredients.length > 0 && (
							<div>
								<h3 className="text-md font-medium text-bio-contraste mb-1">
									Ingrédients:
								</h3>
								<p className="text-bio-contraste/80 italic">
									{ingredients.join(", ")}
								</p>
							</div>
						)}
					</div>

					{/* Actions - Quantité et boutons */}
					<div className="flex flex-col space-y-4">
						{/* Sélecteur de quantité */}
						<div className="flex items-center">
							<span className="mr-4 text-bio-contraste font-medium">
								Quantité:
							</span>
							<div className="flex items-center border border-bio-contraste/30 rounded-md">
								<button
									onClick={decreaseQuantity}
									className="px-3 py-1 text-bio-contraste hover:bg-bio-contraste/10 transition-colors"
									aria-label="Diminuer la quantité"
								>
									-
								</button>
								<span className="px-4 py-1 border-x border-bio-contraste/30 min-w-[40px] text-center">
									{quantity}
								</span>
								<button
									onClick={increaseQuantity}
									className="px-3 py-1 text-bio-contraste hover:bg-bio-contraste/10 transition-colors"
									aria-label="Augmenter la quantité"
								>
									+
								</button>
							</div>
						</div>

						{/* Boutons d'action */}
						<div className="flex flex-wrap gap-3">
							<Button
								onClick={handleAddToCart}
								className="flex-1 bg-bio-contraste text-bio hover:bg-bio-contraste/90 transition-colors py-2 px-4 rounded-md flex items-center justify-center gap-2"
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
								Ajouter au panier
							</Button>

							<Button
								onClick={toggleWishlist}
								variant="outline"
								className={`px-3 border border-bio-contraste/30 rounded-md ${
									isWishlisted
										? "bg-bio-contraste/10 text-bio-contraste"
										: "bg-transparent hover:bg-bio-contraste/10 text-bio-contraste/80"
								}`}
								aria-label={
									isWishlisted
										? "Retirer des favoris"
										: "Ajouter aux favoris"
								}
							>
								<HeartIcon
									className={`h-5 w-5 ${
										isWishlisted ? "text-red-500" : ""
									}`}
								/>
							</Button>
						</div>
					</div>

					{/* Informations supplémentaires */}
					<div className="mt-8 border-t border-bio-contraste/10 pt-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-bio-contraste/70"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
								<span className="text-sm text-bio-contraste/80">
									Livraison en 24-48h
								</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-bio-contraste/70"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
								<span className="text-sm text-bio-contraste/80">
									Produit bio et naturel
								</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-bio-contraste/70"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
								<span className="text-sm text-bio-contraste/80">
									Sans conservateurs
								</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-bio-contraste/70"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
								<span className="text-sm text-bio-contraste/80">
									Fruits d'origine locale
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Produits similaires */}
			<div className="w-full bg-bio/30 py-10 mt-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h2 className="text-2xl font-bold text-bio-contraste mb-6">
						Vous pourriez aussi aimer
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{Juices.filter((j) => j.id !== id)
							.filter((j) =>
								j.category.some((c) =>
									product.category.includes(c)
								)
							)
							.slice(0, 4)
							.map((relatedProduct) => (
								<Link
									key={relatedProduct.id}
									to={`/catalogue/produit/${relatedProduct.id}`}
									className="rounded-lg shadow-sm p-4 border border-bio-contraste/10 hover:shadow-md transition-shadow"
								>
									<div className="h-40 flex items-center justify-center mb-3">
										<img
											src={`/assets/${relatedProduct.imageUrl}`}
											alt={relatedProduct.title}
											className="max-h-full object-contain"
										/>
									</div>
									<h3 className="text-bio-contraste font-medium line-clamp-1">
										{relatedProduct.title}
									</h3>
									<p className="text-bio-contraste/90 font-bold mt-1">
										{relatedProduct.prix}
									</p>
								</Link>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
