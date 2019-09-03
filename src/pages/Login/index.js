import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <div>
        <form>
          <h1>login</h1>
          <label htmlFor="email">E-mail</label>
          <input type="email" required />
          <label htmlFor="senha">Senha</label>
          <input type="password" required />
          <Link className="link" to="/recuperar">
            <p1>Esqueceu sua Senha?</p1>
          </Link>
          <button type="submit">Entrar</button>
          <Link className="link" to="/cadastrar">
            <p>Não tem uma conta? Cadastre-se</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
