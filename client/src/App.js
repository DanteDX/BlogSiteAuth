import React from "react";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Blogs from "./components/Blogs";
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
            <Route exact path="/blogs" component={Blogs}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
