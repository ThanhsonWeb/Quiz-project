import { useQuiz } from "../contexts/QuizContext";

function Option({ option }) {
	const { dispatch } = useQuiz();

	function handleClick() {
		dispatch({ type: "newAnswer" });
	}

	return (
		<li
			onClick={handleClick}
			className="bg-stone-300 py-1 rounded-xl text-black cursor-pointer"
		>
			{option}
		</li>
	);
}

export default Option;
