"use client"
import PerfilProfessoresDeslogado from "./PerfilProfessoresDeslogado";
import PerfilProfessoresLogado from "./PerfilProfessoresLogado";
const isLoggedIn = true; 



const PerfilProfessores = ({params}) => {
  const professorId =  params.id;
  return isLoggedIn ? <PerfilProfessoresLogado Id = {professorId}
  /> : <PerfilProfessoresDeslogado 
  Id ={professorId} />;
};

export  default PerfilProfessores;

