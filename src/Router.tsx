import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./views/layout/MainLayout";
import { CatalogueView } from "./views/CatalogueView";
import { ClientView } from "./views/ClientView";
import { HomeView } from "./views/HomeView";
import { JusView } from "./views/JusView";
import { FruitView } from "./views/FruitView";
import { NotFoundView } from "./views/NotFoundView";
import { FruitDetailView } from "./views/FruitDetailView";
import { HistoireView } from "./views/HistoireView";
import { MissionsView } from "./views/MissionsView";
import { EngagementView } from "./views/EngagementView";
import { ContactView } from "./views/ContactView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { RecoveryView } from "./views/RecoveryView";
import { CartView } from "./views/CartView";
import { PrivacyView } from "./views/PrivacyView";
import { TermsView } from "./views/TermsView";
import { LegalView } from "./views/LegalView";
import { ProductDetailView } from "./views/ProductDetailView";
import { PromotionsView } from "./views/PromotionsView";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomeView />} />
				<Route path="/catalogue">
					<Route index element={<CatalogueView />} />
					<Route path="gamme-jus" element={<JusView />} />
					<Route path="produit/:id" element={<ProductDetailView />} />
				</Route>
				<Route path="/profile" element={<ClientView />} />
				<Route path="/fruits">
					<Route index element={<FruitView />} />
					<Route path=":type" element={<FruitDetailView />} />
				</Route>
				<Route path="/notre-histoire" element={<HistoireView />} />
				<Route path="/nos-missions" element={<MissionsView />} />
				<Route path="/nos-engagements" element={<EngagementView />} />
				<Route path="/contact" element={<ContactView />} />
				<Route path="/login" element={<LoginView />} />
				<Route path="/panier" element={<CartView />} />
				<Route path="/promotions" element={<PromotionsView />} />
				<Route path="/register" element={<RegisterView />} />
				<Route path="/recovery" element={<RecoveryView />} />
				<Route path="/nos-engagements" element={<EngagementView />} />
				<Route
					path="/politique-confidentialite"
					element={<PrivacyView />}
				/>
				<Route path="/conditions-utilisation" element={<TermsView />} />
				<Route path="/mentions-legales" element={<LegalView />} />
				<Route path="*" element={<NotFoundView />} />
			</Route>
		</Routes>
	);
}
