import BodyLogado from './componentsP/bodyLogado';
import HeaderLogado from './componentsP/headerLogado';

const PerfilLogado = () => {
    const fotoPerfil = "/perfil.png"
    const nomeUsuario = "Morty Gamer"
  return (
    <main className="bg-gray-200 h-screen">
      <HeaderLogado FotoPerfil={fotoPerfil}/>
      <BodyLogado FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario}/>
    </main>
  );
};

export default PerfilLogado;
