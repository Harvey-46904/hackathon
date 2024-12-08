import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

function SimuCredito() {
  const [formData, setFormData] = useState({
    age: "25",
    personalIncome: "45000",
    jobSeniority: "2",
    loanAmount: "49000",
    loanIncomePercentage: "14",
    tasaInteres: "10",
    creditHistoryLength: "2",
    loanPurpose: "negocios",
    loanType: "negocios",
    loanGrade: "grado a",
    creditHistory: "bueno",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (+formData.tasaInteres < 10 || +formData.loanAmount >= 50000) {
      setModalMessage("No apto para el préstamo debido a un historial de crédito malo.");
    } else {
      setModalMessage("Apto para el préstamo.");
    }
    setShowModal(true);
  };

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Simulación de Crédito</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                
                <Row>
                <Col md="6">
                    <Form.Group>
                      <label>Monto del Préstamo (USD)</label>
                      <Form.Control
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="Ingrese el monto del préstamo"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Tasa de Interés del Préstamo (% E.A.)</label>
                      <Form.Control
                        name="tasaInteres"
                        value={formData.tasaInteres}
                        onChange={handleChange}
                        placeholder="Ingrese Tasa de Interés del préstamo"
                        type="number"
                      />
                    </Form.Group>
                  </Col>
                </Row>


                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                >
                  Predecir
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resultado de Simulación</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SimuCredito;
