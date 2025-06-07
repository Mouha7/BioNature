import { Link } from "react-router-dom";
import { BtnCustom } from "./components/BtnCustom";
import { CarouselSize } from "./components/CarouselSize";
import { BannerProduct } from "./components/BannerProduct";

export function HomeView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="lg-fully-style fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[570px] h-[400px] shadow-lg">
                <div className="flex flex-col items-center justify-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black">
                        BIENVENUE CHEZ BIONATURE
                    </h1>
                    <BtnCustom to="" text="Miam, je commande !" />
                </div>
            </div>

            <div className="lg-fully-style fully-style flex flex-col items-center gap-3 md:gap-5 w-full mb-5 md:mb-7 mt-8 md:mt-20 bg-bio-contraste/5 px-4 md:px-6">
                <h2 className="my-3 md:my-5 text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
                    BioNature, une histoire de famille Africaine
                </h2>

                <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-4">
                    <div className="flex flex-col items-center gap-3 md:gap-5 p-3 md:p-5 w-full md:w-1/3">
                        <img
                            src="/assets/Drapeau-Senegal.webp"
                            alt="Drapeau du Sénégal"
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                        />
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">Sénégal</p>
                        <p className="text-sm md:text-base text-center">
                            BioNature est une entreprise familiale qui se
                            consacre à la production de jus de fruits naturels
                            et de boissons saines. Nous croyons en la puissance
                            des ingrédients naturels pour nourrir le corps et
                            l'esprit.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 md:gap-5 p-3 md:p-5 w-full md:w-1/3">
                        <img
                            src="/assets/logo.png"
                            alt="Logo BioNature"
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                        />
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
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
                    <div className="flex flex-col items-center gap-3 md:gap-5 p-3 md:p-5 w-full md:w-1/3">
                        <img
                            src="/assets/top-one.png"
                            alt="Top One"
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                        />
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
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

            <div className="flex flex-col gap-3 md:gap-5 w-full my-5 md:my-7 px-4 md:px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center md:text-left">Nos produits</h2>
                <p className="w-full md:w-5xl text-sm md:text-base">
                    Pour toutes les envies, tous les âges et tous les moments de
                    la journée, il y a toujours un produit BioNature fait pour
                    vous. Le plaisir des fruits tropicaux sous toutes leurs
                    formes, à savourer en solo, en famille ou avec vos proches,
                    tout en respectant la nature et les producteurs locaux.
                </p>
                <BannerProduct />
            </div>

            <div className="flex flex-col gap-3 md:gap-5 w-full my-5 md:my-7 px-4 md:px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center md:text-left">
                    Agissons ensemble contre le gaspillage !
                </h2>
                <p className="w-full md:w-5xl text-sm md:text-base">
                    Chez BioNature, nous essayons de lutter contre le gaspillage
                    alimentaire à notre échelle. C'est pourquoi, nous vous
                    proposons nos produits à date de consommation courte. Tout
                    aussi bon et qualitatif mais à consommer rapidement.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center sm:justify-start">
                    <Link to="" className="w-full sm:w-auto">
                        <div className="flex flex-col relative gap-2 md:gap-2.5 max-w-full sm:max-w-xs mx-auto sm:mx-0">
                            <span className="absolute top-12 sm:top-16 left-12 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-amber-400 text-white text-center py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base">
                                Épuisé
                            </span>
                            <img
                                className="object-cover p-3 sm:p-5 w-full"
                                src="/assets/Orange.png"
                                alt="Orange Juice"
                            />
                            <p className="font-bold text-base sm:text-lg">
                                Jus d'orange pressée - DLC 28/05/25
                            </p>
                            <p>
                                <span className="font-light line-through text-sm sm:text-base">
                                    1500 FCFA
                                </span>{" "}
                                <span className="text-amber-400 font-bold text-sm sm:text-base">
                                    1000 FCFA
                                </span>
                            </p>
                        </div>
                    </Link>
                    <Link to="" className="w-full sm:w-auto">
                        <div className="flex flex-col relative gap-2 md:gap-2.5 max-w-full sm:max-w-xs mx-auto sm:mx-0">
                            <span className="absolute top-12 sm:top-16 left-12 sm:left-16 transform -translate-x-1/2 -translate-y-1/2 w-fit bg-amber-400 text-white text-center py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base">
                                Disponible
                            </span>
                            <img
                                className="object-cover p-3 sm:p-5 w-full"
                                src="/assets/Orange.png"
                                alt="Orange Juice"
                            />
                            <p className="font-bold text-base sm:text-lg">
                                Jus d'orange pressée - DLC 28/05/25
                            </p>
                            <p>
                                <span className="font-light line-through text-sm sm:text-base">
                                    1500 FCFA
                                </span>{" "}
                                <span className="text-amber-400 font-bold text-sm sm:text-base">
                                    1000 FCFA
                                </span>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center sm:justify-start mt-2 sm:mt-0">
                    <BtnCustom
                        to=""
                        text="Toutes nos promotions à date courte"
                        className="uppercase text-sm md:text-base"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 w-full my-5 md:my-7 px-4 md:px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-center">
                    #Merci Les Fruits
                </h2>
                <div className="flex w-full justify-center">
                    <CarouselSize imgSrc="/assets/Orange.png" />
                </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 w-full my-5 md:my-7 px-4 md:px-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold uppercase">
                    Bienvenue dans le plus grand magasin BioNature du Sénégal !
                </h2>
                <p className="text-center text-sm md:text-base">
                    Tous les avantages de notre eshop en un clin d'oeil :
                </p>
                <p className="text-center text-sm md:text-base">
                    Retrouvez notre <strong>assortiment complet</strong>
                </p>
                <p className="text-center text-sm md:text-base">
                    Profitez de l'<strong>envoi gratuit en Dakar</strong> à
                    partir de 20 000 FCFA
                </p>
            </div>
        </div>
    );
}
