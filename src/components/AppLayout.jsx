import Header from "./Header";
import StartScreen from "./StartScreen";
import Main from "./Main";
function App() {
	return (
		<div className="app p-3 bg-stone-500">
			<Header />
			<Main>
				<StartScreen />
			</Main>
		</div>
	);
}

export default App;
