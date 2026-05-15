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
	errorMessage: "",
	secondsLeft: null,
};


const SECS_PER_QUESTION = 15;
function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return {
				...state,
				questions: action.payload,
				isLoading: false,
				status: "ready",
			};
		case "start":
			return {
				...state,
				status: "active",
				secondsLeft: state.questions.length * SECS_PER_QUESTION,
			};

		case "newAnswer":
			const question = state.questions[state.index];

			const isCorrect =
				action.payload === state.questions[state.index].correctOption;

			return {
				...state,
				answer: action.payload, // store selected option index
				point: isCorrect ? state.point + question.points : state.point,
			};
		case "next":
			// if (answer === null) return state;
			return { ...state, index: state.index + 1, answer: null };
		case "finish":
			return { ...state, answer: null, status: "finish" };
		case "reset":
			return { ...initialState, questions: state.questions, status: "ready" };

		case "tick":
			return {
				...state,
				secondsLeft: state.secondsLeft - 1,
				status: state.secondsLeft === 0 ? "finish" : state.status,
			};

		case "loading":
			return { ...state, isLoading: true, status: "loading" };
		case "error":
			return {
				...state,
				status: "error",
				isLoading: false,
				errorMessage: action.payload,
			};
		default:
			throw new Error("unknown case =))");
	}
}

function QuizProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {
		questions,
		isLoading,
		index,
		status,
		point,
		answer,
		errorMessage,
		secondsLeft,
	} = state;

	const totalPoint = questions.reduce((acc, item) => acc + item.points, 0);

	useEffect(() => {
		async function fetchQuestions() {
			try {
				dispatch({ type: "loading" });
				const res = await fetch("http://localhost:9000/questions");
				if (!res.ok) throw new Error(`Failed  with status ${res.status}`);
				const data = await res.json();
				console.log(data);
				dispatch({ type: "dataReceived", payload: data });
			} catch (err) {
				dispatch({ type: "error", payload: err.message });
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
				errorMessage,
				secondsLeft,
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
