import React,{Component} from "react";
import { Card, CardImg, CardBody, CardTitle, CardText,Button,Modal,ModalBody,ModalFooter } from "reactstrap";
import LoadComments from "./LoadComments";

class DishDetails extends Component {
    constructor(props){
        super(props);
    }
    state = {
        CommentsOpen: false
    }

    lodedComments = () =>{
        this.setState({
            CommentsOpen: !this.state.CommentsOpen
        });
    }
    closeModalBtn = () => {
        this.setState({
            CommentsOpen: !this.state.CommentsOpen
        });
    }
    render(){
        return (
        <Card style={{ margin: '10px' }}>
            <div className="row">
                <div className="col-md-6">
                    <CardImg src={this.props.dish.image} alt={this.props.dish.name} />
                </div>
                <div className="col-md-6">
                    <CardBody>
                        <CardTitle tag="h4">{this.props.dish.name}</CardTitle>
                        <CardText>
                            {this.props.dish.description}
                        </CardText>
                        <CardText>
                            BDT {this.props.dish.price} /-
                        </CardText>
                        <CardTitle tag="h4">Comments</CardTitle>
                        <hr />
                        <Button type="button" onClick={this.lodedComments}>See Comments</Button>
                        <Modal isOpen={this.state.CommentsOpen}>
                            <ModalBody>
                            <LoadComments comment={this.props.dish.comments} />
                            </ModalBody>
                            <ModalFooter>
                            <Button className="btn btn-danger" onClick={this.closeModalBtn}>Close</Button>
                            </ModalFooter>
                        </Modal>
                        {/* <LoadComments comment={props.dish.comments} /> */}
                    </CardBody>
                </div>
            </div>


        </Card>
    );
    }
    
}

export default DishDetails;