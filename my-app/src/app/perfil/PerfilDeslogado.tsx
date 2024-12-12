import HeaderDeslogado from "./componentsP/headerDeslogado";
import BodyDeslogado from "./componentsP/bodyDeslogado";

export default function PerfilDeslogado() {
  const fotoPerfil = "/perfil.png"
  const nomeUsuario = "Morty Gamer"
  return (
    <main className="bg-gray-200 min-h-screen">
      <HeaderDeslogado />
      <BodyDeslogado FotoPerfil={fotoPerfil} NomeUsuario={nomeUsuario}/>
    </main>
  );
}

