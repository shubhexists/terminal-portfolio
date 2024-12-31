import "./App.css";
import Terminal from "./components/terminal";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Terminal />
      <Analytics />
    </div>
  );
}

export default App;
