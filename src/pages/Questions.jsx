import { useQuiz } from "../contexts/QuizContext";
import Loading from "../ui/Loading";
import Option from "../components/Option";
import Progress from "../components/Progress";
function Questions() {
	const { isLoading, questions, index } = useQuiz();

	if (isLoading) return <Loading />;

	return (
		<div className="md:w-[70%] sm:w-[80%] mx-auto">
			<Progress />

			{questions.length > 0 && (
				<h4 className="lg:text-3xl md:text-2xl text-xl font-semibold">
					{questions[index].question}
				</h4>
			)}

			<ul className="mt-5 text-center text-2xl font-serif space-y-3">
				{questions.length > 0 &&
					questions[index].options.map((option, i) => (
						<Option key={i} option={option} optionIndex={i} />
					))}
			</ul>


		</div>
	);
}



export default Questions;
