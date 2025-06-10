import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Contrôle la visibilité du bouton en fonction du défilement
    useEffect(() => {
        const toggleVisibility = () => {
            // Affiche le bouton après 100px de défilement
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Remonter automatiquement en haut lors des changements de page
    useEffect(() => {
        // Utiliser setTimeout pour s'assurer que cela se produit après le rendu
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "instant", // "instant" pour un défilement immédiat, sans animation
            });
        }, 0);
    }, [pathname]);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50
                    bg-bio-contraste text-bio rounded-full p-2.5 sm:p-3 md:p-3.5
                    shadow-lg hover:bg-bio-contraste/90 transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-bio-contraste/50
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                    flex items-center justify-center"
                    aria-label="Retour en haut"
                >
                    <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                </button>
            )}
        </>
    );
}