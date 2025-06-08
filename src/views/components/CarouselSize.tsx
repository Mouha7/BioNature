import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Définir les images à afficher dans le carousel
const carouselImages = [
	{ src: "/assets/Orange.png", alt: "Jus d'orange" },
	{ src: "/assets/confiture_mangue.png", alt: "Confiture de mangue" },
	{ src: "/assets/jus_ananas.png", alt: "Jus d'ananas" },
	{ src: "/assets/jus_banane.png", alt: "Jus de banane" },
	{ src: "/assets/jus_bissap.png", alt: "Jus de bissap" },
	{ src: "/assets/jus_mada.png", alt: "Jus de madd" },
	{ src: "/assets/jus_mangue.png", alt: "Jus de mangue" },
];

export function CarouselSize() {
	const [shuffledImages, setShuffledImages] = useState(carouselImages);

	// Mélanger les images au chargement du composant pour plus de variété
	useEffect(() => {
		const shuffled = [...carouselImages].sort(() => Math.random() - 0.5);
		setShuffledImages(shuffled);
	}, []);

	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full px-2 sm:px-4 md:px-6 lg:px-12 max-w-screen-xl mx-auto"
		>
			<CarouselContent className="-ml-2 sm:-ml-4">
				{shuffledImages.map((image, index) => (
					<CarouselItem
						key={index}
						className="pl-2 sm:pl-4 basis-3/4 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
					>
						<div className="p-0.5 sm:p-1">
							<Card className="overflow-hidden">
								<CardContent className="flex aspect-square items-center justify-center p-1 sm:p-2 md:p-4 lg:p-6">
									{/* Conteneur à ratio d'aspect fixe */}
									<div className="relative w-full h-full flex items-center justify-center">
										<img
											className="max-w-full max-h-full object-contain"
											src={image.src}
											alt={image.alt}
											loading="lazy"
										/>
									</div>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="hidden sm:block">
				<CarouselPrevious className="left-0 sm:-left-4 md:-left-6 lg:-left-10" />
				<CarouselNext className="right-0 sm:-right-4 md:-right-6 lg:-right-10" />
			</div>
		</Carousel>
	);
}