import React, { useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';

const ProductosDashboard = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Papa', precio: 120000, pais: 'Colombia', region: 'Nariño', municipio: 'Pasto' },
    { id: 2, nombre: 'Trigo', precio: 130000, pais: 'Colombia', region: 'Nariño', municipio: 'Pasto' },
    { id: 3, nombre: 'Artesanias', precio: 50000, pais: 'Colombia', region: 'Nariño', municipio: 'Ipiales' },
    { id: 4, nombre: 'Fresa', precio: 40000, pais: 'Colombia', region: 'Nariño', municipio: 'Tuquerres' },
    { id: 5, nombre: 'Cebada', precio: 80000, pais: 'Colombia', region: 'Nariño', municipio: 'Ilés' },
    { id: 6, nombre: 'Maíz', precio: 78615, pais: 'Colombia', region: 'Nariño', municipio: 'Consaca' }
  ]);
  const [nextId, setNextId] = useState(7);
  const [showModal, setShowModal] = useState(false);
  const [currentProducto, setCurrentProducto] = useState(null);

  const handleAddProducto = (producto) => {
    const nuevoProducto = { ...producto, id: nextId };
    setProductos([...productos, nuevoProducto]);
    setNextId(nextId + 1);
  };

  const handleEditProducto = (id, productoActualizado) => {
    const nuevosProductos = productos.map(producto => (
      producto.id === id ? { ...productoActualizado, id } : producto
    ));
    setProductos(nuevosProductos);
  };

  const handleDeleteProducto = (id) => {
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    setProductos(nuevosProductos);
  };
  return (
    <div className="table-full-width">
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            <th className="border-0">ID</th>
            <th className="border-0">Nombre</th>
            <th className="border-0">Precio</th>
            <th className="border-0">País</th>
            <th className="border-0">Región</th>
            <th className="border-0">Municipio</th>
            <th className="border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{`$${producto.precio.toLocaleString()}`}</td>
              <td>{producto.pais}</td>
              <td>{producto.region}</td>
              <td>{producto.municipio}</td>
              <td>
                <Button variant="warning" size="sm" className="mr-2" onClick={() => { setCurrentProducto(producto); setShowModal(true); }}>Editar</Button>
                <Button variant="danger" size="sm" onClick={() => handleDeleteProducto(producto.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => { setCurrentProducto(null); setShowModal(true); }}>Agregar Producto</Button>
      <ProductoModal
        show={showModal}
        onHide={() => setShowModal(false)}
        producto={currentProducto}
        onSave={(producto) => {
          if (currentProducto) {
            handleEditProducto(currentProducto.id, producto);
          } else {
            handleAddProducto(producto);
          }
          setShowModal(false);
          setCurrentProducto(null);
        }}
      />
    </div>
  );
};

const ProductoModal = ({ show, onHide, producto, onSave }) => {
  const [nombre, setNombre] = useState(producto ? producto.nombre : '');
  const [precio, setPrecio] = useState(producto ? producto.precio : '');
  const [pais, setPais] = useState(producto ? producto.pais : '');
  const [region, setRegion] = useState(producto ? producto.region : '');
  const [municipio, setMunicipio] = useState(producto ? producto.municipio : '');

  const handleSubmit = () => {
    const productoData = { nombre, precio: parseFloat(precio), pais, region, municipio };
    onSave(productoData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{producto ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Región</Form.Label>
          <Form.Control
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Municipio</Form.Label>
          <Form.Control
            type="text"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cerrar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductosDashboard;
