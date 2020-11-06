import React from "react";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signUp" component={SignUpForm} />
            <Route exact path="/logIn" component={LogInForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
