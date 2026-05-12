import logo from "../assets/img/logo512.png";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="flex items-center justify-around mb-5">
			<Link to="/">
				<img src={logo} alt="logo" className="h-30 rounded-full" />
			</Link>
			<h1 className="text-4xl font-semibold font-serif "> Geology Questions </h1>
		</div>
	);
}

export default Header;
