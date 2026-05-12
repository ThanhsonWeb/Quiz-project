import Header from "./Header";
import Main from "./Main";
import { Outlet } from "react-router-dom";
function AppLayout() {
	return (
		<div className="app w-[90%] p-3">
			<Header />
			<Main>
				<Outlet />
			</Main>
		</div>
	);
}

export default AppLayout;
