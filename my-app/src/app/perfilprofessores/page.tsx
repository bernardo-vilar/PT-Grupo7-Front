import PerfilProfessoresDeslogado from "./PerfilProfessoresDeslogado";
import PerfilProfessoresLogado from "./PerfilProfessoresLogado";

const isLoggedIn = true; 

const PerfilProfessores = () => {
  return isLoggedIn ? <PerfilProfessoresLogado /> : <PerfilProfessoresDeslogado />;
};

export default PerfilProfessores;