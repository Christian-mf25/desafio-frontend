import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../../Services/api";

interface UserProvidersProps {
  children: ReactNode;
}

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  company: {
    name: string;
  };
}

interface UserProviderData {
  handleShowUsername: () => void;
  handleShowCompany: () => void;
  handleShowEmail: () => void;
  handleShowName: () => void;
  handlePerPage: () => void;
  showUsername: boolean;
  showCompany: boolean;
  showEmail: boolean;
  showName: boolean;
  perPage: boolean;
  users: User[];
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

const UsersProvider = ({ children }: UserProvidersProps) => {
  const [users, setUsers] = useState<User[]>([] as User[]);

  const [showUsername, setShowUsername] = useState<boolean>(true);
  const [showCompany, setShowCompany] = useState<boolean>(true);
  const [showEmail, setShowEmail] = useState<boolean>(true);
  const [showName, setShowName] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<boolean>(false);

  const handleShowUsername = () => setShowUsername(!showUsername);
  const handleShowCompany = () => setShowCompany(!showCompany);
  const handleShowEmail = () => setShowEmail(!showEmail);
  const handleShowName = () => setShowName(!showName);
  const handlePerPage = () => setPerPage(!perPage);

  useEffect(() => {
    const getAllUsers = async () => {
      let usersArray = await API.get("/users");
      perPage
        ? setUsers(usersArray.data)
        : setUsers(usersArray.data.slice(0, 5));
    };
    getAllUsers();
  }, [perPage]);

  return (
    <UserContext.Provider
      value={{
        users,
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);

export { UsersProvider, useUsers };
