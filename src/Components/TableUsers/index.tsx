import { useState } from "react";

import { AiOutlineMore } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import { Container, UsersTable } from "./styles";
import { useUsers } from "../../Providers/Users";
import FormCheckModal from "../Modal";

const TableUsers = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { users, showName, showCompany, showEmail, showUsername } = useUsers();

  const handleModal = () => setShowModal(!showModal);

  return (
    <>
      <Container>
        <UsersTable borderless>
          <thead>
            <tr>
              {showName && <th>USUÁRIO</th>}
              {showEmail && <th>EMAIL</th>}
              {showCompany && <th>CLIENTE</th>}
              {showUsername && <th>PERFIL DE ACESSO</th>}
              <th className="menu">
                  <AiOutlineMore onClick={handleModal}/>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                {showName && <td>{item.name.toUpperCase()}</td>}
                {showEmail && <td>{item.email.toUpperCase()}</td>}
                {showCompany && (
                  <td>
                    <div className="username">
                      {item.username.toUpperCase()}
                    </div>
                  </td>
                )}
                {showUsername && <td>{item.company.name.toUpperCase()}</td>}
                <td>
                  <BiPencil className="write" />
                  <MdClose className="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </UsersTable>

        <FormCheckModal showModal={showModal} handleModal={handleModal} />
      </Container>
    </>
  );
};

export default TableUsers;
