import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MapaNariñoImage from "../assets/img/MapaNariño.png";

function Maps() {
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <div className="map-container">
            <h3 className="text-center mb-3">Mapa Informativo</h3>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.77523091818!2d-77.31842192668009!3d1.2135251363646615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed48761b92a73%3A0x44a368566cc3a522!2zUGFzdG8sIE5hcmnDsW8!5e0!3m2!1ses-419!2sco!4v1718256712017!5m2!1ses-419!2sco" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Maps;