import React, { createContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Loader from "../../components/Loader/Loader";
import UserCard from "../../components/UserCard/UserCard";
import { IUserData } from "../../Interface";

export interface IUserContext {
  users: IUserData[];
  setUsers: React.Dispatch<React.SetStateAction<IUserData[]>>;
}

export const UserContext = createContext<IUserContext | null>(null);

const UsersList = () => {
  const [users, setUsers] = useState<IUserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container
      sx={{ py: 4, minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <UserContext.Provider value={{ users, setUsers }}>
        {loading ? (
          <Loader />
        ) : (
          <Grid container spacing={4}>
            {users.map((user: IUserData) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
        )}
      </UserContext.Provider>
    </Container>
  );
};

export default UsersList;
