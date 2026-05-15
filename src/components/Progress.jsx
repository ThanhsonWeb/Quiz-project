import { useQuiz } from "../contexts/QuizContext";

function Progress() {
	const { index, questions, point, totalPoint } = useQuiz();

	return (
		<div className="my-9">
			<progress
				className="w-full "
				value={index + 1 }
				min={0}
				max={questions.length }
			></progress>

			<div className="flex justify-between items-center md:text-2xl text-xl font-medium tracking-wide font-serif ">
				<p>
					Questions : {index + 1}/{questions.length}
				</p>
				<p>{point}/{totalPoint}</p>
			</div>
		</div>
	);
}

export default Progress;
