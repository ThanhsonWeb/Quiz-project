import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function StartScreen() {
	const navigate = useNavigate();

	return (
		<div className="text-center font-semibold text-2xl">
			<h1 className="text-4xl">Welcome to the real World</h1>
			<h2 className="my-3">15 questions is waiting for you</h2>
			<Button onClick={() => navigate("/questions")}>Start now</Button>
		</div>
	);
}

export default StartScreen;
