import { useQuiz } from "../contexts/QuizContext";

function Progress() {
	const { index, questions, point } = useQuiz();

	return (
		<div className="my-9">
			<progress
				className="w-full rounded-2xl"
				value={index + 1}
				min={0}
				max={questions.length}
			></progress>

			<div className="flex justify-between items-center text-2xl font-semibold tracking-wide ">
				<p>
					Questions : {index + 1}/{questions.length}
				</p>
				<p>{point} / 20</p>
			</div>
		</div>
	);
}

export default Progress;
