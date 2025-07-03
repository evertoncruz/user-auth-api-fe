import React, { useState,  } from "react";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
  width: 300px;
`;

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/")
    } catch (err) {
      console.log(err);
      setError("Email ou senha inválidos");
    }
    
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </Form>
    </Container>
  );
};

export default Login;
