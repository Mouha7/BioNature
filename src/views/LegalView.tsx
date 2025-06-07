export function LegalView() {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="fully-style lg-fully-style bg-cover bg-center bg-[url('/assets/bg-fruits.jpg')] bg-no-repeat md:h-[400px] h-[300px] shadow-lg">
                <div className="flex flex-col justify-center items-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-center">
                        Mentions légales
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-14 py-8 sm:py-10 md:py-12">
                <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
                    <p className="mb-6">
                        <strong>Dernière mise à jour :</strong> 6 juin 2025
                    </p>

                    <h2>Informations sur l'entreprise</h2>
                    <p>
                        <strong>Raison sociale :</strong> BioNature SARL<br />
                        <strong>Forme juridique :</strong> Société à responsabilité limitée<br />
                        <strong>Siège social :</strong> 123 Avenue de l'Agriculture, Dakar, Sénégal<br />
                        <strong>Capital social :</strong> 10 000 000 FCFA<br />
                        <strong>Immatriculation :</strong> RC-DAK-2024-B-12345<br />
                        <strong>NINEA :</strong> 12345678 9A<br />
                        <strong>TVA intracommunautaire :</strong> SN12345678901<br />
                        <strong>Téléphone :</strong> (221) 77 000 00 00<br />
                        <strong>Email :</strong> bionature@gmail.com
                    </p>

                    <h2>Direction de la publication</h2>
                    <p>
                        <strong>Directeur de la publication :</strong> Amadou Diallo<br />
                        <strong>Fonction :</strong> Président-Directeur Général<br />
                        <strong>Email :</strong> direction@bionature.sn
                    </p>

                    <h2>Hébergement</h2>
                    <p>
                        <strong>Société :</strong> CloudAfrica Hosting Services<br />
                        <strong>Adresse :</strong> 45 Avenue du Technopole, Dakar, Sénégal<br />
                        <strong>Téléphone :</strong> (221) 77 111 22 33<br />
                        <strong>Email :</strong> contact@cloudafrica.com
                    </p>

                    <h2>Propriété intellectuelle</h2>
                    <p>
                        L'ensemble des éléments figurant sur ce site (textes, images, logos, photos, vidéos, etc.) sont protégés par les dispositions du Code de la Propriété Intellectuelle. Ces éléments sont la propriété exclusive de BioNature SARL. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie des éléments du site sans l'autorisation écrite préalable de BioNature SARL est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
                    </p>

                    <h2>Données personnelles</h2>
                    <p>
                        Conformément aux dispositions de la loi sénégalaise n°2008-12 du 25 janvier 2008 sur la protection des données à caractère personnel, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour exercer ce droit, vous pouvez nous contacter par email à l'adresse suivante : bionature@gmail.com ou par courrier à l'adresse du siège social indiquée ci-dessus.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Notre site utilise des cookies pour améliorer votre expérience de navigation. En naviguant sur notre site, vous acceptez l'utilisation de ces cookies. Pour en savoir plus sur l'utilisation des cookies, vous pouvez consulter notre politique de confidentialité.
                    </p>

                    <h2>Crédits</h2>
                    <p>
                        <strong>Conception et réalisation :</strong> SMRS<br />
                        <strong>Photographies :</strong> © BioNature SARL, sauf mention contraire<br />
                        <strong>Illustrations :</strong> © BioNature SARL
                    </p>

                    <h2>Litiges</h2>
                    <p>
                        Les présentes mentions légales sont soumises à la loi sénégalaise. En cas de litige, les tribunaux de Dakar seront seuls compétents.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter à l'adresse email suivante : bionature@gmail.com ou par téléphone au (221) 77 000 00 00.
                    </p>
                </div>
            </div>
        </div>
    );
}