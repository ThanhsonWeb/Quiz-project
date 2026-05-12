import { useEffect, useState, createContext, useContext } from "react";
const QuizContext = createContext();

function QuizProvider({ children }) {
	const [questions, setQuestions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [index, setIndex] = useState(0);
	//useEffect runs once on mount, fetches from your fake API, and updates state.
	useEffect(() => {
		async function fetchQuestions() {
			try {
				setIsLoading(true);
				const res = await fetch("http://localhost:9000/questions");
				const data = await res.json();
				console.log(data);
				setQuestions(data);
			} catch (err) {
				console.error("fetch to fetch Data", err.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchQuestions();
	}, []);

	return (
		<QuizContext.Provider value={{ questions, isLoading, index }}>
			{children}
		</QuizContext.Provider>
	);
}
//Instead of importing QuizContext everywhere, create a helper:

function useQuiz() {
	return useContext(QuizContext);
}

export { QuizProvider, QuizContext, useQuiz };
