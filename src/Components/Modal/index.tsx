import { Form, Modal } from "react-bootstrap";

import { useUsers } from "../../Providers/Users";

interface IFormCheckModal {
  showModal: boolean;
  handleModal: () => void;
}

const FormCheckModal = ({ showModal, handleModal }: IFormCheckModal) => {
  const {
		perPage,
    showName,
    showEmail,
    showCompany,
    showUsername,
    handlePerPage,
    handleShowName,
    handleShowEmail,
    handleShowCompany,
    handleShowUsername,
  } = useUsers();

  return (
    <>
      <Modal show={showModal} onHide={handleModal} size="sm">
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              <h4>Linhas por página</h4>
            </Form.Label>

            <Form.Check label="Padrão" name="group1" checked={!perPage} onChange={handlePerPage}/>
            <Form.Check label="50 linhas" name="group1" checked={perPage} onChange={handlePerPage}/>
          </Form.Group>
        </Modal.Body>

        <hr style={{ width: "80%", margin: "0 auto" }} />

        <Modal.Body>
          <Form.Group>
            <Form.Label>
              <h4>Colunas</h4>
            </Form.Label>

            <Form.Check
              label="Usuário"
              checked={showName}
              onChange={handleShowName}
            />
            <Form.Check
              label="E-mail"
              checked={showEmail}
              onChange={handleShowEmail}
            />
            <Form.Check
              label="Cliente"
              checked={showCompany}
              onChange={handleShowCompany}
            />
            <Form.Check
              label="Perfil de acesso"
              checked={showUsername}
              onChange={handleShowUsername}
            />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormCheckModal;
