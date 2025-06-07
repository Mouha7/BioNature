export function Banner() {
	return (
		<div className="fully-style flex justify-center text-center items-center gap-10 h-3/6 mt-7 bg-bio-contraste/25 p-10">
			<div className="flex flex-col items-center gap-2">
				<img
					className="w-20 object-cover"
					src="/assets/logo.png"
					alt="Logo de livraison"
				/>
				<h3 className="text-lg font-bold uppercase">
					Livraison gratuite
				</h3>
				<p>à Dakar dès 20 000 FCFA</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<img
					className="w-20 object-cover"
					src="/assets/logo.png"
					alt="Logo de sécu"
				/>
				<h3 className="text-lg font-bold uppercase">
					Paiements sécurisés
				</h3>
				<p>Orange Money / Wave / Free Money / Livraison</p>
			</div>
		</div>
	);
}
