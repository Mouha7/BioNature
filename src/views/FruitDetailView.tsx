import { Fruits } from "@/constants/Fruits";
import { useParams } from "react-router-dom";

export function FruitDetailView() {
    const { type } = useParams();
    const fruitDetails = Fruits.find((fruit) => fruit.type === type)?.sections;

    if (!fruitDetails) {
        return (
            <div className="flex flex-col min-h-[50vh] justify-center items-center px-4 sm:px-6 md:px-8 py-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Fruit non trouvé</h2>
                <p className="text-sm sm:text-base text-center max-w-md">
                    Le fruit que vous recherchez n'existe pas dans notre
                    catalogue.
                </p>
            </div>
        );
    }

    // Transformer les données de s02 en un format itérable similaire à FruitQualityText
    const sectionItems = [
        {
            img: {
                src: fruitDetails.s02.s02_1.src,
                alt: fruitDetails.s02.s02_1.title
            },
            section: {
                title: fruitDetails.s02.s02_1.title,
                text: [fruitDetails.s02.s02_1.text],
                className: "w-full lg:w-1/2 lg:pl-6 xl:pl-12 space-y-3 sm:space-y-4 md:space-y-6"
            }
        },
        {
            img: {
                src: fruitDetails.s02.s02_2.src,
                alt: fruitDetails.s02.s02_2.title
            },
            section: {
                title: fruitDetails.s02.s02_2.title,
                text: [fruitDetails.s02.s02_2.text],
                className: "w-full lg:w-1/2 lg:pr-6 xl:pr-12 space-y-3 sm:space-y-4 md:space-y-6"
            }
        },
        {
            img: {
                src: fruitDetails.s02.s02_3.src,
                alt: fruitDetails.s02.s02_3.title
            },
            section: {
                title: fruitDetails.s02.s02_3.title,
                text: [fruitDetails.s02.s02_3.text],
                className: "w-full lg:w-1/2 lg:pl-6 xl:pl-12 space-y-3 sm:space-y-4 md:space-y-6"
            }
        }
    ];

    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière avec image de fond responsive */}
            <div
                className="fully-style bg-cover bg-center bg-no-repeat h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[570px] shadow-lg w-full"
                style={{ backgroundImage: `url(${fruitDetails.s01.src})` }}
            >
                <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 h-full bg-black/50 text-white p-4 sm:p-6 md:p-8">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center">
                        {fruitDetails.s01.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                        {fruitDetails.s01.text}
                    </p>
                </div>
            </div>

            {/* Contenu principal - Sections de fruits */}
            <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-8 my-4 sm:my-5 md:my-7 px-4 sm:px-6 md:px-8 lg:px-14 max-w-7xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase self-start text-bio-contraste">
                    {fruitDetails.s02.title}
                </h2>

                {/* Générer dynamiquement les sections comme dans FruitView.tsx */}
                {sectionItems.map((item, index) => {
                    const isLastItem = index === sectionItems.length - 1;
                    const borderClass = isLastItem ? "" : "border-b border-bio-contraste/10";
                    
                    return index % 2 === 0 ? (
                        <div
                            key={`section-${index}`}
                            className={`flex lg:flex-row flex-col md:items-center md:py-16 py-5 ${borderClass} gap-4 sm:gap-6 lg:gap-10`}
                        >
                            <div className="w-full lg:w-1/2 lg:pr-6 xl:pr-12 mb-4 lg:mb-0">
                                <img
                                    src={item.img.src}
                                    alt={item.img.alt}
                                    loading="lazy"
                                    className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
                                />
                            </div>
                            <div className={item.section.className}>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-bio-contraste">
                                    {item.section.title}
                                </h3>
                                {item.section.text.map((text, textIndex) => (
                                    <p 
                                        key={`section-${index}-text-${textIndex}`}
                                        className="text-sm sm:text-base md:text-lg text-bio-contraste/90"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div
                            key={`section-${index}`}
                            className={`flex lg:flex-row-reverse flex-col md:items-center md:py-16 py-5 ${borderClass} gap-4 sm:gap-6 lg:gap-10`}
                        >
                            <div className="w-full lg:w-1/2 lg:pl-6 xl:pl-12 mb-4 lg:mb-0">
                                <img
                                    src={item.img.src}
                                    alt={item.img.alt}
                                    loading="lazy"
                                    className="w-full h-auto aspect-[4/3] rounded-lg shadow-md object-cover"
                                />
                            </div>
                            <div className={item.section.className}>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-bio-contraste">
                                    {item.section.title}
                                </h3>
                                {item.section.text.map((text, textIndex) => (
                                    <p 
                                        key={`section-${index}-text-${textIndex}`}
                                        className="text-sm sm:text-base md:text-lg text-bio-contraste/90"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
