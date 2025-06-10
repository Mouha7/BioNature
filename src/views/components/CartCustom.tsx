import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { FaCartShopping } from "react-icons/fa6";
import { CardCart } from "./CardBox";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export function Cart() {
	// Récupérer le contexte du panier
	const { cart, totalItems, totalPrice } = useCart();

	// Calculer la TVA (20%)
	const tva = totalPrice * 0.18;
	const total = totalPrice + tva;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="relative flex items-center hover:text-bio-contraste transition-colors">
					<FaCartShopping className="text-base sm:text-lg md:text-xl" />
					<span className="absolute -top-2 -right-2 bg-bio-contraste text-bio text-xs w-4 h-4 flex items-center justify-center rounded-full">
						{totalItems}
					</span>
				</button>
			</SheetTrigger>
			<SheetContent
				className="bg-bio text-bio-contraste p-4 sm:p-5 md:p-6 w-[85vw] sm:w-[420px] md:w-[450px] overflow-hidden"
				side="right"
			>
				<SheetHeader className="border-bottom py-2 mb-3">
					<SheetTitle className="text-base sm:text-lg md:text-xl">
						Votre panier ({totalItems} article
						{totalItems !== 1 ? "s" : ""})
					</SheetTitle>
				</SheetHeader>

				<div className="h-[calc(100%-140px)] sm:h-[calc(100%-150px)] md:h-[calc(100%-160px)] overflow-auto border-bottom space-y-3 py-2">
					{cart.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full">
							<p className="text-center mb-4">Votre panier est vide</p>
							<SheetClose asChild>
								<Link
									to="/catalogue/gamme-jus"
									className="bg-bio-contraste text-bio py-2 px-4 rounded-md hover:bg-bio-contraste/90 transition-colors"
								>
									Découvrir nos produits
								</Link>
							</SheetClose>
						</div>
					) : (
						cart.map((item) => (
							<CardCart
								key={item.id}
								id={item.id}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								imageUrl={item.imageUrl}
							/>
						))
					)}
				</div>

				{cart.length > 0 && (
					<SheetFooter className="flex-col space-y-3 pt-3 mt-2">
						<div className="w-full space-y-1.5">
							<div className="flex justify-between items-center text-sm sm:text-base">
								<h3 className="font-medium">Sous-total</h3>
								<p>{totalPrice} FCFA</p>
							</div>
							<div className="flex justify-between items-center text-sm sm:text-base">
								<h3 className="font-medium">TVA (18%)</h3>
								<p>{tva} FCFA</p>
							</div>
							<div className="flex justify-between items-center text-base sm:text-lg font-semibold">
								<h3>Total</h3>
								<p>{total} FCFA</p>
							</div>
						</div>

						<div className="w-full space-y-3">
							<SheetClose asChild>
								<Button
									asChild
									className="bg-bio-contraste text-bio uppercase rounded-md cursor-pointer w-full py-2 h-auto text-sm sm:text-base font-semibold hover:bg-bio-contraste/90 transition-colors"
								>
									<Link to="/panier">Procéder au paiement</Link>
								</Button>
							</SheetClose>
						</div>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	);
}
