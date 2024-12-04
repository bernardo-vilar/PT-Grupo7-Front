import PerfilDeslogado from "./PerfilDeslogado";
import PerfilLogado from "./PerfilLogado";

const isLoggedIn = true; 

const Perfil = () => {
  return isLoggedIn ? <PerfilLogado /> : <PerfilDeslogado />;
};

export default Perfil;