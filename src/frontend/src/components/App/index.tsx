import React from "react";
import { Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

class App extends React.Component {
  redirect = () => <Redirect to="/" />;
  public render() {
    return (
      <Router history={createBrowserHistory()}>
        <main className="pa5">
        <h1 className="fs6"> Dream Fill </h1>
        <h2 className="pl3"> Keep the Kids </h2>
        </main>
      </Router>
    );
  }
}

export default App;
