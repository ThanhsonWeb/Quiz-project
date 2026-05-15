import { useQuiz } from "../contexts/QuizContext";

function Option({ option, optionIndex }) {
	const { dispatch, answer, questions, index } = useQuiz();

	const question = questions[index];

	function handleClick() {
		if (answer !== null) return;
		dispatch({
			type: "newAnswer",
			payload: optionIndex,
		});
	}

	const isSelected = answer === optionIndex;
	const isCorrect = optionIndex === question.correctOption;

	return (
		<li
			onClick={handleClick}
			className={`option text-xl md:text-2xl
      ${answer === optionIndex && "answer"} 
      ${isSelected && optionIndex === question.correctOption && "correct"} 
      ${isSelected && !isCorrect && "wrong"}
		${answer !== null && isCorrect ? "correct" : ""}
		`}
		>
			{option}
		</li>
	);
}

export default Option;
