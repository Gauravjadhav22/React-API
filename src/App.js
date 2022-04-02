import React, { useState, useEffect } from "react";
import { Container, Row, col, Col } from "reactstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./MyCard";
import Axios from "axios";

function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/"); // getting Only data from JSON
    console.log("RESPOSNSE", data);

    const details = data.results[0];

    setDetails(details);
    console.log(details.gender)
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
   <Container className="p-4 bg-primary App">
     <Row>
       <Col md={4} className="offset-md-4 mt-4">
         <MyCard details={details}></MyCard>
       </Col>
     </Row>
   </Container>
  );
}

export default App;
