import React, { createContext, useState, useContext, useEffect } from "react";

// Définir le type pour un produit
export interface CartProduct {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	quantity: number;
}

// Interface du contexte
interface CartContextType {
	cart: CartProduct[];
	addToCart: (product: Omit<CartProduct, "quantity">) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
}

// Création du contexte avec des valeurs par défaut
const CartContext = createContext<CartContextType>({
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
	clearCart: () => {},
	totalItems: 0,
	totalPrice: 0,
});

// Hook personnalisé pour utiliser le contexte
export const useCart = () => useContext(CartContext);

// Fournisseur du contexte
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cart, setCart] = useState<CartProduct[]>([]);

	// Chargement du panier depuis localStorage au démarrage
	useEffect(() => {
		const savedCart = localStorage.getItem("bionature-cart");
		if (savedCart) {
			try {
				setCart(JSON.parse(savedCart));
			} catch (error) {
				console.error("Erreur lors du chargement du panier", error);
				localStorage.removeItem("bionature-cart");
			}
		}
	}, []);

	// Sauvegarde du panier dans localStorage à chaque modification
	useEffect(() => {
		localStorage.setItem("bionature-cart", JSON.stringify(cart));
	}, [cart]);

	// Calcul du nombre total d'articles
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	// Calcul du prix total
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	// Ajouter un produit au panier
	const addToCart = (product: Omit<CartProduct, "quantity">) => {
		setCart((prevCart) => {
			const existingProduct = prevCart.find(
				(item) => item.id === product.id
			);

			if (existingProduct) {
				// Si le produit existe déjà, augmenter la quantité
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				// Sinon, ajouter le nouveau produit
				return [...prevCart, { ...product, quantity: 1 }];
			}
		});
	};

	// Retirer un produit du panier
	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	// Mettre à jour la quantité d'un produit
	const updateQuantity = (id: string, quantity: number) => {
		if (quantity <= 0) {
			removeFromCart(id);
			return;
		}

		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity } : item
			)
		);
	};

	// Vider le panier
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
