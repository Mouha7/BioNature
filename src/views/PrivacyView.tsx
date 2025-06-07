export function PrivacyView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="fully-style lg-fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[400px] h-[300px] shadow-lg">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center">
                        Politique de confidentialité
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-10 md:py-12">
                <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                    <p className="mb-6">
                        <strong>Dernière mise à jour :</strong> 6 juin 2025
                    </p>
                    
                    <h2>Introduction</h2>
                    <p>
                        BioNature s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons, et protégeons vos informations lorsque vous visitez notre site web et utilisez nos services.
                    </p>

                    <h2>Collecte d'informations</h2>
                    <p>
                        Nous collectons les types d'informations suivants :
                    </p>
                    <ul>
                        <li>
                            <strong>Informations personnelles :</strong> Nom, adresse e-mail, numéro de téléphone, adresse postale, et informations de paiement lorsque vous créez un compte, passez une commande, ou nous contactez.
                        </li>
                        <li>
                            <strong>Informations d'utilisation :</strong> Données sur la façon dont vous interagissez avec notre site web, comme les pages visitées et les produits consultés.
                        </li>
                        <li>
                            <strong>Informations techniques :</strong> Adresse IP, type d'appareil, navigateur web, et système d'exploitation.
                        </li>
                    </ul>

                    <h2>Utilisation des informations</h2>
                    <p>
                        Nous utilisons vos informations pour :
                    </p>
                    <ul>
                        <li>Traiter et livrer vos commandes</li>
                        <li>Gérer votre compte</li>
                        <li>Améliorer notre site web et nos services</li>
                        <li>Communiquer avec vous concernant nos produits, services et promotions</li>
                        <li>Répondre à vos questions et demandes</li>
                    </ul>

                    <h2>Partage d'informations</h2>
                    <p>
                        Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :
                    </p>
                    <ul>
                        <li>Nos prestataires de services qui nous aident à exploiter notre entreprise</li>
                        <li>Les autorités légales lorsque la loi l'exige</li>
                    </ul>

                    <h2>Sécurité des données</h2>
                    <p>
                        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre toute perte, utilisation abusive ou accès non autorisé. Néanmoins, aucun système n'est totalement sécurisé et nous ne pouvons garantir la sécurité absolue de vos informations.
                    </p>

                    <h2>Cookies et technologies similaires</h2>
                    <p>
                        Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre site web, analyser l'utilisation du site et personnaliser le contenu. Vous pouvez contrôler l'utilisation des cookies dans les paramètres de votre navigateur.
                    </p>

                    <h2>Vos droits</h2>
                    <p>
                        Vous avez le droit de :
                    </p>
                    <ul>
                        <li>Accéder aux informations personnelles que nous détenons sur vous</li>
                        <li>Corriger toute information inexacte</li>
                        <li>Demander la suppression de vos informations</li>
                        <li>Vous opposer au traitement de vos informations</li>
                        <li>Demander la limitation du traitement de vos informations</li>
                    </ul>

                    <h2>Modifications de la politique de confidentialité</h2>
                    <p>
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
                    </p>

                    <h2>Contactez-nous</h2>
                    <p>
                        Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à l'adresse suivante : bionature@gmail.com ou par téléphone au (221) 77 000 00 00.
                    </p>
                </div>
            </div>
        </div>
    );
}