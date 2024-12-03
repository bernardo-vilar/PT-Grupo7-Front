import React from "react";
import PerfilDeslogado from "./PerfilDeslogado";
import PerfilLogado from "./PerfilLogado";

const isLoggedIn = true; // Estado de login declarado no mesmo arquivo

const Feed = () => {
  return isLoggedIn ? <PerfilLogado /> : <PerfilDeslogado />;
};

export default Perfil;