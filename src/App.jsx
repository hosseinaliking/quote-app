import React from "react";

//* Router *//
import { Redirect, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import NotFound from "./components/NotFound";

//* Pages *//
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <>
      <MainNavigation>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path={"/quotes"} exact>
            <AllQuotes />
          </Route>

          <Route path={"/quotes/:quoteId"}>
            <QuoteDetail />
          </Route>

          <Route path={"/new-quote"}>
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainNavigation>
    </>
  );
};

export default App;
