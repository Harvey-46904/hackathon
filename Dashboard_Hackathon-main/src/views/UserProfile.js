import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function User() {
  const [profile, setProfile] = useState({
    username: "Admin",
    email: "example@gmail.com",
    firstName: "Mike",
    lastName: "Andrew",
    address: "Calle 20 No. 10-20",
    city: "Pasto",
    country: "Colombia",
    postalCode: "520001",
    aboutMe: "¡Hola! Soy Juan, un desarrollador de software, especializándome en tecnologías como React!",
    photo: require("assets/img/faces/face-3.jpg")
  });

  const [formData, setFormData] = useState({ ...profile });
  const [photoPreview, setPhotoPreview] = useState(profile.photo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Editar Perfil</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Empresa (deshabilitada)</label>
                        <Form.Control
                          defaultValue="Talento TECH"
                          disabled
                          placeholder="Empresa"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Nombre de usuario</label>
                        <Form.Control
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="Nombre de usuario"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="example@gmail.com">Correo electrónico</label>
                        <Form.Control
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nombres</label>
                        <Form.Control
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Ingresa tú nombre"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Apellidos</label>
                        <Form.Control
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Ingresa tú apellido"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Dirección</label>
                        <Form.Control
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Ingresa tú dirección"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Ciudad</label>
                        <Form.Control
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Ingresa tú ciudad"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>País</label>
                        <Form.Control
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Ingresa tú país"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Código postal</label>
                        <Form.Control
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          placeholder="Ingresa el código postal"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Acerca de mí</label>
                        <Form.Control
                          name="aboutMe"
                          value={formData.aboutMe}
                          onChange={handleChange}
                          cols="80"
                          placeholder="Ingresa una breve descripción sobre tí"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Foto de Perfil</label>
                        <Form.Control
                          type="file"
                          onChange={handlePhotoChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className="btn-fill pull-right" type="submit" variant="info">
                    Actualizar Perfil
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={photoPreview}
                    ></img>
                    <h5 className="title">
                      {profile.firstName} {profile.lastName}
                    </h5>
                  </a>
                  <p className="description">{profile.username}</p>
                </div>
                <p className="description text-center">
                  {profile.aboutMe}
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-github-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-instagram-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;

