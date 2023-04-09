import React from "react";
import { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";
import { Modal,ModalBody,ModalFooter,Button } from "reactstrap";
class Menu extends Component{
    state = {
        dishes: DISHES,
        selectDish: null,
        isModalOpen: false
    };
    onSelectDish = dish =>{
        // console.log(dish);
        this.setState({
            selectDish:dish
        });
        this.troggleModal();
    };
    troggleModal = () =>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render(){
        let menu = this.state.dishes.map(item => {
            return(
               <MenuItem 
                key={item.id}
                dish={item}
                selectDish={() => this.onSelectDish(item)}
                ModalTroggle = {this.troggleModal}
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
                    {menu}
                    <Modal isOpen={this.state.isModalOpen}  size="xl">
                        <ModalBody>
                            {dish}
                        </ModalBody>
                        <ModalFooter>
                            <Button className="btn btn-danger" onClick={this.closeModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;