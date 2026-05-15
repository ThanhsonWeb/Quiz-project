import { useQuiz } from "../contexts/QuizContext";
import { useEffect } from "react";

function Timer() {
	const { secondsLeft, dispatch } = useQuiz();

	const mins = Math.floor(secondsLeft / 60);
	const seconds = Math.floor(secondsLeft % 60);

	useEffect(() => {
		setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);
	}, [dispatch]);

	return (
		<div className="p-3 text-3xl font-semibold bg-amber-50 text-black rounded-xl">
			{mins < 10 && "0"}
			{mins} : {seconds < 10 && "0"}{seconds}
		</div>
	);
}

export default Timer;
