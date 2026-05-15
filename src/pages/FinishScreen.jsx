import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function FinishScreen() {
	const { point, dispatch, totalPoint } = useQuiz();

	const navigate = useNavigate();

	function handleRestart() {
		dispatch({ type: "reset" });
		navigate("/");
	}

	let icon; // default icon

	if (point <= 50) icon = "🤔";
	else if (point <= 80) icon = "😐";
	else if (point <= 120) icon = "😊";
	else icon = "🏆";

	return (
		<div className="h-[50vh]">
			<div className="p-3 bg-blue-50 rounded-2xl mb-9 relative  ">
				<h2 className="md:text-3xl text-2xl font-semibold text-blue-900  text-center">
					{icon} Your score is {point}/{totalPoint} <br />
					"Điểm của bro là {point}/{totalPoint}"
				</h2>
			</div>
			<div className="absolute right-[30%]">
				<Button onClick={handleRestart}>Restart</Button>
			</div>
		</div>
	);
}

export default FinishScreen;
