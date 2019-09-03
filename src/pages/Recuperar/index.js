import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Recuperar() {
  return (
    <Container>
      <div>
        <form>
          <h1>Recuperar</h1>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            required
            placeholder="Digite o seu e-mail para o envio do código de recuperação"
          />
          <button type="submit">Enviar</button>
          <Link className="link" to="/login">
            <p>Deseja fazer o login?</p>
          </Link>
        </form>
      </div>
    </Container>
  );
}
