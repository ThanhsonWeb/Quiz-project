import logo from "../assets/img/logo512.png";

function Header() {
	return (
		<div className="flex items-center justify-around">
			<img src={logo} alt="logo" className="h-40 rounded-full" />
			<h1 className="text-5xl font-bold "> Geology Questions </h1>
		</div>
	);
}

export default Header;
