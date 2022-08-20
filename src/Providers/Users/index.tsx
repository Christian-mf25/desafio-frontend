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
  name: string;
  email: string;
  username: string;
  company: {
    name: string;
  };
}


interface UserProviderData {
  users: User[];
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

const UsersProvider = ({ children }: UserProvidersProps) => {
  const [users, setUsers] = useState<User[]>([] as User[]);

  useEffect(() => {
    const getAllUsers = async () => {
      let usersArray = await API.get("/users");
      setUsers(usersArray.data);
    };
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);

export { UsersProvider, useUsers };
