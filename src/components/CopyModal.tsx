import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useGeneratePasswordContext } from "../contexts/generate_password_context";

const CopyModal = () => {
  const { show, closeModal } = useGeneratePasswordContext();

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Senha copiada com sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Agora você ja pode usar sua senha gerada onde desejar.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CopyModal;
