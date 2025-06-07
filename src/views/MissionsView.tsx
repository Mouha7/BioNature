export function MissionsView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="fully-style lg-fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[570px] h-[400px] shadow-lg">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center px-4">
                        L'ADN de BioNature : naturalité & impact local
                    </h1>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 md:gap-5 my-5 md:my-7 px-4 sm:px-6 md:px-8 lg:px-14 w-full">
                {/* Premier bloc */}
                <div className="flex flex-col md:flex-row items-center py-6 md:py-12 lg:py-16 w-full">
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Drapeau du Sénégal"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">
                            Qualité et expertise,
                            <br className="hidden sm:block" />2 mots indissociables chez BioNature
                        </h3>
                        <p className="text-sm md:text-base">
                            Depuis sa création en 2025, BioNature s'engage à
                            offrir le meilleur des fruits tropicaux du Sénégal,
                            en valorisant leur immense potentiel nutritif et
                            gustatif.
                            <br />
                            <br />
                            Pour y parvenir, nous appliquons une charte de
                            qualité stricte à chaque étape de notre processus,
                            de la sélection minutieuse des producteurs
                            sénégalais avec qui nous collaborons, à
                            l'élaboration de recettes qui respectent la
                            spécificité et la saisonnalité de chaque fruit.
                        </p>
                    </div>
                </div>

                {/* Deuxième bloc - Inversé sur mobile */}
                <div className="flex flex-col-reverse md:flex-row items-center py-6 md:py-12 lg:py-16 w-full border-t border-bio-contraste/10">
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8 mt-6 md:mt-0">
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">
                            BioNature, au cœur des communautés
                        </h3>
                        <p className="text-sm md:text-base">
                            Fidèle à notre mission, BioNature ne se limite pas à
                            transformer les fruits. Nous aspirons à être un
                            acteur engagé dans le développement du Sénégal, en
                            créant des emplois durables, en soutenant les
                            agriculteurs locaux et en adoptant des pratiques
                            respectueuses de l'environnement.
                            <br />
                            <br />
                            Nous croyons fermement que promouvoir les richesses
                            naturelles locales contribue non seulement à une
                            alimentation plus saine et durable, mais aussi à
                            renforcer les communautés qui en dépendent.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Article Fruit"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
