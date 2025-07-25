import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function RegisterView() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 max-w-screen-xl mx-auto">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-6 sm:p-8 md:p-10">
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                    Créer un compte
                </h1>
                
                <form className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="w-full">
                            <label htmlFor="firstname" className="text-sm font-medium mb-1 block">
                                Prénom
                            </label>
                            <Input 
                                id="firstname"
                                type="text" 
                                placeholder="Votre prénom" 
                                className="w-full"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastname" className="text-sm font-medium mb-1 block">
                                Nom
                            </label>
                            <Input 
                                id="lastname"
                                type="text" 
                                placeholder="Votre nom" 
                                className="w-full" 
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="w-full">
                            <label htmlFor="address" className="text-sm font-medium mb-1 block">
                                Rue/Quartier
                            </label>
                            <Input 
                                id="address"
                                type="text" 
                                placeholder="Votre adresse" 
                                className="w-full" 
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="city" className="text-sm font-medium mb-1 block">
                                Ville
                            </label>
                            <Input 
                                id="city"
                                type="text" 
                                placeholder="Votre ville" 
                                className="w-full" 
                            />
                        </div>
                    </div>
                    
                    <div className="w-full">
                        <label htmlFor="email" className="text-sm font-medium mb-1 block">
                            Email
                        </label>
                        <Input 
                            id="email"
                            type="email" 
                            placeholder="votre-email@exemple.com" 
                            className="w-full"
                        />
                    </div>
                    
                    <div className="w-full">
                        <label htmlFor="password" className="text-sm font-medium mb-1 block">
                            Mot de passe
                        </label>
                        <Input 
                            id="password"
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full"
                        />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-4">
                        <p className="text-sm">
                            Avez-vous déjà un compte?{" "}
                            <Link
                                to="/login"
                                className="text-bio-contraste font-semibold hover:underline transition-colors"
                            >
                                Connectez-vous
                            </Link>
                        </p>
                        
                        <button 
                            type="submit"
                            className="bg-bio-contraste text-bio font-semibold py-2.5 px-6 rounded-md hover:bg-bio-contraste/90 transition-colors duration-200 w-full sm:w-auto"
                        >
                            Créer mon compte
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
