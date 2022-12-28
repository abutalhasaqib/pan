import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import Transactions from "./components/screens/Transactions";
import Pan from "./components/screens/Pan";
import About from "./components/screens/About";
import ManageOrganizations from "./components/screens/Organizations/ManageOrganizations";
import ManageAccounts from "./components/screens/Organizations/ManageAccounts";
import Homepan from "./components/Pan/Homepan";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Homepan />
          )}
        />
        <Route
          exact
          path="/transactions"
          render={() => (
            <Page title="Transactions">
              <Transactions />
            </Page>
          )}
        />
        <Route
          exact
          path="/pan/new"
          render={() => (
            <Page title="New Pan Transactions">
              <Pan type="new" />
            </Page>
          )}
        />
        <Route
          exact
          path="/pan/correction"
          render={() => (
            <Page title="Pan Correction">
              <Pan type="correction" />
            </Page>
          )}
        />
        <Route
          exact
          path="/pan/status"
          render={() => (
            <Page title="PAN Check Status">
              <Pan type="status" />
            </Page>
          )}
        />
        <Route
          exact
          path="/accounts/organizations"
          render={() => (
            <Page title="Organization Management">
              <ManageOrganizations />
            </Page>
          )}
        />
        <Route
          exact
          path="/accounts/list"
          render={() => (
            <Page title="Accounts Management">
              <ManageAccounts />
            </Page>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <Page title="">
              <About />
            </Page>
          )}
        />
        <Route exact path="/sign-in" render={() => <SignIn />} />
        <Route exact path="/homepan"
          render={() => (
            <Page title="Home">
              <Home />
            </Page>
          )}
        />

      </Switch>
    </Router>
  );
}

export default App;
