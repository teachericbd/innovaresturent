import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";
class Menu extends Component{
    state = {
        dishes: DISHES,
        selectDish: null
    };
    onSelectDish = dish =>{
        // console.log(dish);
        this.setState({
            selectDish:dish
        });
    };
    render(){
        let menu = this.state.dishes.map(item => {
            return(
               <MenuItem 
                key={item.id}
                dish={item}
                selectDish={() => this.onSelectDish(item)}
                /> 
            )
        });
        let dish = null;
        if(this.state.selectDish!=null){
            dish = <DishDetails dish={this.state.selectDish} />
        }
        // console.log(menu);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                    {menu}
                    </div>
                    <div className="col-6">
                        {dish}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;