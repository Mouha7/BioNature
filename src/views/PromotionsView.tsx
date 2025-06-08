import { useState } from "react";
import { Link } from "react-router-dom";
import { Juices } from "../constants/Juices";
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbList, 
    BreadcrumbPage, 
    BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { motion } from "framer-motion";

// Type pour les produits en promotion
type PromotionType = "date-courte" | "soldes" | "nouveaux-clients";

export function PromotionsView() {
    // État pour filtrer par type de promotion
    const [selectedPromoType, setSelectedPromoType] = useState<PromotionType | null>(null);
    
    // Filtrer les jus en promotion (avec discount > 0)
    const discountedProducts = Juices.filter(juice => juice.discount && juice.discount > 0);
    
    // Simuler différents types de promotions pour l'exemple
    const shortDateProducts = discountedProducts.slice(0, Math.ceil(discountedProducts.length / 2))
        .map(product => ({ ...product, promoType: "date-courte" as PromotionType }));
    
    const salesProducts = discountedProducts.slice(Math.ceil(discountedProducts.length / 2))
        .map(product => ({ ...product, promoType: "soldes" as PromotionType }));
    
    // Mélanger quelques produits comme "nouveaux clients"
    const newClientProducts = [...discountedProducts]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map(product => ({ ...product, promoType: "nouveaux-clients" as PromotionType }));
    
    // Combiner tous les produits en promotion
    const allPromotions = [...shortDateProducts, ...salesProducts, ...newClientProducts];
    
    // Filtrer les produits selon le type de promotion sélectionné
    const filteredPromotions = selectedPromoType 
        ? allPromotions.filter(product => product.promoType === selectedPromoType)
        : allPromotions;
    
    // Animation pour les éléments qui apparaissent
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="flex flex-col w-full justify-center items-center min-h-screen">
            {/* Bannière de la page */}
            <div className="w-full bg-bio-contraste/10 py-8 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bio-contraste text-center mb-2 sm:mb-4">
                        Nos promotions et offres spéciales
                    </h1>
                    <p className="text-center text-bio-contraste/80 max-w-2xl mx-auto text-sm sm:text-base">
                        Découvrez nos produits à prix réduits, nos offres anti-gaspillage à date courte et nos promotions exclusives.
                    </p>
                </div>
            </div>
            
            {/* Fil d'ariane */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/" className="text-bio-contraste/70 hover:text-bio-contraste">
                                Accueil
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <Slash className="text-bio-contraste/50" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium text-bio-contraste">
                                Promotions
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            
            {/* Contenu principal */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filtres par type de promotion */}
                <div className="mb-8 flex flex-wrap items-center gap-3 justify-center">
                    <button 
                        onClick={() => setSelectedPromoType(null)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            selectedPromoType === null 
                                ? 'bg-bio-contraste text-bio' 
                                : 'bg-bio-contraste/10 text-bio-contraste hover:bg-bio-contraste/20'
                        }`}
                    >
                        Toutes les promotions
                    </button>
                    <button 
                        onClick={() => setSelectedPromoType("date-courte")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            selectedPromoType === "date-courte" 
                                ? 'bg-bio-contraste text-bio' 
                                : 'bg-bio-contraste/10 text-bio-contraste hover:bg-bio-contraste/20'
                        }`}
                    >
                        Anti-gaspillage (date courte)
                    </button>
                    <button 
                        onClick={() => setSelectedPromoType("soldes")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            selectedPromoType === "soldes" 
                                ? 'bg-bio-contraste text-bio' 
                                : 'bg-bio-contraste/10 text-bio-contraste hover:bg-bio-contraste/20'
                        }`}
                    >
                        Soldes
                    </button>
                    <button 
                        onClick={() => setSelectedPromoType("nouveaux-clients")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            selectedPromoType === "nouveaux-clients" 
                                ? 'bg-bio-contraste text-bio' 
                                : 'bg-bio-contraste/10 text-bio-contraste hover:bg-bio-contraste/20'
                        }`}
                    >
                        Offres nouveaux clients
                    </button>
                </div>
                
                {/* Message si aucun produit */}
                {filteredPromotions.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-bio-contraste/70 text-lg">
                            Aucune promotion disponible dans cette catégorie pour le moment.
                        </p>
                    </div>
                )}
                
                {/* Grille de produits */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredPromotions.map((product, index) => {
                        const numericPrice = parseInt(product.prix.replace(/\D/g, "")) || 0;
                        const discountedPrice = product.discount 
                            ? Math.round(numericPrice * (1 - product.discount / 100)) 
                            : numericPrice;
                        
                        return (
                            <motion.div 
                                key={`${product.id}-${index}`}
                                variants={itemVariants}
                                className="rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-bio-contraste/10"
                            >
                                <Link to={`/catalogue/produit/${product.id}`} className="block h-full">
                                    {/* Badge du type de promotion */}
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 z-10">
                                            {product.promoType === "date-courte" && (
                                                <span className="bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                                                    À CONSOMMER RAPIDEMENT
                                                </span>
                                            )}
                                            {product.promoType === "soldes" && (
                                                <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                                                    SOLDES
                                                </span>
                                            )}
                                            {product.promoType === "nouveaux-clients" && (
                                                <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                                                    OFFRE BIENVENUE
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* Badge de réduction */}
                                        <span className="absolute top-3 right-3 z-10 bg-[#66441b] text-[#fdf8e3] text-xs font-semibold px-2.5 py-1 rounded-md">
                                            -{product.discount}%
                                        </span>
                                        
                                        {/* Image du produit */}
                                        <div className="h-52 sm:h-56 md:h-60 flex items-center justify-center p-4">
                                            <img 
                                                src={`/assets/${product.imageUrl}`}
                                                alt={product.title}
                                                className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Informations du produit */}
                                    <div className="p-4">
                                        {/* Catégories */}
                                        {product.category && product.category.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mb-2">
                                                {product.category.slice(0, 2).map((cat) => (
                                                    <span 
                                                        key={cat} 
                                                        className="text-xs font-medium text-bio-contraste/80 bg-bio-contraste/10 px-2 py-0.5 rounded-full"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                                {product.category.length > 2 && (
                                                    <span className="text-xs font-medium text-bio-contraste/80">
                                                        +{product.category.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        
                                        {/* Titre */}
                                        <h3 className="text-lg font-semibold text-bio-contraste line-clamp-2 mb-2">
                                            {product.title}
                                        </h3>
                                        
                                        {/* Date de consommation (simulée pour date courte) */}
                                        {product.promoType === "date-courte" && (
                                            <p className="text-amber-500 text-xs font-medium mb-2">
                                                DLC : {new Date(
                                                    Date.now() + Math.random() * 10 * 24 * 60 * 60 * 1000
                                                ).toLocaleDateString('fr-FR')}
                                            </p>
                                        )}
                                        
                                        {/* Prix */}
                                        <div className="flex items-end gap-2">
                                            <span className="text-sm line-through text-bio-contraste/70">
                                                {product.prix}
                                            </span>
                                            <span className="text-xl font-bold text-bio-contraste">
                                                {discountedPrice} FCFA
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            
            {/* Bannière informative */}
            <div className="w-full bg-bio/30 py-8 sm:py-10 mt-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="bg-bio-contraste rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-bio" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">Date de consommation courte</h3>
                        <p className="text-sm text-bio-contraste/80 text-center md:text-left">
                            Nos produits à date courte sont parfaitement consommables et vous permettent de réaliser des économies tout en luttant contre le gaspillage.
                        </p>
                    </div>
                    
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="bg-bio-contraste rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-bio" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">Économies garanties</h3>
                        <p className="text-sm text-bio-contraste/80 text-center md:text-left">
                            Profitez de réductions importantes sur nos produits de qualité, tout en conservant le même goût et les mêmes bienfaits nutritionnels.
                        </p>
                    </div>
                    
                    <div className="md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="bg-bio-contraste rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-bio" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">Alertes promotions</h3>
                        <p className="text-sm text-bio-contraste/80 text-center md:text-left">
                            Inscrivez-vous à notre newsletter pour être informé en priorité de nos offres spéciales et promotions exclusives.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold text-bio-contraste text-center mb-6">
                    Questions fréquentes sur nos promotions
                </h2>
                
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">
                            Que signifie "date de consommation courte" ?
                        </h3>
                        <p className="text-sm text-bio-contraste/80">
                            Ce sont des produits dont la date de péremption approche mais qui sont parfaitement consommables. Nous les proposons à prix réduit pour éviter le gaspillage.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">
                            Les produits en promotion sont-ils de qualité inférieure ?
                        </h3>
                        <p className="text-sm text-bio-contraste/80">
                            Absolument pas ! Tous nos produits en promotion répondent aux mêmes standards de qualité que notre gamme régulière. Seul le prix change.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">
                            Puis-je cumuler plusieurs offres promotionnelles ?
                        </h3>
                        <p className="text-sm text-bio-contraste/80">
                            Certaines promotions sont cumulables, d'autres non. Cette information est clairement indiquée sur la page de chaque produit concerné.
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-bio-contraste mb-2">
                            Comment être informé des nouvelles promotions ?
                        </h3>
                        <p className="text-sm text-bio-contraste/80">
                            Inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux pour être informé en temps réel des nouvelles offres promotionnelles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}