import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import Censorship from ""./component
const App = () => (
  <Router>
		<Route path="/" exact component={Join} />
		<Route path="/" exact component={ Censorship } />
    <Route path="/chat" exact component={Chat} />
  </Router>
);

export default App;
