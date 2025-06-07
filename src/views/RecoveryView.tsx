import { Input } from "@/components/ui/input";
import { BtnLightCustom } from "./components/BtnCustom";
import { NavLink } from "react-router-dom";

export function RecoveryView() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
			<div className="w-full max-w-md mx-auto bg-bio/50 p-5 sm:p-6 md:p-8">
				<h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-center text-bio-contraste">
					Réinitialiser son mot de passe
				</h1>

				<p className="text-center text-sm sm:text-base text-bio-contraste/80 mb-4 sm:mb-6 md:mb-8 max-w-sm mx-auto">
					Nous vous ferons parvenir un e-mail pour réinitialiser votre mot
					de passe
				</p>

				<form className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full items-center">
					<div className="w-full">
						<Input
							type="email"
							placeholder="Email"
							className="w-full text-sm sm:text-base border-bio-contraste/30 focus:border-bio-contraste/70 rounded-md p-2.5"
							required
							aria-label="Adresse email"
						/>
					</div>

					<div className="flex flex-col xs:flex-row w-full gap-3 sm:gap-4">
						<button
							type="submit"
							className="bg-bio-contraste text-bio font-medium sm:font-bold py-2 px-4 rounded-md transition-colors duration-200 hover:bg-bio-contraste/80 focus:outline-none focus:ring-2 focus:ring-bio-contraste/50 flex-1 text-sm sm:text-base"
						>
							Envoyer
						</button>

						<BtnLightCustom
							to="/login"
							className="border border-bio-contraste/30 rounded-md flex-1 text-sm sm:text-base py-2 px-4 hover:bg-bio-contraste/10"
							text="Annuler"
						/>
					</div>

					<p className="text-xs sm:text-sm text-bio-contraste/70 text-center mt-2 sm:mt-3">
						Vous avez retrouvé votre mot de passe ?{" "}
						<NavLink
							to="/login"
							className="underline text-bio-contraste hover:text-bio-contraste/80"
						>
							Retour à la connexion
						</NavLink>
					</p>
				</form>
			</div>
		</div>
	);
}
