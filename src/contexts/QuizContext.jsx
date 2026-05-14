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
	answer: null,
	point: 0,
	index: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload, isLoading: false };

		case "newAnswer":
			const isCorrect =
				action.payload === state.questions[state.index].correctOption;

			return {
				...state,
				answer: action.payload, // store selected option index
				point: isCorrect ? state.point + action.point : state.point,
			};
		case "next":
			return { ...state, index: state.index + 1, answer: null };
		case "finish":
			return { ...state, answer: null };
		case "restart":
			return { ...state, answer: null, point: 0, index: 0 };
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
	const { questions, isLoading, index, status, point, answer } = state;

	const totalPoint = questions.reduce((acc, item) => acc + item.points, 0);

	useEffect(() => {
		async function fetchQuestions() {
			try {
				dispatch({ type: "loading" });
				const res = await fetch("http://localhost:9000/questions");
				const data = await res.json();
				console.log(data);
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
			value={{
				questions,
				isLoading,
				index,
				status,
				point,
				answer,
				totalPoint,
				dispatch,
			}}
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
