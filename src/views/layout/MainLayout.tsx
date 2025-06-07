import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function MainLayout() {
	return (
		<div className="flex flex-col h-screen bg-bio text-bio-contraste font-roboto overflow-auto">
			<Header />
			<main className="flex-grow md:py-4 lg:px-14 md:px-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
