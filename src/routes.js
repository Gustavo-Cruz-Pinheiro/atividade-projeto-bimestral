import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Recuperar from "./pages/Recuperar";
import Cadastrar from "./pages/Cadastrar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/recuperar" component={Recuperar} />
      <Route path="/cadastrar" component={Cadastrar} />
    </BrowserRouter>
  );
}
