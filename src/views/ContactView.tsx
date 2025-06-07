import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			{/* Bannière principale */}
			<div className="fully-style lg-fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[400px] h-[300px] shadow-lg">
				<div className="flex flex-col justify-center items-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center">
						Contactez-nous
					</h1>
					<p className="text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl text-sm md:text-base">
						Nous sommes là pour vous aider et répondre à vos questions !
					</p>
				</div>
			</div>

			{/* Contenu principal */}
			<div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-10 md:py-12">
				<div className="flex flex-col md:flex-row gap-8 lg:gap-12">
					{/* Informations de contact */}
					<div className="w-full md:w-1/3 space-y-4 md:space-y-6">
						<h2 className="text-xl md:text-2xl font-bold">Coordonnées</h2>
						<p className="text-sm md:text-base">
							Vous pouvez nous contacter sur le site ou par téléphone au{" "}
							<span className="font-medium"> (221) 77 000 00 00</span>, du lundi au vendredi de 8h à 16h, hors week-end et jours
							fériés.
						</p>
						<div className="space-y-2">
							<p className="text-sm md:text-base">
								<span className="font-medium">Adresse :</span>
								<br />
								123 Avenue de l'Agriculture
								<br />
								Dakar, Sénégal
							</p>
							<p className="text-sm md:text-base">
								<span className="font-medium">Email :</span>
								<br />
								bionature@gmail.com
							</p>
						</div>
					</div>

					{/* Formulaire */}
					<div className="w-full md:w-2/3">
						<form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<Input type="text" placeholder="Prénom" className="w-full" />
								<Input type="text" placeholder="Nom" className="w-full" />
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<Input type="text" placeholder="Rue/Quartier" className="w-full" />
								<Input type="text" placeholder="Ville" className="w-full" />
							</div>
							<Input type="email" placeholder="Email" className="w-full" />

							<div className="flex justify-end">
								<Select>
									<SelectTrigger className="w-full sm:w-[250px]">
										<SelectValue placeholder="Objet du message" />
									</SelectTrigger>
									<SelectContent className="bg-bio-contraste text-bio">
										<SelectGroup>
											<SelectLabel>Objet du message</SelectLabel>
											<SelectItem className="bg-bio-contraste/25 cursor-pointer" value="compliment">Compliments</SelectItem>
											<SelectItem className="hover:bg-bio-contraste/25 cursor-pointer" value="information">
												Information produit
											</SelectItem>
											<SelectItem className="hover:bg-bio-contraste/25 cursor-pointer" value="produit">
												Commentaire produit
											</SelectItem>
											<SelectItem className="hover:bg-bio-contraste/25 cursor-pointer" value="partenariat">
												Sponsoring & partenariat
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<Textarea
								placeholder="Votre message..."
								className="resize-none min-h-[150px]"
							/>
							<div className="flex justify-center sm:justify-start">
								<button className="bg-bio-contraste text-bio font-bold py-2 px-6 sm:px-8 rounded-md hover:bg-bio-contraste/90 cursor-pointer transition-colors duration-200 w-full sm:w-auto">
									Envoyer
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
