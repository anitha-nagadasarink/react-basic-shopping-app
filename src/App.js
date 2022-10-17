

import React, { useState, useEffect } from 'react';

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import ProductStore from "./components/ProductStore"
import NavBar from './components/NabBar';
import Footer from './components/Footer';


function App() {

  const [details, setDetails] = useState({});

  // const fetchDetails = async () => {
  //   const { data } = await axios.get("https://randomuser.me/api");
  //   const details = data.results[0];

  //   setDetails(details);
  //   // console.log(details);
  // }
  // useEffect(() => {
  //   fetchDetails();
  // }, []);


  return (
    <>
      <NavBar />
      <Container className='pt-5'>
        <Row>
          { // {itemArray.map((item, index) => (
            //     <Col>
            //       <Card className='mb-4'>
            //         <CardImg src={details.picture?.large} />
            //         <CardBody>
            //           <CardTitle>{details.name?.first}</CardTitle>
            //           <CardText>{details.email}</CardText>
            //           <Button>Hello</Button>
            //         </CardBody>
            //       </Card>
            //     </Col>
            //   ))}
          }
          <ProductStore />
        </Row>
      </Container>
      <Footer />
    </>

  );
}

export default App;
