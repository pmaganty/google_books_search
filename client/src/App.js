import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Header from "./components/Header"
import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/books">
              <Saved />
            </Route>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
