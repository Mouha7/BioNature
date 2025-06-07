import { Fruits } from "@/constants/Fruits";
import { useParams } from "react-router-dom";

export function FruitDetailView() {
	const { type } = useParams();
	const fruitDetails = Fruits.find((fruit) => fruit.type === type)?.sections;

	if (!fruitDetails) {
		return (
			<div className="flex flex-col h-screen">
				<h2 className="text-2xl font-bold mb-4">Fruit non trouvé</h2>
				<p>
					Le fruit que vous recherchez n'existe pas dans notre
					catalogue.
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full justify-center items-center">
			<div
				className="mt-7 bg-cover bg-center bg-no-repeat h-[570px] w-7xl shadow-lg"
				style={{ backgroundImage: `url(${fruitDetails.s01.src})` }}
			>
				<div className="flex flex-col justify-center items-center gap-5 h-full bg-black/50 text-white p-5">
					<h1 className="text-4xl font-black">
						{fruitDetails.s01.title}
					</h1>
					<p className="text-center w-[766px]">
						{fruitDetails.s01.text}
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center gap-5 my-7 px-14">
				<h2 className="text-3xl font-bold uppercase self-start">
					{fruitDetails.s02.title}
				</h2>

				<div className="flex items-center py-16">
					<img
						src={fruitDetails.s02.s02_1.src}
						alt={fruitDetails.s02.s02_1.title}
						loading="lazy"
						className="pr-40 object-cover"
					/>
					<div className="pf-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							{fruitDetails.s02.s02_1.title}
						</h3>
						<p>{fruitDetails.s02.s02_1.text}</p>
					</div>
				</div>
				<div className="flex items-center py-16">
					<div className="pr-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							{fruitDetails.s02.s02_2.title}
						</h3>
						<p>{fruitDetails.s02.s02_2.text}</p>
					</div>
					<img
						src={fruitDetails.s02.s02_2.src}
						alt={fruitDetails.s02.s02_2.title}
						loading="lazy"
						className="pf-40 object-cover"
					/>
				</div>
				<div className="flex items-center py-16">
					<img
						src={fruitDetails.s02.s02_3.src}
						alt={fruitDetails.s02.s02_3.title}
						loading="lazy"
						className="pr-40 object-cover"
					/>
					<div className="pf-40 space-y-8">
						<h3 className="text-2xl font-bold uppercase">
							{fruitDetails.s02.s02_3.title}
						</h3>
						<p>{fruitDetails.s02.s02_3.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
