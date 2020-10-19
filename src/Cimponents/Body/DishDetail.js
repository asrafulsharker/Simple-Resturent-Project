import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

const DishDetail = props=>{
return(
    <div>
        <Card style={{marginTop:"10px"}}>
            <CardImg top src={props.dish.image} alt={props.dish.name}/>
            <CardBody style={{textAlign: "left"}} >
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
                <CardText>
                    <p>{props.dish.description}</p>
                    <p>{props.dish.price}/-</p>
                </CardText>
            </CardBody>
            
        </Card>

    </div>
);
}
export default DishDetail;