"use client";

import PerfilDeslogado from "./PerfilDeslogado";
import PerfilLogado from "./PerfilLogado";
import { useEffect, useState } from "react";

const Perfil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return isLoggedIn ? <PerfilLogado /> : <PerfilDeslogado />;
};

export default Perfil;
