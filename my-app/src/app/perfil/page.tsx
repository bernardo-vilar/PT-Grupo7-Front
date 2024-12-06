import PerfilDeslogado from "./PerfilDeslogado";
import PerfilLogado from "./PerfilLogado";

const isLoggedIn = false; 

const Perfil = () => {
  return isLoggedIn ? <PerfilLogado /> : <PerfilDeslogado />;
};

export default Perfil;