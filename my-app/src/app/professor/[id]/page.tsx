"use client"
import { useEffect, useState } from "react";
import PerfilProfessoresDeslogado from "./PerfilProfessoresDeslogado";
import PerfilProfessoresLogado from "./PerfilProfessoresLogado";




const PerfilProfessores = ({params}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const professorId =  params.id;
  return isLoggedIn ? <PerfilProfessoresLogado Id = {professorId}
  /> : <PerfilProfessoresDeslogado 
  Id ={professorId} />;
};

export  default PerfilProfessores;

