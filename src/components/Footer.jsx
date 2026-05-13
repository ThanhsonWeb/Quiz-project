import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";

function Footer() {
	const { dispatch } = useQuiz();

	return (
		<div className="text-center mt-8">
			<Button onClick={() => dispatch({ type: "next" })}>Next</Button>
		</div>
	);
}

export default Footer;
