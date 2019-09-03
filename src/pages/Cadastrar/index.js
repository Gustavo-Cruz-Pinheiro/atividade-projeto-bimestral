import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Cadastrar() {
  return (
    <Container>
      <div>
        <form>
          <h1>Cadastrar</h1>
          <label htmlFor="nome">Nome</label>
          <input type="text" placeholder="exemplo: Gustavo" required />
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="exemplo: gustavo@gmail.com" />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            required
            placeholder="Dica: utilize no mínimo 8 caracteres"
          />
          <button type="submit">Cadastrar</button>
          <Link className="link" to="/login">
            <p>Já tem uma conta?</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
