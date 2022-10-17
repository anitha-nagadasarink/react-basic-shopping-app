
import React, { useState, useEffect } from "react";
import ProductData from "../productDetails.json";
import ProductCard from "./ProductCard";


import { Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

const ProductStore = () => {

  let [details, setDetails] = useState();

  const fetchDetails = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setDetails(data);
  }

  useEffect(() => {
    fetchDetails();
    console.table(details);
  }, []);

  return (
    <>
      {ProductData.map((item) => (
        <Col md={4}>
          <ProductCard CardImage={item.image} CardTitle={item.title} CardPrice={item.price} CardText={item.description} />
        </Col>
      ))}
    </>
  )
};

export default ProductStore;