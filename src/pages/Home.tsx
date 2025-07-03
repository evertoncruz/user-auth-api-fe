import React from "react";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Home = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Container>
      <h1>Bem-vindo, {user?.email}</h1>
      <button onClick={handleLogout}>Sair</button>
    </Container>
  );
};

export default Home;
