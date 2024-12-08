import React from "react";
import ProductosCrud from "./ProductosCrud";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Productos() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Productos Activos</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <ProductosCrud></ProductosCrud>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Productos;
