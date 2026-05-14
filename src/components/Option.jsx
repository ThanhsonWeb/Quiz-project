import { useQuiz } from "../contexts/QuizContext";

function Option({ option, optionIndex, point, correctOption }) {
	const { dispatch, answer, questions, index } = useQuiz();

	const question = questions[index];

	function handleClick() {
		dispatch({
			type: "newAnswer",
			payload: optionIndex,
			point: point,
			correctOption,
		});
	}

	const isSelected = answer === optionIndex;
	const isCorrect = optionIndex === question.correctOption;

	return (
		<li
			onClick={handleClick}
			className={`option 
      ${answer === optionIndex && "answer"} 
      ${isSelected && optionIndex === question.correctOption && "correct"} 
      ${isSelected && !isCorrect && "wrong"}`}
		>
			{option}
		</li>
	);
}

export default Option;
