import "./App.css";
import Graph from "./components/Graph";
import UI from "./components/UI";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<UI></UI>
				<Graph></Graph>
			</header>
		</div>
	);
}

export default App;
