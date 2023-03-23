import * as React from "react";
import "./App.css";
import { Programs } from "./pages";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">All programs</h1>
          <p>
            In-depth and immersive programs focused on the most critical
            leadership skills and behaviors for today's world. We provide
            on-campus, online and blended program options.
          </p>
        </header>
        <Programs />
      </div>
    );
  }
}

export default App;
