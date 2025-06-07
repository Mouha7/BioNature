import { NavLink } from "react-router-dom";
import { Cart } from "./CartCustom";
import { FaUser } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
    // Classe responsive pour le menu hamburger
    const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "font-bold text-bio-contraste border-b-2 border-bio-contraste transition-colors duration-200 px-2 py-1.5 md:px-3 md:py-2"
            : "font-medium hover:text-bio-contraste/80 hover:border-b-2 hover:border-bio-contraste transition-colors duration-200 px-2 py-1.5 md:px-3 md:py-2";

    // Détecter le scroll pour appliquer l'ombre
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setHasScrolled(scrollTop > 10);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Ferme le menu si l'écran devient plus grand que md ou si on clique en dehors
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Empêcher le défilement du body quand le menu est ouvert sur mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header className={`sticky top-0 z-50 bg-bio/80 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-14 py-2 md:py-3 transition-shadow duration-300 ${
            hasScrolled ? 'shadow-md' : 'shadow-none'
        }`}>
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <div className="relative z-20">
                    <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                        <img
                            className="w-12 sm:w-14 md:w-16 h-auto"
                            src="/assets/logo.png"
                            alt="Logo BioNature"
                        />
                    </NavLink>
                </div>

                {/* Navigation desktop - version simplifiée et distincte */}
                <div className="hidden md:block z-20">
                    <nav className="container mx-auto">
                        <ul className="flex items-center space-x-1 lg:space-x-3">
                            <li>
                                <NavLink
                                    to="/"
                                    className={navLinkStyles}
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/catalogue/gamme-jus"
                                    className={navLinkStyles}
                                >
                                    Nos produits
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/fruits"
                                    className={navLinkStyles}
                                >
                                    Nos fruits
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/notre-histoire"
                                    className={navLinkStyles}
                                >
                                    Notre histoire
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={navLinkStyles}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Navigation mobile - indépendante du menu desktop */}
                {isOpen && (
                    <div 
                        ref={menuRef}
                        className="fixed inset-0 top-0 bg-bio z-50 md:hidden"
                    >
                        <div className="flex justify-between items-center px-4 py-2 md:py-3">
                            <NavLink to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                                <img
                                    className="w-12 sm:w-14 h-auto"
                                    src="/assets/logo.png"
                                    alt="Logo BioNature"
                                />
                            </NavLink>
                            <button
                                className="flex items-center cursor-pointer justify-center w-10 h-10"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fermer le menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-bio-contraste"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="container mx-auto h-full">
                            <ul className="w-screen h-screen flex flex-col space-y-6 text-bio-contraste bg-bio px-6 pt-6">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="block text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Accueil
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/catalogue/gamme-jus"
                                        className="block text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Nos produits
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/fruits"
                                        className="block text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Nos fruits
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/notre-histoire"
                                        className="block text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Notre histoire
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className="block text-lg font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                
                                {/* Bouton de connexion mobile */}
                                <li className="mt-8">
                                    <NavLink
                                        to="/login"
                                        className="flex items-center justify-center gap-2 bg-bio-text-bio-contraste text-[#fdf8e3] font-semibold py-3 px-6 rounded-md w-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FaUser />
                                        <span>Se connecter</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* Icônes utilisateur, panier et menu hamburger */}
                <div className="flex items-center gap-3 sm:gap-5 relative z-20">
                    <NavLink
                        to="/login"
                        className="hidden md:flex hover:text-bio-contraste transition-colors text-lg"
                        title="Mon compte"
                    >
                        <FaUser />
                    </NavLink>
                    <Cart />
                    <button
                        className="md:hidden flex items-center cursor-pointer justify-center w-8 h-8 bg-bio-contraste/20 rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Menu principal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
