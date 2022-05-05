import React from "react";
import { BrowserRouter,Switch , Route } from "react-router-dom";

//css
import './../Css/App.css';

//import components
import Navbar from "./Navbar";

//import routes
import Home from "./Pages/Home";
import Producs from "./Pages/Producs";
import Services from "./Pages/Services";
import SignUp from "./Pages/Sign-up";


function App() {
return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Producs} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
