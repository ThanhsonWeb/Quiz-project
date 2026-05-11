import logo from "../assets/img/logo.jpg";

function Header() {
	return (
		<div className="flex items-center justify-around">
			<img src={logo} alt="logo" className="h-40 rounded-full" />
			<h1 className="text-5xl font-semibold "> Question To Test </h1>
		</div>
	);
}

export default Header;
