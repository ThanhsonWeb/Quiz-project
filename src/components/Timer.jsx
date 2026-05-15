import { useQuiz } from "../contexts/QuizContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
	const { secondsLeft, dispatch } = useQuiz();

	const navigate = useNavigate();

	const mins = Math.floor(secondsLeft / 60);
	const seconds = Math.floor(secondsLeft % 60);

	useEffect(() => {
		if (secondsLeft === 0) {
			navigate("/finish");
			// return;
		}

		const id = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, [navigate, secondsLeft, dispatch]);

	return (
		<div className="p-3 md:text-3xl font-semibold bg-amber-50 text-black rounded-xl">
			{mins < 10 && "0"}
			{mins} : {seconds < 10 && "0"}
			{seconds}
		</div>
	);
}

export default Timer;
