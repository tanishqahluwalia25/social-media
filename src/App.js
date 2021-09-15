import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
