export function EngagementView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="fully-style lg-fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[570px] h-[400px] shadow-lg">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center">
                        Nos engagements
                    </h1>
                    <p className="text-sm md:text-base text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                        Nous avons à cœur de tracer la voie d'un avenir durable
                        pour les générations à venir. Nous respectons autant
                        l'environnement que les producteurs avec qui nous
                        travaillons. Et bien sûr, les familles belges qui nous
                        font confiance.
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 md:gap-5 my-5 md:my-7 px-4 sm:px-6 md:px-8 lg:px-14 w-full">
                {/* Premier bloc */}
                <div className="flex flex-col md:flex-row items-center py-6 md:py-10 lg:py-16 w-full">
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
                            Un avenir durable, pour tous
                        </h3>
                        <p className="text-sm md:text-base">
                            Chez BioNature, nous sommes convaincus que la
                            valorisation des ressources locales est la clé d'un
                            avenir durable. Nous respectons autant la nature qui
                            nous offre ses fruits que les producteurs et les
                            familles sénégalaises qui nous font confiance au
                            quotidien.
                        </p>
                    </div>
                </div>

                {/* Deuxième bloc - inversé sur desktop */}
                <div className="flex flex-col md:flex-row-reverse items-center py-6 md:py-10 lg:py-16 w-full border-t border-bio-contraste/10">
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Article Fruit"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">
                            Réduire notre impact environnemental
                        </h3>
                        <p className="text-sm md:text-base">
                            La nature nous offre ses plus beaux trésors, et il
                            est de notre responsabilité de protéger cet
                            équilibre.
                            <br className="hidden md:block" />
                            <br className="hidden md:block" />
                            Ainsi, notre unité de transformation à Ziguinchor a
                            été pensée pour minimiser son impact écologique.
                            Depuis son ouverture en 2026, nous avons réduit de
                            manière significative notre consommation d'énergie
                            grâce à des équipements modernes et économes.
                            <br className="hidden md:block" />
                            <br className="hidden md:block" />
                            Nous avons également mis en place une politique
                            proactive de gestion des déchets : 85% de nos
                            déchets sont revalorisés, et un système interne nous
                            permet de traiter nos eaux usées de manière durable.
                            De plus, une grande partie de nos emballages sont
                            conçus pour être recyclables, en accord avec notre
                            vision écologique.
                        </p>
                    </div>
                </div>

                {/* Troisième bloc */}
                <div className="flex flex-col md:flex-row items-center py-6 md:py-10 lg:py-16 w-full border-t border-bio-contraste/10">
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Article Fruits"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">
                            Valoriser les ressources locales et internationales
                            de manière responsable
                        </h3>
                        <p className="text-sm md:text-base">
                            BioNature est fière de collaborer avec des
                            producteurs locaux sénégalais, favorisant ainsi une
                            économie circulaire et durable. Nos mangues, ananas
                            et citrons proviennent principalement de Casamance
                            et de Thiès, avec des méthodes de culture
                            respectueuses de l'environnement.
                            <br className="hidden md:block" />
                            <br className="hidden md:block" />
                            Pour les ingrédients que nous ne pouvons trouver
                            localement, nous travaillons exclusivement avec des
                            partenaires partageant nos valeurs. Ces fournisseurs
                            respectent des cahiers des charges stricts en
                            matière de traçabilité, de qualité et de
                            responsabilité sociale.
                        </p>
                    </div>
                </div>

                {/* Quatrième bloc - inversé sur desktop */}
                <div className="flex flex-col md:flex-row-reverse items-center py-6 md:py-10 lg:py-16 w-full border-t border-bio-contraste/10">
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Article Fruit"
                            loading="lazy"
                            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4 md:space-y-6 lg:space-y-8 px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">
                            Des produits sains pour des plaisirs sains
                        </h3>
                        <p className="text-sm md:text-base">
                            Respecter la nature, c'est aussi respecter ceux qui
                            consomment nos produits. Chez BioNature, nous
                            n'ajoutons ni colorant, ni arôme artificiel à nos
                            recettes.
                            <br className="hidden md:block" />
                            <br className="hidden md:block" />
                            Nos jus sont conçus sans sucre ajouté, pour
                            préserver toute la richesse et la fraîcheur des
                            fruits tropicaux. Quant à notre gamme Bio, elle
                            respecte les normes d'agriculture biologique
                            certifiées, garantissant des produits sans pesticide
                            et en harmonie avec l'environnement.
                            <br className="hidden md:block" />
                            <br className="hidden md:block" />
                            Avec BioNature, chaque produit est une célébration
                            des fruits du Sénégal, un hommage à leur naturalité
                            et un engagement envers un avenir plus sain pour
                            tous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
