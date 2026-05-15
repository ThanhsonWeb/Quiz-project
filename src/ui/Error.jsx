import { useQuiz } from "../contexts/QuizContext";

function Error() {
	const { errorMessage } = useQuiz();

	return (
		<div className="text-center p-4 bg-red-100 text-red-700 rounded">
			<h2 className="font-bold text-xl mb-2">Oops </h2>
			<p>{errorMessage || "Something went wrong"}</p>
		</div>
	);
}

export default Error;
