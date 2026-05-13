import { useQuiz } from "../contexts/QuizContext";
import Loading from "../ui/Loading";
import Option from "../components/Option";
import Progress from "../components/Progress";
function Questions() {
	const { isLoading, questions, index } = useQuiz();

	if (isLoading) return <Loading />;

	return (
		<div className="w-[70%] mx-auto">
			<Progress />

			{questions.length > 0 && (
				<h4 className="text-3xl font-semibold">{questions[index].question}</h4>
			)}

			<ul className="mt-5 text-center text-2xl font-serif space-y-3">
				{questions.length > 0 &&
					questions[index].options.map((option, index) => (
						<Option key={index} option={option} />
					))}
			</ul>
		</div>
	);
}

export default Questions;
