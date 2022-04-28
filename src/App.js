import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import MediaStyles from "./media";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MediaStyles>
          <Switch>
            <Route exact path="/" />
          </Switch>
          <Header />
        </MediaStyles>
      </div>
    </BrowserRouter>
  );
}

export default App;
