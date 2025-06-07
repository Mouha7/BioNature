import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function LoginView() {
	return (
		<div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-screen-xl mx-auto">
			<div className="w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 md:p-1">
				<h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
					Connexion
				</h1>

				<form className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
					<div className="w-full">
						<label
							htmlFor="email"
							className="text-sm font-medium mb-1 block"
						>
							Email
						</label>
						<Input
							id="email"
							type="email"
							placeholder="votre-email@exemple.com"
							className="w-full"
						/>
					</div>

					<div className="w-full">
						<label
							htmlFor="password"
							className="text-sm font-medium mb-1 block"
						>
							Mot de passe
						</label>
						<Input
							id="password"
							type="password"
							placeholder="••••••••"
							className="w-full"
						/>
					</div>

					<div className="flex justify-end">
						<Link
							to="/recovery"
							className="text-bio-contraste text-sm font-semibold hover:underline transition-colors"
						>
							Mot de passe oublié?
						</Link>
					</div>

					<button
						type="submit"
						className="bg-bio-contraste text-bio font-semibold py-2.5 px-6 rounded-md hover:bg-bio-contraste/90 transition-colors duration-200 w-full"
					>
						Se connecter
					</button>

					<div className="flex justify-center mt-2">
						<p className="text-sm">
							Pas encore de compte ?{" "}
							<Link
								to="/register"
								className="text-bio-contraste font-semibold hover:underline transition-colors"
							>
								Créer un compte
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}
