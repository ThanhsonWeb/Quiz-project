import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function StartScreen() {
	const navigate = useNavigate();

	return (
		<div className="text-center font-semibold  h-[90%]">
			<h1 className="md:text-4xl text-2xl">Welcome to the real World</h1>
			<h2 className="my-3">15 questions is waiting for you</h2>
			<Button onClick={() => navigate("/questions")}>Start now</Button>
		</div>
	);
}

export default StartScreen;
