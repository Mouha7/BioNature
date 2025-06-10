import { Histoires } from "@/constants/Histoires";

export function HistoireView() {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			{/* Section bannière responsive */}
			<div className="fully-style bg-cover bg-center bg-[url('/assets/history.png')] bg-no-repeat h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[570px] shadow-lg">
				<div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 h-full bg-black/25 text-white p-4 sm:p-5 md:p-6 lg:p-8">
					<h1 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center">
						BioNature, une histoire enracinée dans la nature
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
						Depuis sa création, BioNature met la richesse des fruits
						tropicaux au service du bien-être et du plaisir pour
						toute la famille.
					</p>
				</div>
			</div>

			{/* Section contenu principal responsive */}
			<div className="flex flex-col items-center w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 my-4 sm:my-5 md:my-6 lg:my-8 px-4 sm:px-6 md:px-8 lg:px-14">
				<div className="w-full max-w-7xl">
					{Object.entries(Histoires).map(([key, history]) =>
						parseInt(key) % 2 === 0 ? (
							<div
								key={key}
								className="flex flex-col lg:flex-row-reverse gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:items-center py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 border-b border-bio-contraste/10 last:border-0"
							>
								<div className="w-full lg:w-1/2">
									<img
										src={history.img.src}
										alt={history.img.alt}
										loading="lazy"
										className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
									/>
								</div>
								<div
									className={`w-full lg:w-1/2 lg:pr-8 mt-4 lg:mt-0 ${history.section.className}`}
								>
									<h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-3 sm:mb-4 text-bio-contraste">
										{history.section.title}
									</h3>
									{history.section.text.map((text, index) => (
										<p
											key={`${key}-text-${index}`}
											className="mb-3 text-sm sm:text-base md:text-lg text-bio-contraste/90 leading-relaxed"
										>
											{text}
										</p>
									))}
								</div>
							</div>
						) : (
							<div
								key={key}
								className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:items-center py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 border-b border-bio-contraste/10 last:border-0"
							>
								<div className="w-full lg:w-1/2">
									<img
										src={history.img.src}
										alt={history.img.alt}
										loading="lazy"
										className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
									/>
								</div>
								<div
									className={`w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0 ${history.section.className}`}
								>
									<h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-3 sm:mb-4 text-bio-contraste">
										{history.section.title}
									</h3>
									{history.section.text.map((text, index) => (
										<p
											key={`${key}-text-${index}`}
											className="mb-3 text-sm sm:text-base md:text-lg text-bio-contraste/90 leading-relaxed"
										>
											{text}
										</p>
									))}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
