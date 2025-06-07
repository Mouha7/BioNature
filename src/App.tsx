import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ScrollToTop } from "./views/components/ScrollToTop";

function App() {
	return (
		<BrowserRouter>
			<Router />
			<ScrollToTop />
		</BrowserRouter>
	);
}

export default App;
