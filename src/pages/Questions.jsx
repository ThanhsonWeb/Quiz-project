import { useQuiz } from "../contexts/QuizContext";
import Loading from "../ui/Loading";
import Option from "../components/Option";
function Questions() {
	const { isLoading, questions, index } = useQuiz();

	if (isLoading) return <Loading />;

	return (
		<div>
			{questions.length > 0 && <h4>{questions[index].question}</h4>}

			<ul>
				{questions.length > 0 &&
					questions[index].options.map((option, index) => (
						<Option key={index} option={option} />
					))}
			</ul>
		</div>
	);
}

export default Questions;
