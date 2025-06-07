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

export function Cart() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="relative flex items-center hover:text-bio-contraste transition-colors">
					<FaCartShopping className="text-base sm:text-lg md:text-xl" />
					<span className="absolute -top-2 -right-2 bg-bio-contraste text-bio text-xs w-4 h-4 flex items-center justify-center rounded-full">
						2
					</span>
				</button>
			</SheetTrigger>
			<SheetContent
				className="bg-bio text-bio-contraste p-4 sm:p-5 md:p-6 w-[85vw] sm:w-[420px] md:w-[450px] overflow-hidden"
				side="right"
			>
				<SheetHeader className="border-bottom py-2 mb-3">
					<SheetTitle className="text-base sm:text-lg md:text-xl">
						Votre panier (2 articles)
					</SheetTitle>
				</SheetHeader>

				<div className="h-[calc(100%-140px)] sm:h-[calc(100%-150px)] md:h-[calc(100%-160px)] overflow-auto border-bottom space-y-3 py-2">
					<CardCart />
					<CardCart />
				</div>

				<SheetFooter className="flex-col space-y-3 pt-3 mt-2">
					<div className="w-full space-y-1.5">
						<div className="flex justify-between items-center text-sm sm:text-base">
							<h3 className="font-medium">Sous-total</h3>
							<p>800 FCFA</p>
						</div>
						<div className="flex justify-between items-center text-sm sm:text-base">
							<h3 className="font-medium">TVA (20%)</h3>
							<p>160 FCFA</p>
						</div>
						<div className="flex justify-between items-center text-base sm:text-lg font-semibold">
							<h3>Total</h3>
							<p>960 FCFA</p>
						</div>
					</div>

					<div className="w-full space-y-3">
						<Button
							className="bg-bio-contraste text-bio uppercase rounded-md cursor-pointer w-full py-2 h-auto text-sm sm:text-base font-semibold hover:bg-bio-contraste/90 transition-colors"
							type="submit"
						>
							Procéder au paiement
						</Button>

						<SheetClose asChild>
							<Link
								className="text-center font-medium underline block hover:text-bio-contraste/80 transition-colors text-sm sm:text-base"
								to="/panier"
							>
								Voir le panier
							</Link>
						</SheetClose>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
