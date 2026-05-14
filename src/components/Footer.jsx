import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Footer() {
	const { dispatch, answer, index, questions } = useQuiz();

	const navigate = useNavigate();

	if (index === questions.length - 1)
		return (
			<div className="text-center mt-8">
				{answer && <Button onClick={() => navigate("/finish")}>Finish</Button>}
			</div>
		);

	return (
		<div className="text-center mt-8">
			{answer && (
				<Button onClick={() => dispatch({ type: "next" })}>Next</Button>
			)}
		</div>
	);
}

export default Footer;
