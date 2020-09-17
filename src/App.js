import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";

function App(){

  const [{}, dispatch] = useStateValue();

  React.useEffect(() => {
    // Will only run once when the app component loads
    
    auth.onAuthStateChanged(authUser => {
      console.log("USER >> ", authUser);

      if (authUser) {
        // The user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          {/*ROUTES*/}
          <Route path="/login"> {/*Here is the checkout route*/}
            <Login />
          </Route>

          <Route path="/checkout"> {/*Here is the checkout route*/}
            <Header />
            <Checkout />
          </Route>

          <Route path="/"> {/*This what we call the home page route. This always goes at the bottom*/}
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
