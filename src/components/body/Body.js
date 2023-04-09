import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route,Redirect,Switch } from "react-router";
const Body = () => {
    return (
        <div>
            {/* <Routes> */}
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Redirect to="/home" form="/" />
            </Switch>
                
            {/* </Routes> */}

        </div>
    );
}

export default Body;