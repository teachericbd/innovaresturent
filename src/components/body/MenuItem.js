import React from "react";
import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";
const MenuItem = props => {
    return(
        <div className="col-md-4">
            <Card style={{margin:'10px',cursor:'pointer'}} onClick={props.selectDish} className="img-thumbnail">
                <CardImg alt={props.dish.name} src={props.dish.image} style={{opacity:"0.5"}} />
                <CardImgOverlay>
                    <CardTitle tag="h4" className="text-center">{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}

export default MenuItem;