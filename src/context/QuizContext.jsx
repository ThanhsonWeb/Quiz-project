import { useEffect, useState, createContext } from "react";
const QuizContext = createContext();

function QuizProvider({ children }) {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchQuestions() {
			const res = await fetch("http://localhost:9000/questions");
			const data = await res.json();
			setQuestions(data);
		}
		fetchQuestions();
	}, []);

	return (
		<QuizContext.Provider value={{ questions }}>
			{children}
		</QuizContext.Provider>
	);
}

export { QuizProvider, QuizContext };
