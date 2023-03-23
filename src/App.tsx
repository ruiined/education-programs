import * as React from "react";
import "./App.css";
import { Header } from "./components";
import { Programs } from "./pages";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Programs />
      </div>
    );
  }
}

export default App;
