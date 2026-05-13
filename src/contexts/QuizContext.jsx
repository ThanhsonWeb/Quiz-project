import {
	useEffect,
	useState,
	createContext,
	useContext,
	useReducer,
} from "react";
const QuizContext = createContext();

const initialState = {
	questions: [],
	isLoading: false,
	status: "loading",
	point: 0,
	index: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload, isLoading: false };

		case "newAnswer":
			return { ...state };
		case "next":
			return { ...state, index: state.index + 1 };
		case "loading":
			return { ...state, isLoading: true, status: "loading" };
		case "error":
			return { ...state, status: "error", isLoading: false };
		default:
			throw new Error("unknown case =))");
	}
}

function QuizProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { questions, isLoading, index, status, point } = state;

	useEffect(() => {
		async function fetchQuestions() {
			try {
				dispatch({ type: "loading" });
				const res = await fetch("http://localhost:9000/questions");
				const data = await res.json();
				dispatch({ type: "dataReceived", payload: data });
			} catch (err) {
				console.error("fetch to fetch Data", err.message);
				dispatch({ type: "error" });
			}
		}
		fetchQuestions();
	}, []);

	return (
		<QuizContext.Provider
			value={{ questions, isLoading, index, status, point, dispatch }}
		>
			{children}
		</QuizContext.Provider>
	);
}
//  makes consuming context easier.
function useQuiz() {
	return useContext(QuizContext);
}

export { QuizProvider, QuizContext, useQuiz };
