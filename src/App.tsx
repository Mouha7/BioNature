import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ScrollToTop } from "./views/components/ScrollToTop";
import { CartProvider } from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";

function App() {
	return (
		<CartProvider>
			<FilterProvider>
				<BrowserRouter>
					<Router />
					<ScrollToTop />
				</BrowserRouter>
			</FilterProvider>
		</CartProvider>
	);
}

export default App;
