import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";

class Menu extends Component{
    state = {
        dishes: DISHES
    };
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">

                    </div>
                </div>
            </div>
        );
    }
}