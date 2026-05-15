import { useQuiz } from "../contexts/QuizContext";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

function Main({ children }) {
	const { isLoading, status } = useQuiz();

	if (isLoading) return <Loading />;
	if (status === "error") return <Error />;


	return <main>{children}</main>;
}

export default Main;
