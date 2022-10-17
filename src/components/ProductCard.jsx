import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, } from "reactstrap";


const ProductCard = (props) => {
  return (
    <Card className="mb-4">
      <CardImg src={props.CardImage} />
      <CardBody>
        <CardTitle>{props.CardTitle}</CardTitle>
        <CardText className="fw-bold">$.{props.CardPrice}</CardText>
        <CardText>{props.CardText}</CardText>
        <div className="button-container">
          <button className='btn btn-primary'>Buy Now</button>
          <button className='btn btn-info ml-5'>Add to Cart</button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductCard;