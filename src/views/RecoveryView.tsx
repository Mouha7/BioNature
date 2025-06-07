import { Input } from "@/components/ui/input";
import { BtnLightCustom } from "./components/BtnCustom";

export function RecoveryView() {
	return (
		<div className="flex flex-col items-center justify-center my-4 px-4 md:px-0">
			<h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
				Réinitialiser son mot de passe
			</h1>
			<p className="text-center text-sm md:text-base">
				Nous vous ferons parvenir un e-mail pour réinitialiser votre mot
				de passe
			</p>
			<form className="flex flex-col gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 items-center my-4">
				<Input type="email" placeholder="Email" className="w-full" />
				<div className="flex flex-col sm:flex-row gap-4">
					<button className="bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 cursor-pointer">
						Envoyer
					</button>
					<BtnLightCustom to="/login" className="border" text="Annuler" />
				</div>
			</form>
		</div>
	);
}
