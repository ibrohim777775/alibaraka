import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import MediaStyles from "./media";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <div className="loader">
      <InfinitySpin
        // style={{ display: loader ? "block" : "none" }}
        color="var(--green)"
      />
    </div>
  ) : (
    <BrowserRouter>
      <div className="App">
        <MediaStyles>
          <Header />
          <Main />
          <Footer />
        </MediaStyles>
      </div>
    </BrowserRouter>
  );
}

export default App;
