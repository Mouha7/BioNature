import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize({ imgSrc }: { readonly imgSrc: string }) {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full px-2 sm:px-4 md:px-6 lg:px-12 max-w-screen-xl mx-auto"
		>
			<CarouselContent className="-ml-2 sm:-ml-4">
				{Array.from({ length: 10 }).map((_, index) => (
					<CarouselItem
						key={index}
						className="pl-2 sm:pl-4 basis-3/4 xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
					>
						<div className="p-0.5 sm:p-1">
							<Card className="overflow-hidden">
								<CardContent className="flex aspect-square items-center justify-center p-1 sm:p-2 md:p-4 lg:p-6">
									<img
										className="w-full h-auto max-w-full sm:max-w-[250px] object-cover"
										src={imgSrc}
										alt={`Image carousel ${index + 1}`}
										loading="lazy"
									/>
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