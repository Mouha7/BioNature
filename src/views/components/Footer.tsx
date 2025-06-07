import { SlSocialFacebook } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-bio mt-5 sm:mt-6 md:mt-7 px-3 sm:px-4 md:px-5 border-t border-bio-contraste/25">
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 md:gap-4 lg:gap-6 px-2 sm:px-4 md:px-6 lg:px-14 py-4">
                {/* Logo - masqué sur mobile et tablette */}
                <Link to="/" className="hidden lg:flex items-center w-full lg:w-auto lg:flex-shrink-0 lg:mr-8">
                    <img
                        className="w-20 md:w-24 object-contain h-auto"
                        loading="lazy"
                        src="/assets/logo.png"
                        alt="Logo Entreprise"
                    />
                </Link>

                {/* Grille de liens responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 lg:gap-6 w-full lg:flex-1">
                    {/* Colonne 1 */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-bold uppercase">BioNature</h2>
                        <NavLink to="/notre-histoire" className="text-sm sm:text-base hover:underline">
                            Notre histoire
                        </NavLink>
                        <NavLink to="/nos-missions" className="text-sm sm:text-base hover:underline">
                            Nos missions
                        </NavLink>
                        <NavLink to="/nos-engagements" className="text-sm sm:text-base hover:underline">
                            Nos engagements
                        </NavLink>
                    </div>

                    {/* Colonne 2 */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-bold uppercase">Contact</h2>
                        <NavLink to="/contact" className="text-sm sm:text-base hover:underline">
                            Formulaire de Contact
                        </NavLink>
                        <p className="text-sm sm:text-base">Téléphone: (221) 77 000 00 00</p>
                        <p className="text-sm sm:text-base">Email: bionature@gmail.com</p>
                        <div className="flex gap-3 items-center mt-1">
                            <SlSocialFacebook className="text-lg sm:text-xl" />
                            <PiTiktokLogo className="text-lg sm:text-xl" />
                            <BsInstagram className="text-lg sm:text-xl" />
                        </div>
                    </div>

                    {/* Colonne 3 */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-bold uppercase">Aide</h2>
                        <NavLink to="/politique-confidentialite" className="text-sm sm:text-base hover:underline">
                            Politique de confidentialité
                        </NavLink>
                        <NavLink to="/conditions-utilisation" className="text-sm sm:text-base hover:underline">
                            Conditions d'utilisation
                        </NavLink>
                        <NavLink to="/mentions-legales" className="text-sm sm:text-base hover:underline">
                            Mention légale
                        </NavLink>
                    </div>

                    {/* Colonne 4 */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-bold uppercase">
                            Paiement sécurisé
                        </h2>
                        <div className="flex flex-wrap gap-2 items-center">
                            <img
                                className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-gray-300 rounded object-contain"
                                src="/assets/om.jpg"
                                alt="Orange Money"
                            />
                            <img
                                className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-gray-300 rounded object-contain"
                                src="/assets/wave.jpg"
                                alt="Wave"
                            />
                            <img
                                className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-gray-300 rounded object-contain"
                                src="/assets/fm.png"
                                alt="Free Money"
                            />
                            <CiDeliveryTruck className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-gray-300 rounded p-0.5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-bio-contraste/10 mt-4 sm:mt-6">
                <p className="text-center py-2.5 text-xs sm:text-sm">
                    &copy; {new Date().getFullYear()} BioNature. Tous droits réservés.
                    Réalisation:{" "}
                    <NavLink to="" className="hover:underline">
                        SMRS
                    </NavLink>
                </p>
            </div>
        </footer>
    );
}
