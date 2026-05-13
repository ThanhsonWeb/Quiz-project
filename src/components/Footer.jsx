import { useQuiz } from "../contexts/QuizContext";
import Button from "../ui/Button";

function Footer() {
	const { setIndex } = useQuiz();
	return (
		<div className="text-center mt-8" >
			<Button onClick={() => setIndex((c) => c + 1)}>Next</Button>
		</div>
	);
}

export default Footer;
