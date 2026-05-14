import AppLayout from "./ui/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Questions from "./pages/Questions";
import Error from "./ui/Error";
import FinishScreen from "./pages/FinishScreen";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <StartScreen /> },
			{ path: "questions", element: <Questions /> },
			{ path: "finish", element: <FinishScreen /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
