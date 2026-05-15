import Header from "./Header";
import Main from "../components/Main";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
function AppLayout() {
	return (
		<div className="app w-[80%]  p-3">
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</div>
	);
}

export default AppLayout;
