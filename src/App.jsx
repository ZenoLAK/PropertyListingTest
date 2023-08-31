import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import mockListings from "./data/db";

function App() {
  const [listings, setListings] = useState(mockListings);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home listings={listings} />} />
        <Route
          path="/listing/:id"
          component={() => <DetailPage listings={listings} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
