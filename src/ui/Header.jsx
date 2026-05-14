import logo from "../assets/img/logo512.png";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="flex items-center justify-around  mb-5">
			<Link to="/">
				<img src={logo} alt="logo" className="md:h-30 h-20 rounded-full mr-10" />
			</Link>
			<h1 className="lg:text-4xl md:text-3xl text-2xl whitespace-nowrap font-semibold font-serif ">
				Geology Questions
			</h1>
		</div>
	);
}

export default Header;
