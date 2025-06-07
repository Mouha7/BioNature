import { NavLink } from "react-router-dom";
import { BtnCustom } from "./BtnCustom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export function CardBox() {
	const productUrl = "/catalogue/produit";

	return (
		<div className="relative h-[65%] flex w-full min-w-[260px] sm:min-w-[280px] md:min-w-[300px] flex-col overflow-hidden rounded-lg border border-bio-contraste/25 bg-bio-contraste/5 shadow-md transition-transform hover:scale-[1.02] duration-200">
			{/* Image du produit - Hauteur réduite et largeur augmentée */}
			<NavLink
				className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
				to={productUrl}
				aria-label="Product Image"
			>
				<img
					className="object-cover w-full"
					src="/assets/Orange.png"
					loading="lazy"
					alt="product image"
				/>
				{/* Badge de réduction avec des dimensions adaptées */}
				<span className="absolute top-0 left-0 m-2 rounded-md bg-[#66441b] px-3 py-1.5 text-center text-xs sm:text-sm font-medium text-[#fdf8e3]">
					39% OFF
				</span>
			</NavLink>
			<div className="mt-3 px-4 pb-4 flex flex-col h-full">
				{/* Taille du titre et du prix adaptée */}
				<div className="mb-2 sm:mb-3 flex justify-between items-center">
					<h5 className="text-base sm:text-lg font-medium">
						<NavLink to={productUrl}>Jus de mangues</NavLink>
					</h5>
					<p className="text-lg sm:text-xl font-semibold">
						1500 FCFA
					</p>
				</div>
				<div className="mt-auto">
					<BtnCustom
						to="#"
						className="w-full flex items-center justify-center text-sm sm:text-base py-2 sm:py-2.5"
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
					</BtnCustom>
				</div>
			</div>
		</div>
	);
}

export function CardCart({ className }: { readonly className?: string }) {
	const [qte, setQte] = useState(1);
	return (
		<div className={`flex gap-2 sm:gap-3 p-3 sm:p-4 ${className}`}>
			<div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex-shrink-0">
				<img
					className="w-full h-full object-contain"
					src="/assets/fraise.avif"
					alt="Produit sélectionné"
				/>
			</div>

			<div className="flex flex-grow flex-col gap-1 sm:gap-2">
				<h2 className="text-base sm:text-lg font-bold sm:font-black line-clamp-2">
					Boisson à bénéfices
				</h2>
				<p className="text-xs sm:text-sm font-medium">800 FCFA</p>

				<div className="flex justify-between items-end mt-auto">
					<div className="flex items-center border-1 w-fit p-1 sm:p-2 rounded">
						<button
							className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
							onClick={() => {
								if (qte > 1) {
									setQte(qte - 1);
								}
							}}
							aria-label="Diminuer la quantité"
						>
							-
						</button>
						<span className="mx-2 sm:mx-3 text-sm sm:text-base">
							{qte}
						</span>
						<button
							onClick={() => {
								setQte(qte + 1);
							}}
							className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
							aria-label="Augmenter la quantité"
						>
							+
						</button>
					</div>

					<button
						className="flex items-center justify-center p-1"
						aria-label="Supprimer l'article"
					>
						<MdDelete className="text-red-500 text-xl sm:text-2xl" />
					</button>
				</div>
			</div>
		</div>
	);
}

export function CardBoxCart() {
	return (
		<div className="rounded-lg border border-gray-200 bg-bio-contraste/25 p-6 shadow-sm">
			<div className="h-48 w-full">
				<NavLink to="">
					<img
						className="mx-auto h-full"
						src="/assets/Orange.png"
						alt=""
					/>
				</NavLink>
			</div>
			<div className="pt-6">
				<NavLink
					to=""
					className="text-lg font-semibold leading-tight text-bio-contraste hover:underline"
				>
					Jus d'orange
				</NavLink>

				<div className="mt-4 flex items-center justify-between gap-2">
					<p className="text-2xl font-extrabold leading-tight text-bio-contraste">
						1 500 FCFA
					</p>

					<button
						type="button"
						className="inline-flex items-center cursor-pointer rounded-lg bg-bio-contraste px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						<svg
							className="h-5 w-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
