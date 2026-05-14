import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function FinishScreen() {
	const { point, dispatch, totalPoint } = useQuiz();

	const navigate = useNavigate();

	function handleRestart() {
		dispatch({ type: "restart" });
		navigate("/");
	}

	let icon ; // default icon

	if (point <= 50) icon = "🤔";
	else if (point <= 80) icon = "😐";
	else if (point <= 120) icon = "😊";
	else icon = "🏆";

	return (
		<>
			<div className="p-3 bg-blue-50 rounded-2xl mb-9 ">
				<h2 className="md:text-3xl text-2xl font-semibold text-blue-900  text-center">
					{icon} Your score is {point}/{totalPoint}
				</h2>
			</div>
			<Button onClick={handleRestart}>Restart</Button>
		</>
	);
}

export default FinishScreen;
