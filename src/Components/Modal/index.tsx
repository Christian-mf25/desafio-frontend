import { Form, Modal } from "react-bootstrap";

import { useUsers } from "../../Providers/Users";
import { ModalForm } from "../../styles/global";
import { CheckBox } from "./styles";

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
      <ModalForm show={showModal} onHide={handleModal}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              <h4>Linhas por página</h4>
            </Form.Label>

            <CheckBox
              label="Padrão"
              name="group1"
              checked={!perPage}
              onChange={handlePerPage}
            />
            <CheckBox
              label="50 linhas"
              name="group1"
              checked={perPage}
              onChange={handlePerPage}
            />
          </Form.Group>
        </Modal.Body>

        <hr style={{ width: "90%", margin: "0 auto" }} />

        <Modal.Body>
          <Form.Group>
            <Form.Label>
              <h4>Colunas</h4>
            </Form.Label>

            <CheckBox
              label="Usuário"
              checked={showName}
              onChange={handleShowName}
            />
            <CheckBox
              label="E-mail"
              checked={showEmail}
              onChange={handleShowEmail}
            />
            <CheckBox
              label="Cliente"
              checked={showCompany}
              onChange={handleShowCompany}
            />
            <CheckBox
              label="Perfil de acesso"
              checked={showUsername}
              onChange={handleShowUsername}
            />
          </Form.Group>
        </Modal.Body>
      </ModalForm>
    </>
  );
};

export default FormCheckModal;
