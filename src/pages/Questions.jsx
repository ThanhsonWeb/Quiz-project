import { QuizContext } from "../contexts/QuizContext";
import { useContext } from "react";
import Loading from "../ui/Loading";

function Questions() {
	const { isLoading, questions } = useContext(QuizContext);

	if (isLoading) return <Loading />;

	return <div>



   </div>;
}

export default Questions;
