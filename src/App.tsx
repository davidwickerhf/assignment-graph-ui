import "./App.css";
import { Error } from "./components/Error";
import Graph from "./components/Graph";
import { Panel } from "./components/Panel";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Error></Error>
				<div className="fixed right-4 bottom-4 z-20">
					<Panel></Panel>
				</div>
				<Graph></Graph>
			</header>
		</div>
	);
}

export default App;
