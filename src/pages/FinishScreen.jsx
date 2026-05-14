import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function FinishScreen() {
	const { point } = useQuiz();

	const navigate = useNavigate();

	return (
		<>
			<div className="p-3 bg-blue-50 rounded-2xl mb-9 ">
				<h2 className="md:text-3xl text-2xl font-semibold text-blue-900 font-serif">
					Your score is {point}/280
				</h2>
			</div>
			<Button onClick={() => navigate("/")}>Restart</Button>
		</>
	);
}

export default FinishScreen;
