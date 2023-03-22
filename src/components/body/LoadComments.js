import React from "react";
import { CardTitle,CardText } from "reactstrap";
import dateFormat from "dateformat";
let LoadComments = props => {
    return(
        props.comment.map(item => {
            return(
                <div key={item.id}>
                    <CardTitle tag="h5">{item.author}</CardTitle>
                    <CardText>{item.comment}</CardText>
                    <CardText>{dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM TT")}</CardText>
                    <hr />
                </div>
                
            )
        })
    )
}

export default LoadComments;