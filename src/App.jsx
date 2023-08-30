import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import axios from "axios";

function App() {
  const [listings, setListings] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3002/listings")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
