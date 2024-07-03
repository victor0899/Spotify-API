import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Col1 from "./components/col1"; // Ensure the correct import path

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Col1 />
        </Col>

        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default Login;
