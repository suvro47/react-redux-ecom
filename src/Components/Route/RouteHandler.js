import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";

function RouteHandler() {
  return (
    <div className="route bg-gradient-to-r from-gray-100 to-gray-200">
      <Router>
        <section className="sticky top-0 navbar">
          <Navbar />
        </section>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/*">
            <div className="flex flex-col items-center h-screen mt-48">
              <h1> 404 NOT FOUND :( </h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouteHandler;
