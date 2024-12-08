import React, { useState } from 'react';
import { Table, Button, Form, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';

const TareasCrud = () => {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Firmar contrato', completada: false },
    { id: 2, texto: 'Revisar correos electrónicos', completada: true },
    { id: 3, texto: 'Revisar inventario', completada: true },
    { id: 4, texto: 'Revisar contratos', completada: true },
    { id: 5, texto: 'Leer Documentación', completada: false },
    { id: 6, texto: 'Otra tarea', completada: false, disabled: true }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentTarea, setCurrentTarea] = useState(null);

  const handleAddTarea = (texto) => {
    const nuevaTarea = { id: Date.now(), texto, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const handleEditTarea = (id, nuevoTexto) => {
    const nuevasTareas = tareas.map(tarea => (
      tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
    ));
    setTareas(nuevasTareas);
  };

  const handleDeleteTarea = (id) => {
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  const handleToggleCompletada = (id) => {
    const nuevasTareas = tareas.map(tarea => (
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
    setTareas(nuevasTareas);
  };

  return (
    <div className="table-full-width">
      <Table>
        <tbody>
          {tareas.map(tarea => (
            <tr key={tarea.id}>
              <td>
                <Form.Check className="mb-1 pl-0">
                  <Form.Check.Label>
                    <Form.Check.Input
                      type="checkbox"
                      checked={tarea.completada}
                      onChange={() => handleToggleCompletada(tarea.id)}
                      disabled={tarea.disabled}
                    />
                    <span className="form-check-sign"></span>
                  </Form.Check.Label>
                </Form.Check>
              </td>
              <td>{tarea.texto}</td>
              <td className="td-actions text-right">
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-edit-${tarea.id}`}>Editar Tarea</Tooltip>}
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="info"
                    onClick={() => { setCurrentTarea(tarea); setShowModal(true); }}
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-delete-${tarea.id}`}>Eliminar</Tooltip>}
                >
                  <Button
                    className="btn-simple btn-link p-1"
                    type="button"
                    variant="danger"
                    onClick={() => handleDeleteTarea(tarea.id)}
                  >
                    <i className="fas fa-times"></i>
                  </Button>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => setShowModal(true)}>Agregar Tarea</Button>
      <TareaModal
        show={showModal}
        onHide={() => setShowModal(false)}
        tarea={currentTarea}
        onSave={(texto) => {
          if (currentTarea) {
            handleEditTarea(currentTarea.id, texto);
          } else {
            handleAddTarea(texto);
          }
          setShowModal(false);
          setCurrentTarea(null);
        }}
      />
    </div>
  );
};

const TareaModal = ({ show, onHide, tarea, onSave }) => {
  const [texto, setTexto] = useState(tarea ? tarea.texto : '');

  const handleSubmit = () => {
    onSave(texto);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{tarea ? 'Editar Tarea' : 'Agregar Tarea'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Texto de la Tarea</Form.Label>
          <Form.Control
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
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

export default TareasCrud;
