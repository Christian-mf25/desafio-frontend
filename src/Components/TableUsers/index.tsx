import { Button, Table, Alert } from "react-bootstrap";
import { AiOutlineMore } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import { useUsers } from "../../Providers/Users";

const TableUsers = () => {
  const { users } = useUsers();

  return (
    <>
      <div style={{paddingLeft:"40px"}}>
        <Table striped borderless>

          <thead>
            <tr>
              <th>USUÁRIO</th>
              <th>EMAIL</th>
              <th>CLIENTE</th>
              <th>PERFIL DE ACESSO</th>
              <th>
                <Button>
                  <AiOutlineMore />
                </Button>
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name.toUpperCase()}</td>
                <td>{item.email.toUpperCase()}</td>
                <td>{item.username.toUpperCase()}</td>
                <td>
                  <Alert variant="info">
                    {item.company.name.toUpperCase()}
                  </Alert>
                </td>
                <td>
                  <BiPencil />
                  <MdClose />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TableUsers;
