import { Button } from "@/components/ui/button";
import { CardCart } from "./components/CardBox";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export function CartView() {
	// Contexte du panier
	const { cart, totalPrice, clearCart } = useCart();
	// États locaux
	const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
	const [customerEmail, setCustomerEmail] = useState("");
	const [customerName, setCustomerName] = useState("");

	// Calculs des montants
	const tva = totalPrice * 0.2;
	const fraisLivraison = 2000;
	const totalTTC = totalPrice + tva + fraisLivraison;

	// Si le panier est vide, rediriger vers la page des produits
	if (cart.length === 0 && !isCheckoutComplete) {
		return <Navigate to="/catalogue/gamme-jus" />;
	}

	// Si le paiement est terminé, afficher la confirmation
	if (isCheckoutComplete) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4 sm:px-6 md:px-8 py-8">
				<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md w-full mb-6">
					<p className="font-bold text-center">Commande confirmée !</p>
					<p className="text-center">
						Un email de confirmation a été envoyé à {customerEmail}
					</p>
				</div>
				<p className="mb-6">
					Merci pour votre commande. Votre commande a été traitée avec succès.
				</p>
				<Link
					to="/catalogue/gamme-jus"
					className="bg-bio-contraste text-bio font-medium py-2 px-4 rounded-md"
				>
					Continuer vos achats
				</Link>
			</div>
		);
	}

	// Envoi de l'email de confirmation
	const sendConfirmationEmail = () => {
		const templateParams = {
			to_email: customerEmail,
			to_name: customerName,
			order_total: `${totalTTC} FCFA`,
			order_items: cart
				.map((item) => `${item.name} (x${item.quantity})`)
				.join(", "),
		};

		emailjs
			.send(
				"service_9q8v8q8",
				"template_123abc",
				templateParams,
				"VOTRE_CLE_PUBLIC_EMAILJS"
			)
			.then((response) => {
				console.log("Email envoyé !", response.status, response.text);
			})
			.catch((err) => {
				console.error("Échec de l'envoi de l'email :", err);
			});
	};

	// Gestion de la soumission du formulaire de paiement
	const handleCheckout = (e: React.FormEvent) => {
		e.preventDefault();
		// Simuler un traitement de commande
		if (customerEmail) {
			clearCart();
			setIsCheckoutComplete(true);
			sendConfirmationEmail();
			// Dans un cas réel, vous pourriez envoyer un email avec un service comme EmailJS
			console.log(`Email de confirmation envoyé à ${customerEmail}`);
		}
	};

	return (
		<form
			onSubmit={handleCheckout}
			className="flex flex-col md:flex-row items-center my-4 md:gap-8 lg:gap-20 px-4 md:px-6 lg:px-8"
		>
			<div className="w-full md:flex-grow flex flex-col justify-center my-4">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<Link to="/">Accueil</Link>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage className="font-bold">
								Panier
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<h1 className="text-2xl md:text-3xl font-bold mb-4">
					Votre Panier
				</h1>
				<div className="flex flex-col gap-4 mt-4">
					{cart.map((item) => (
						<CardCart
							key={item.id}
							id={item.id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
							quantity={item.quantity}
							className="border-bottom pb-4"
						/>
					))}
				</div>
			</div>

			<div className="w-full md:w-2/5 flex flex-col gap-4 p-4 max-h-[400px] md:h-[400px] overflow-auto mt-4 md:mt-0 bg-bio/20 border border-bio-contraste/10 rounded-md">
				<div className="flex justify-between items-end">
					<div className="flex flex-col gap-2.5">
						<h2 className="text-xl font-bold">1. Adresse Client</h2>
						<div className="flex flex-col gap-2 w-full">
							<input
								type="text"
								placeholder="Nom et Prénom"
								className="border border-bio-contraste/30 p-2 rounded-md"
								value={customerName}
								onChange={(e) => setCustomerName(e.target.value)}
								required
							/>
							<input
								type="email"
								placeholder="Email"
								className="border border-bio-contraste/30 p-2 rounded-md"
								value={customerEmail}
								onChange={(e) => setCustomerEmail(e.target.value)}
								required
							/>
							<input
								type="text"
								placeholder="Adresse de livraison"
								className="border border-bio-contraste/30 p-2 rounded-md"
								required
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-end gap-2.5">
					<div className="flex flex-col">
						<h2 className="text-xl mb-2.5 font-bold">
							2. Détails de livraison
						</h2>
						<RadioGroup
							className="flex flex-col gap-2.5"
							defaultValue="domicile"
						>
							<div className="flex items-center space-x-2 cursor-pointer">
								<RadioGroupItem
									className="cursor-pointer"
									value="domicile"
									id="r1"
								/>
								<Label htmlFor="r1" className="cursor-pointer">
									Livraison à domicile{" "}
									<span className="text-sm font-light">
										(à partir 3500 FCFA)
									</span>
								</Label>
							</div>
							<div className="flex items-center space-x-2 ">
								<RadioGroupItem
									className="cursor-pointer"
									value="relai"
									id="r2"
								/>
								<Label htmlFor="r2" className="cursor-pointer">
									Point de relais{" "}
									<span className="text-sm font-light">
										(à partir 1500 FCFA)
									</span>
								</Label>
							</div>
						</RadioGroup>
					</div>
				</div>

				<div className="flex flex-col mt-4">
					<h2 className="text-xl font-bold mb-3">
						3. Résumé de la commande
					</h2>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">Sous-total</h3>
						<p>{totalPrice} FCFA</p>
					</div>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">TVA (20%)</h3>
						<p>{tva} FCFA</p>
					</div>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">Frais de livraison</h3>
						<p>{fraisLivraison} FCFA</p>
					</div>
					<div className="flex justify-between items-center mt-2 pt-2 border-t border-bio-contraste/20">
						<h3 className="font-bold">Total</h3>
						<p className="font-bold text-lg">{totalTTC} FCFA</p>
					</div>
				</div>

				<Button
					type="submit"
					className="bg-bio-contraste text-bio uppercase rounded-md cursor-pointer mt-4"
				>
					Procéder au paiement
				</Button>
			</div>
		</form>
	);
}
