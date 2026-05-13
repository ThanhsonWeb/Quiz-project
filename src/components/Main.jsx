import { useQuiz } from "../contexts/QuizContext";
import Loading from "../ui/Loading";

function Main({ children }) {
	const { isLoading } = useQuiz();

	if (isLoading) return <Loading />;

	return <main>{children}</main>;
}

export default Main;
