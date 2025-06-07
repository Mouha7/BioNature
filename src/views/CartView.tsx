import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
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
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function CartView() {
	return (
		<div className="flex flex-col md:flex-row items-center my-4 md:gap-8 lg:gap-20">
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
				<h1 className="text-2xl md:text-3xl font-bold mb-4">Votre Panier</h1>
				<div className="flex flex-col gap-4 mt-4">
					<CardCart className="border-bottom" />
					<CardCart className="border-bottom" />
				</div>
			</div>

			<div className="w-full md:w-2/5 flex flex-col gap-4 p-4 max-h-[400px] md:h-[400px] overflow-auto mt-4 md:mt-0">
				<div className="flex justify-between items-end">
					<div className="flex flex-col gap-2.5">
						<h2 className="text-xl font-bold">
							1. Adresse Client
						</h2>
						<h3>Nom Prénom</h3>
						<span className="text-sm font-light">
							Villa N˚x | Dakar - Point E | +221770000000
						</span>
					</div>
					<FaEdit className="mb-0.5" />
				</div>

				<div className="flex justify-between items-end gap-2.5">
					<div className="flex flex-col">
						<h2 className="text-xl mb-2.5 font-bold">
							2. Détails de livraison
						</h2>
						<RadioGroup className="flex flex-col gap-2.5" defaultValue="domicile">
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
				
				<div className="flex justify-between items-end">
					<div className="flex flex-col">
						<h2 className="text-xl mb-2.5 font-bold">
							3. Mode de paiement
						</h2>
						<RadioGroup defaultValue="paiement">
							<div className="flex flex-col gap-0">
								<div className="flex items-center space-x-2 cursor-pointer">
									<RadioGroupItem
										className="cursor-pointer"
										value="paiement"
										id="r3"
									/>
									<Label
										htmlFor="r3"
										className="cursor-pointer"
									>
										Paiement à la livraison
									</Label>
								</div>
								<p className="text-sm font-light">
								Payez pour votre commande à la
								livraison...
								</p>
								<Accordion
									type="single"
									collapsible
									className="w-full cart-details-accordion"
								>
									<AccordionItem value="item-1">
										<AccordionTrigger className="cursor-pointer p-0">
											Détails
										</AccordionTrigger>
										<AccordionContent className="text-sm font-light">
											Payez pour votre commande à la
											livraison:
											<br /> En espèces ou via Wave lors
											de la livraison avec le Code
											Marchand du livreur.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							<div className="flex flex-col gap-0">
								<div className="flex items-center space-x-2">
									<RadioGroupItem
										className="cursor-pointer"
										value="money"
										id="r4"
									/>
									<Label
										htmlFor="r4"
										className="cursor-pointer"
									>
										Mobile Money
									</Label>
								</div>
								<p className="text-sm font-light">
									Payez simplement vos achats avec Orange
									Money...
								</p>
								<Accordion
									type="single"
									collapsible
									className="w-full cart-details-accordion"
								>
									<AccordionItem value="item-1">
										<AccordionTrigger className="cursor-pointer p-0">
											Détails
										</AccordionTrigger>
										<AccordionContent className="text-sm font-light">
											Payez simplement vos achats avec
											Orange Money
											<br />
											Vous devez pour cela obtenir un code
											de paiement:
											<ul className="list-disc pl-10">
												<li>Composez le #144#391#</li>
												<li>
													Entrez votre code secret
													Orange Money
												</li>
												<li>
													Vous recevez ensuite un
													SMS avec un code de paiement
													utilisable pendant 15
													minutes
												</li>
												<li>
													Conservez ce code. Il vous
													sera demandé pour régler
													votre commande par la suite.
												</li>
												<li>
													Cliquez pour revenir sur
													le site BioNature une fois
													votre paiement terminé, dans
													le cas contraire, votre
													paiement ne sera pas
													enregistré.
												</li>
											</ul>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</RadioGroup>
					</div>
				</div>

				<div className="flex flex-col">
					<h2 className="text-xl font-bold">
						4. Résumé de la commande
					</h2>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">Sous-total</h3>
						<p>800 FCFA</p>
					</div>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">TVA (20%)</h3>
						<p>160 FCFA</p>
					</div>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">Frais de livraison</h3>
						<p>2 000 FCFA</p>
					</div>
					<div className="flex justify-between items-center">
						<h3 className="font-bold">Total</h3>
						<p>2 960 FCFA</p>
					</div>
				</div>

				<Button
					className="bg-bio-contraste text-bio uppercase rounded-none cursor-pointer mt-2"
					type="submit"
				>
					Procéder au paiement
				</Button>
			</div>
		</div>
	);
}
