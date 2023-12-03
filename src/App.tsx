import "./App.css";
import Graph from "./components/Graph";
import { Panel } from "./components/Panel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="fixed left-0 bottom-0">
          <Panel></Panel>
        </div>
        <Graph></Graph>
      </header>
    </div>
  );
}

export default App;
