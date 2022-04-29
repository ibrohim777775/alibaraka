import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import MediaStyles from "./media";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MediaStyles>
          <Header />
          <Main />
        </MediaStyles>
      </div>
    </BrowserRouter>
  );
}

export default App;
