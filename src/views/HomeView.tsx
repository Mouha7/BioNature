import { BtnCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { BannerProduct } from "./components/BannerProduct";
import { Link } from "react-router-dom";

export function HomeView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <div className="lg-fully-style fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg">
                <div className="flex flex-col items-center justify-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center">
                        BIENVENUE CHEZ BIONATURE
                    </h1>
                    <BtnCustom to="/catalogue/gamme-jus" text="Miam, je commande !" className="mt-2 sm:mt-4" />
                </div>
            </div>

            {/* Section Histoire */}
            <div className="lg-fully-style fully-style flex flex-col items-center gap-4 sm:gap-5 md:gap-8 w-full mb-6 sm:mb-8 md:mb-10 mt-8 md:mt-16 bg-bio-contraste/5 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
                <h2 className="my-2 sm:my-3 md:my-4 text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
                    BioNature, une histoire de famille Africaine
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 w-full">
                    {/* Carte Sénégal */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 p-3 sm:p-4 md:p-5 w-full bg-white/40 rounded-lg shadow-sm">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Drapeau du Sénégal"
                            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full"
                        />
                        <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-center">Sénégal</p>
                        <p className="text-sm md:text-base text-center">
                            BioNature est une entreprise familiale qui se
                            consacre à la production de jus de fruits naturels
                            et de boissons saines. Nous croyons en la puissance
                            des ingrédients naturels pour nourrir le corps et
                            l'esprit.
                        </p>
                    </div>
                    
                    {/* Carte BioNature */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 p-3 sm:p-4 md:p-5 w-full bg-white/40 rounded-lg shadow-sm">
                        <img
                            src="/assets/logo.png"
                            alt="Logo BioNature"
                            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full"
                        />
                        <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-center">
                            BioNature
                        </p>
                        <p className="text-sm md:text-base text-center">
                            BioNature est née pour valoriser les fruits
                            tropicaux sous-exploités du Sénégal en créant une
                            chaîne de valeur inclusive et équitable. Elle vise à
                            transformer ces ressources en produits naturels et
                            nutritifs tout en soutenant les producteurs locaux
                            avec des pratiques durables.
                        </p>
                    </div>
                    
                    {/* Carte Numéro Un */}
                    <div className="flex flex-col items-center gap-3 md:gap-4 p-3 sm:p-4 md:p-5 w-full bg-white/40 rounded-lg shadow-sm">
                        <img
                            src="/assets/top-one.png"
                            alt="Top One"
                            className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-full"
                        />
                        <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-center">
                            Numéro Un Mondial
                        </p>
                        <p className="text-sm md:text-base text-center">
                            Faire de BioNature le numéro un mondial, en alliant
                            excellence, impact durable et innovation au service
                            de tous.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Nos Produits */}
            <div className="flex flex-col gap-4 w-full my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-8">
                <div className="text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-3 sm:mb-4">Nos produits</h2>
                    <p className="w-full md:max-w-3xl text-sm md:text-base mb-4 sm:mb-6 md:mb-8">
                        Pour toutes les envies, tous les âges et tous les moments de
                        la journée, il y a toujours un produit BioNature fait pour
                        vous. Le plaisir des fruits tropicaux sous toutes leurs
                        formes, à savourer en solo, en famille ou avec vos proches,
                        tout en respectant la nature et les producteurs locaux.
                    </p>
                </div>
                <BannerProduct />
            </div>

            {/* Section Anti-gaspillage */}
            <div className="flex flex-col gap-4 w-full my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-8 bg-bio/30 py-6 sm:py-8 md:py-10">
                <div className="text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-3 sm:mb-4">
                        Agissons ensemble contre le gaspillage !
                    </h2>
                    <p className="w-full md:max-w-3xl text-sm md:text-base mb-4 sm:mb-6">
                        Chez BioNature, nous essayons de lutter contre le gaspillage
                        alimentaire à notre échelle. C'est pourquoi, nous vous
                        proposons nos produits à date de consommation courte. Tout
                        aussi bon et qualitatif mais à consommer rapidement.
                    </p>
                </div>
                
                {/* Produits anti-gaspillage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-6">
                    {/* Produit 1 */}
                    <Link 
                        to="/catalogue/produit/juice-orange-1" 
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-bio-contraste/10"
                    >
                        <div className="relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                                    À CONSOMMER RAPIDEMENT
                                </span>
                            </div>
                            
                            {/* Badge de réduction */}
                            <span className="absolute top-3 right-3 z-10 bg-[#66441b] text-[#fdf8e3] text-xs font-semibold px-2.5 py-1 rounded-md">
                                -33%
                            </span>
                            
                            {/* Image du produit */}
                            <div className="h-48 sm:h-52 md:h-56 flex items-center justify-center p-4">
                                <img
                                    className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                                    src="/assets/Orange.png"
                                    alt="Orange Juice"
                                />
                            </div>
                        </div>
                        
                        {/* Informations du produit */}
                        <div className="p-4">
                            <div className="flex flex-wrap gap-1.5 mb-2">
                                <span className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full">
                                    Jus
                                </span>
                                <span className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full">
                                    Orange
                                </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-bio-contraste line-clamp-2 mb-2">
                                Jus d'orange pressée
                            </h3>
                            
                            <p className="text-amber-500 text-xs font-medium mb-2">
                                DLC : 28/05/25
                            </p>
                            
                            <div className="flex items-end gap-2">
                                <span className="text-sm line-through text-bio-contraste/70">
                                    1500 FCFA
                                </span>
                                <span className="text-xl font-bold text-bio-contraste">
                                    1000 FCFA
                                </span>
                            </div>
                        </div>
                    </Link>
                    
                    {/* Produit 2 */}
                    <Link 
                        to="catalogue/produit/juice-ananas-1" 
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-bio-contraste/10"
                    >
                        <div className="relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                                    SOLDES
                                </span>
                            </div>
                            
                            {/* Badge de réduction */}
                            <span className="absolute top-3 right-3 z-10 bg-[#66441b] text-[#fdf8e3] text-xs font-semibold px-2.5 py-1 rounded-md">
                                -25%
                            </span>
                            
                            {/* Image du produit */}
                            <div className="h-48 sm:h-52 md:h-56 flex items-center justify-center p-4">
                                <img
                                    className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                                    src="/assets/jus_ananas.png"
                                    alt="Ananas Juice"
                                />
                            </div>
                        </div>
                        
                        {/* Informations du produit */}
                        <div className="p-4">
                            <div className="flex flex-wrap gap-1.5 mb-2">
                                <span className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full">
                                    Jus
                                </span>
                                <span className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full">
                                    Ananas
                                </span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-bio-contraste line-clamp-2 mb-2">
                                Jus d'ananas bio
                            </h3>
                            
                            <div className="flex items-end gap-2">
                                <span className="text-sm line-through text-bio-contraste/70">
                                    1500 FCFA
                                </span>
                                <span className="text-xl font-bold text-bio-contraste">
                                    1125 FCFA
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
                
                {/* Bouton */}
                <div className="flex justify-center sm:justify-start mt-4 sm:mt-6">
                    <BtnCustom
                        to="/promotions"
                        text="Toutes nos promotions à date courte"
                        className="text-xs sm:text-sm md:text-base"
                    />
                </div>
            </div>

            {/* Section #Merci Les Fruits */}
            <div className="flex flex-col gap-4 w-full my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center mb-3 sm:mb-5">
                    #Merci Les Fruits
                </h2>
                <div className="flex w-full justify-center">
                    <CarouselSize />
                </div>
            </div>

            {/* Section Magasin */}
            <div className="lg-fully-style fully-style flex flex-col gap-3 sm:gap-4 md:gap-5 w-full my-6 sm:my-8 md:my-10 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 bg-bio-contraste/5">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold uppercase mb-3 sm:mb-4">
                    Bienvenue dans le plus grand magasin BioNature du Sénégal !
                </h2>
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-xl mx-auto">
                    <p className="text-center text-sm md:text-base font-medium">
                        Tous les avantages de notre eshop en un clin d'oeil :
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
                        <div className="flex items-center bg-white/60 rounded-lg p-3 sm:p-4">
                            <div className="flex-shrink-0 mr-3">
                                <svg className="w-5 h-5 text-bio-contraste" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <p className="text-sm md:text-base">
                                Retrouvez notre <strong>assortiment complet</strong>
                            </p>
                        </div>
                        <div className="flex items-center bg-white/60 rounded-lg p-3 sm:p-4">
                            <div className="flex-shrink-0 mr-3">
                                <svg className="w-5 h-5 text-bio-contraste" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <p className="text-sm md:text-base">
                                Profitez de l'<strong>envoi gratuit en Dakar</strong> à partir de 20 000 FCFA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
