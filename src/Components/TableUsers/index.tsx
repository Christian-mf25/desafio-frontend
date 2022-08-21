import { Button, Table } from "react-bootstrap";
import { useState } from "react";

import { AiOutlineMore } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import { useUsers } from "../../Providers/Users";
import FormCheckModal from "../Modal";

const TableUsers = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { users, showName, showCompany, showEmail, showUsername } = useUsers();

  const handleModal = () => setShowModal(!showModal);

  return (
    <>
      <div style={{ paddingLeft: "40px" }}>
        <Table striped borderless>
          <thead>
            <tr>
              {showName && <th>USUÁRIO</th>}
              {showEmail && <th>EMAIL</th>}
              {showCompany && <th>CLIENTE</th>}
              {showUsername && <th>PERFIL DE ACESSO</th>}
              <th>
                <Button onClick={handleModal}>
                  <AiOutlineMore />
                </Button>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                {showName && <td>{item.name.toUpperCase()}</td>}
                {showEmail && <td>{item.email.toUpperCase()}</td>}
                {showCompany && <td>{item.username.toUpperCase()}</td>}
                {showUsername && <td>{item.company.name.toUpperCase()}</td>}
                <td>
                  <BiPencil />
                  <MdClose />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <FormCheckModal showModal={showModal} handleModal={handleModal} />
      </div>
    </>
  );
};

export default TableUsers;
