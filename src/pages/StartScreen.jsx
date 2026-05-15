import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function StartScreen() {
	const navigate = useNavigate();
	const { dispatch } = useQuiz();

	function handleClick() {
		navigate("/questions");
		dispatch({ type: "start" });
	}

	return (
		<div className="text-center font-semibold  h-[30vh] md:text-3xl text-2xl">
			<h1 className="md:text-4xl text-2xl">Welcome to the real World</h1>
			<h2 className="my-3">15 questions is waiting for you</h2>
			<Button onClick={handleClick}>Start now</Button>
		</div>
	);
}

export default StartScreen;
